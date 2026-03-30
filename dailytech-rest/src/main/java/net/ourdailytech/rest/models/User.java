package net.ourdailytech.rest.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.ToString.Exclude;
import lombok.experimental.SuperBuilder;
import org.hibernate.proxy.HibernateProxy;
import xyz.cryptomaven.rest.models.UserPlan;
import xyz.cryptomaven.rest.util.enums.AuthProvider;
import xyz.cryptomaven.rest.validators.UniqueEmail;

@ToString
@RequiredArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@SuperBuilder  // ✅ Changed from @Builder to @SuperBuilder for JPA compatibility
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userid", nullable = false, unique = true)
    private Long userId;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "lastname")
    private String lastName;

    @Column(name = "firstname")
    private String firstName;

    @Column(name = "usertype")
    private int userType;

    @UniqueEmail
    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "organizationcode")
    private String organizationCode;

    @Column(name = "cusurl")
    private String cusUrl;

    @Column(name = "dashboardcode")
    private String dashboardCode;

    @Column(name = "isactive")
    private int isActive;

    @Column(name = "contacttype")
    private int contactType; // ContactType contactType

    @Transient
    private String id;

    @Enumerated(EnumType.STRING)
    @Column(name = "authprovider") // enum COGNITO, GOOGLE, INTERNAL
    private AuthProvider authProvider;

    @Column(name = "authsubject")
    private String authSubject; // jwt sub/uid from auth provider

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval=true, optional = true)
    private UserPlan userPlan;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @Exclude
    private Set<PostEntity> posts = new HashSet<>();

    @Builder.Default
    @ToString.Exclude  // ✅ Prevents infinite recursion
    @EqualsAndHashCode.Exclude // ✅ Avoids issues with hashCode()
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "userid"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id")
    )
    private Set<Role> roles = new HashSet<>();

    // Constructor for full user creation
    public User(long userId, String username, String password, String lastName, String firstName, int userType,
                String organizationCode, String email, String cusUrl, String dashboardCode, int isActive, int contactType, String id) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.lastName = lastName;
        this.firstName = firstName;
        this.userType = userType;
        this.email = email;
        this.organizationCode = organizationCode;
        this.cusUrl = cusUrl;
        this.dashboardCode = dashboardCode;
        this.isActive = isActive;
        this.contactType = contactType;
        this.id = id;
    }

    // Constructor for minimal user data
    public User(long userId, String username) {
        this.userId = userId;
        this.username = username;
    }

    // Constructor for authentication
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Constructor for profile updates
    public User(String password, String lastName, String firstName, int userType, String organizationCode,
                String email, String cusUrl, String dashboardCode, int isActive, int contactType, String id) {
        this.password = password;
        this.lastName = lastName;
        this.firstName = firstName;
        this.userType = userType;
        this.organizationCode = organizationCode;
        this.email = email;
        this.cusUrl = cusUrl;
        this.dashboardCode = dashboardCode;
        this.isActive = isActive;
        this.contactType = contactType;
        this.id = id;
    }

    @Override
    public final boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null) {
            return false;
        }
        Class<?> oEffectiveClass = o instanceof HibernateProxy
            ? ((HibernateProxy) o).getHibernateLazyInitializer().getPersistentClass()
            : o.getClass();
        Class<?> thisEffectiveClass = this instanceof HibernateProxy
            ? ((HibernateProxy) this).getHibernateLazyInitializer()
            .getPersistentClass() : this.getClass();
        if (thisEffectiveClass != oEffectiveClass) {
            return false;
        }
        User user = (User) o;
        return getUserId() != null && Objects.equals(getUserId(), user.getUserId());
    }

    @Override
    public final int hashCode() {
        return this instanceof HibernateProxy
            ? ((HibernateProxy) this).getHibernateLazyInitializer()
            .getPersistentClass().hashCode() : getClass().hashCode();
    }
}
