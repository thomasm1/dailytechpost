package net.ourdailytech.rest.models;

import jakarta.persistence.*; 
import lombok.*; 

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity 
@Builder 
@Table(name = "roles")
public class Role  implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    int id;
    private String name;

    @ManyToMany(fetch = FetchType.EAGER) 
//    @JoinTable(name = "USERS_ROLES", joinColumns = @JoinColumn(name = "id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "userid", referencedColumnName = "id"))
    private List<Role> users = new ArrayList<>();

    public Role(int i, String name) {
        this.id = i;
        this.name = name;
    } 
}
