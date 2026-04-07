package net.ourdailytech.rest.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Setter @Getter
@Entity
@Table(name = "weblinks", schema = "dailytech")
@AttributeOverrides({
        @AttributeOverride(name = "title",      column = @Column(name = "title",      length = 255, nullable = false)),
        @AttributeOverride(name = "profileUrl", column = @Column(name = "profile_url", length = 1000))
})
public class Weblink extends Bookmark  {
    // id removed — use id defined in Bookmark (MappedSuperclass)

    @Column(name = "url", length = 1000, nullable = false)
    private String url;

    @Column(name = "host", length = 255)
    private String host;

    @Lob
    @Column(name = "htmlpage")
    private String htmlPage;

    @Enumerated(EnumType.STRING)
    @Column(name = "downloadstatus", length = 32, nullable = false)
    private DownloadStatus downloadStatus = DownloadStatus.NOT_ATTEMPTED;

    // Many comments can belong to one PostEntity
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "post_id", nullable = false)
    @ToString.Exclude
    @JsonIgnore
    private PostEntity postEntity;

    public Weblink(long id, String url, String htmlPage) {
      super();
      // id parameter is stored in the mapped superclass Bookmark
      setId(id);
      this.url = url;
        this.host = "https://localhost:8080";
        this.htmlPage = htmlPage;
        this.downloadStatus = DownloadStatus.NOT_ATTEMPTED;
    }

    public enum DownloadStatus { NOT_ATTEMPTED, SUCCESS, FAILED, NOT_ELIGIBLE }

    @Override
    public String getItemData() {
        return "<item>" +
                "<type>WebLink</type>" +
                "<title>" + getTitle() + "</title>" +
                "<url>" + url + "</url>" +
                "<host>" + host + "</host>" +
                "</item>";
    }

    @Override
    public boolean isWeb3Link() { return true; }

    public void setPostEntity(PostEntity post) {
        if (this.postEntity == post) return;

        if (this.postEntity != null) {
            this.postEntity.getWeblinks().remove(this);
        }

        this.postEntity = post;

        if (post != null && !post.getWeblinks().contains(this)) {
            post.getWeblinks().add(this);
        }
    }
}