package net.ourdailytech.rest.models;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "roles")
public class Role implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "USERS_ROLES",
            joinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "user_id", referencedColumnName = "userid")
    )
    private List<User> users = new ArrayList<>();

    public Role(int id, String name) {
        this.id = id;
        this.name = name;
    }
}