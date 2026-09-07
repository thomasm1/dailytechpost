package net.ourdailytech.rest.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import net.ourdailytech.rest.exception.EmailAlreadyExistsException;
import net.ourdailytech.rest.exception.PostApiException;
import net.ourdailytech.rest.exception.ResourceNotFoundException;
import net.ourdailytech.rest.mapper.UserMapper;
import net.ourdailytech.rest.models.Role;
import net.ourdailytech.rest.models.User;
import net.ourdailytech.rest.models.dto.LoginDto;
import net.ourdailytech.rest.models.dto.RegisterDto;
import net.ourdailytech.rest.models.dto.UserDto;
import net.ourdailytech.rest.models.dto.CreateUserRequestDto;
import net.ourdailytech.rest.models.dto.UserProfileUpdateDto;
import org.springframework.security.authentication.BadCredentialsException;
import net.ourdailytech.rest.repositories.RoleRepository;
import net.ourdailytech.rest.repositories.UsersRepository;
import net.ourdailytech.rest.security.JwtTokenProvider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.*;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.RequestParam;

@Transactional
@Service
public class UsersServiceImpl implements UsersService {

  private static final Logger log = LoggerFactory.getLogger(UsersServiceImpl.class);
  private final JwtTokenProvider jwtTokenProvider;
  private AuthenticationManager authenticationManager;
  private PasswordEncoder passwordEncoder;

  public UsersRepository usersRepository;
  private RoleRepository roleRepository;
  private UserMapper userMapper;

  @Autowired
  public UsersServiceImpl(
      AuthenticationManager authenticationManager,
      PasswordEncoder passwordEncoder,
      RoleRepository roleRepository,
      UsersRepository usersRepository,
      UserMapper userMapper,
      JwtTokenProvider jwtTokenProvider) {
    this.authenticationManager = authenticationManager;
    this.passwordEncoder = passwordEncoder;
    this.roleRepository = roleRepository;
    this.userMapper = userMapper;
    this.usersRepository = usersRepository;
    this.jwtTokenProvider = jwtTokenProvider;
  }

  public UsersServiceImpl(JwtTokenProvider jwtTokenProvider) {
    this.jwtTokenProvider = jwtTokenProvider;
  }

  /**
   * @param username;
   * @param password;
   * @return UserDto
   */
  @Override
  public UserDto loginUser(String email, String password) {
    Optional<User> optionalUser = usersRepository.findByEmail(email );
    if (optionalUser.isPresent()) {
      User u = optionalUser.get();
      if (passwordEncoder.matches(password, u.getPassword())) {
        return userMapper.toDto(u);
      }
    } else {
      throw new ResourceNotFoundException("User", "email", email);
    }
    throw new BadCredentialsException("Invalid credentials");
  }

  /**
   * @param loginDto;
   * @return String
   */
  @Override
  public String login(LoginDto loginDto) {
    String usernameOrEmail = StringUtils.hasText(loginDto.getUsernameOrEmail())
        ? loginDto.getUsernameOrEmail().trim()
        : loginDto.getUsernameOrEmail();

    Optional<User> loginUser = StringUtils.hasText(usernameOrEmail)
        ? usersRepository.findByEmail(usernameOrEmail)
        : Optional.empty();
    Boolean passwordMatches = loginUser
        .map(user -> StringUtils.hasText(user.getPassword())
            && loginDto.getPassword() != null
            && passwordEncoder.matches(loginDto.getPassword(), user.getPassword()))
        .orElse(null);

    log.info(
        "Native JWT login attempt (usernameOrEmail={}, userFound={}, passwordMatches={})",
        usernameOrEmail,
        loginUser.isPresent(),
        passwordMatches);

    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            usernameOrEmail,
            loginDto.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);
    return jwtTokenProvider.generateToken(authentication);
  }

  /**
   * @param userDto;
   * @return UserDto
   */
  @Override
  public UserDto createUser(CreateUserRequestDto userDto) {
    Optional<User> optionalUser = usersRepository.findByEmail(userDto.getEmail());
    if (optionalUser.isPresent()) {
      throw new EmailAlreadyExistsException("User already exists");
    }
    User user = new User();
    user.setEmail(userDto.getEmail());
    user.setPassword(passwordEncoder.encode(userDto.getPassword()));
    user.setFirstName(userDto.getFirstName());
    user.setLastName(userDto.getLastName());
    user.setOrganizationCode(userDto.getOrganizationCode());
    user.setDashboardCode(userDto.getDashboardCode());
    user.setCusUrl(userDto.getCusUrl());
    user.setUserType(userDto.getUserType() == null ? 0 : userDto.getUserType());
    user.setContactType(userDto.getContactType() == null ? 0 : userDto.getContactType());
    user.setIsActive(userDto.getIsActive() == null ? 1 : userDto.getIsActive());
    user.setAuthProvider(userDto.getAuthProvider());
    user.setAuthSubject(userDto.getAuthSubject());
    Role role = roleRepository.findByName("ROLE_USER")
        .orElseThrow(() -> new ResourceNotFoundException("Role", "name", "ROLE_USER"));

    user.setRoles(Collections.singleton(role));
    User u = usersRepository.save(user);
    return userMapper.toDto(u);
  }

  /**
   * @param registerDto;
   * @return String
   */
  @Override
  public Optional<UserDto> register(RegisterDto registerDto) {
    if (usersRepository.existsByEmail(registerDto.getEmail())) {
      throw new PostApiException(HttpStatus.BAD_REQUEST, "Email  already exists!.");
    }
    User user = new User();
    user.setEmail(registerDto.getEmail());
    user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
    user.setFirstName(registerDto.getFirstName());
    user.setLastName(registerDto.getLastName());
    user.setAuthProvider(net.ourdailytech.rest.util.enums.AuthProvider.INTERNAL);
    user.setIsActive(1);

    Set<Role> roles = new HashSet<>();
    Optional<Role> userRole = Optional.ofNullable(roleRepository.findByName("ROLE_USER")
        .orElseThrow(() -> new ResourceNotFoundException("Role", "name", "ROLE_USER")));
    roles.add(userRole.get());
    user.setRoles(roles);
    User u = usersRepository.save(user);
    return Optional.ofNullable(userMapper.toDto(u));
  }


  /**
   * @param id
   * @return UserDto
   */
  @Override
  public Optional<UserDto> getUser(long id) {
    return usersRepository.findByUserId(id).map(userMapper::toDto);
  }

  /**
   * @param email;
   * @return UserDto
   */
  public Optional<UserDto> getUserByEmail(String email) {
    return usersRepository.findByEmail(email).map(userMapper::toDto);
  }

  /**
   * @return List<UserDto>
   */
  @Override
  public List<UserDto> getUsers() {
    return usersRepository.findAll().stream().map(userMapper::toDto).collect(Collectors.toList());
  }

  /**
   * @param change;
   * @param userId;
   * @return UserDto
   */
  @Override
  public Optional<UserDto> updateUser(UserDto change, long userId) {
    User existing = usersRepository.findByUserId(userId).orElseThrow(
        () -> new ResourceNotFoundException("User", "userId", String.valueOf(userId))
    );
    userMapper.partialUpdate(change, existing);
    existing.setUserId(userId); // keep path/query id authoritative

    User saved = usersRepository.save(existing);
    return Optional.ofNullable(userMapper.toDto(saved));
  }

  /**
   * @param change;
   * @param userId;
   * @return UserDto
   */
  @Override
  public Optional<UserDto> patchUser(UserDto change, Long userId) {

    User user = usersRepository.findByUserId(userId)
        .orElseThrow(() ->
            new ResourceNotFoundException("User", "userId", String.valueOf(userId))
        );

   userMapper.partialUpdate(change, user);

    User saved = usersRepository.save(user);
    return Optional.of(userMapper.toDto(saved));
  }

  @Override
  public Optional<UserDto> updateUserProfileByEmail(String email, UserProfileUpdateDto change) {
    // Both sister endpoints select the account here. A body cannot redirect the update.
    User user = usersRepository.findByEmail(email)
        .orElseThrow(() -> new ResourceNotFoundException("User", "email", email));
    if (change.getFirstName() != null) user.setFirstName(change.getFirstName());
    if (change.getLastName() != null) user.setLastName(change.getLastName());
    if (change.getOrganizationCode() != null) user.setOrganizationCode(change.getOrganizationCode());
    if (change.getContactType() != null) user.setContactType(change.getContactType());
    if (change.getCusUrl() != null) user.setCusUrl(change.getCusUrl());
    return Optional.of(userMapper.toDto(usersRepository.save(user)));
  }

  /**
   * @param userId;
   * @return boolean
   */
  @Override
  public boolean deleteUser(Long userId) {
    try {
      User u = usersRepository.findByUserId(userId).get();
      usersRepository.delete(u);
    } catch (IllegalArgumentException e) {
      e.printStackTrace();
      return false;
    }
    return true;
  }

  /**
   * @param user;
   * @return boolean
   */
  @Override
  public boolean deleteUser(UserDto user) {

    try {
      User u = usersRepository.findByEmail(user.getEmail()).get();
      usersRepository.delete(u);
    } catch (IllegalArgumentException e) {
      e.printStackTrace();
      return false;
    }
    return true;
  }


}
