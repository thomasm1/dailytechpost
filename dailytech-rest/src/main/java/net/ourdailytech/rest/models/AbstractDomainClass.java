package net.ourdailytech.rest.models;
 
import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Version;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;

@RequiredArgsConstructor
@MappedSuperclass
@SuperBuilder
public class AbstractDomainClass {

  @Version
  @Builder.Default
  private Integer version = 1;

  @CreationTimestamp
  @Column(updatable = false, nullable = false)
  private LocalDateTime timeCreated;

  @UpdateTimestamp
  @Column(nullable = false)
  private LocalDateTime timeUpdated;

  @PreUpdate
  @PrePersist
  public void updateTimeStamps() {
    timeUpdated = LocalDateTime.now();
  }

}