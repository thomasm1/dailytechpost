package net.ourdailytech.rest.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString
@Entity
@Table(name = "USERS")
public class User {

    @Id
//    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "ID_MAKER" )
//    @SequenceGenerator(name = "ID_MAKER", sequenceName = "ID_MAKER", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USERID", nullable = false, unique = true)
    private int userId;

    @Column(name = "USERNAME"  )
    private String username;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "LASTNAME")
    private String lastName;

    @Column(name = "FIRSTNAME")
    private String firstName;

    @Column(name = "USERTYPE")
    private int userType;
    @Column(name = "EMAIL", nullable = false)
    private String email;
    @Column(name = "ORGANIZATIONCODE")
    private String organizationCode;

    @Column(name = "CUSURL")
    private String cusUrl;

    @Column(name = "DASHBOARDCODE")
    private String dashboardCode;
    @Column(name = "ISACTIVE")
    private int isActive;

    @Column(name = "CONTACTTYPE")
    private int contactType; // ContactType contactType
    @Transient
    private String id;
 
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "USERS_ROLES",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "userid")},
            inverseJoinColumns = {@JoinColumn(name = "role_id", referencedColumnName = "id")}
    )
    private Set<Role> roles = new HashSet<>();

    //
    public User(int userid, String username, String password, String lastName, String firstName, int groups, int userType, String organizationCode, String email, String cusUrl, String photoPath, String dashboardCode, int isActive, int contactType, String id) {
        super();

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

    // overloaded for getUsersByCArs() call to DB
    public User(int userId, String username) {
        super();
        this.userId = userId;
        this.username = username;
    }

    public User(String username, String password) {
        super();
        this.username = username;
        this.password = password;
    }

    // overloaded for OFFER/ Groups must be multi-purpose
    public User(int userId, String username, String password, int groups, int userType) {
        super();
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.userType = userType;
    }


    //	 overloaded WITHOUT userId  FOR Creating TO ORACLE DB  FOR ORACLE DB INSERTION/RETRIEVAL
    public User(String username, String password, String lastName, String firstName,
                int groups, int userType, String organizationCode, String email, String cusUrl, String photoPath,
                String dashboardCode,
                int isActive,
                int contactType,
                String id) {
        super();
        this.username = username;
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

    public User(int userId, String username, String password) {
        super();
        this.userId = userId;
        this.username = username;
        this.password = password;
    }

    //     Contstructor for EDIT PROFILE (options available for user)
    public User(String password, String lastName, String firstName,
                int groups, int userType, String organizationCode, String email, String cusUrl, String photoPath,
                String dashboardCode,
                int isActive,
                int contactType, // ContactType contactType
                String id) {
        super();

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

}