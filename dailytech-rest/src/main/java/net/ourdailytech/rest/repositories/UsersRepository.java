package net.ourdailytech.rest.repositories;

import jakarta.validation.constraints.NotNull;
import net.ourdailytech.rest.models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


import java.util.List;
import java.util.Optional;

@RepositoryRestResource(collectionResourceRel = "users", path = "users", itemResourceRel = "user")
public interface UsersRepository extends JpaRepository<User, Integer> {

    // MULTIPLE
    Page<User> findAllByUserType(Integer userType, Pageable pageable);

    User save(User user);

    // SINGULAR
    Optional<User> findByUserId(@NotNull Long userId);



    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);

    @Query("SELECT u FROM User u LEFT JOIN FETCH u.roles WHERE u.email = :email")
    Optional<User> findByEmailWithRoles(@Param("email") String email);

    @Query("SELECT r.name FROM User u JOIN u.roles r WHERE u.email = :email")
    List<String> findRoleNamesByEmail(@Param("email") String email);

    Optional<User> findByEmailAndPassword(String email, String password);

    //    // SQL /////////////////////
    @Query(nativeQuery = true, value = "SELECT * FROM users where firstname = :firstName")
    List<User> findUsersByFirstName(@Param("firstName") String firstName);

    // JPQL  ///////////////////
    @Query("SELECT u FROM User u WHERE u.firstName LIKE %?1% OR u.lastName LIKE %?1%")
    List<User> search(String keyword);

    List<User> findByFirstNameOrderByLastNameAsc(String firstName);

    //  // JPQL
    @Query("SELECT u FROM User u WHERE UPPER(u.firstName) LIKE CONCAT('%',UPPER(?1), '%')")
    List<User> findByFirstNameContainingIgnoreCase(String firstName);
//
}
