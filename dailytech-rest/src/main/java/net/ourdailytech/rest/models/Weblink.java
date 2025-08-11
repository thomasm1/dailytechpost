package net.ourdailytech.rest.models;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter @Getter
@Entity
@Table(name = "weblinks", schema = "dailytech")
@AttributeOverrides({
        @AttributeOverride(name = "title",      column = @Column(name = "title",      length = 255, nullable = false)),
        @AttributeOverride(name = "profileUrl", column = @Column(name = "profile_url", length = 1000))
})
public class Weblink extends Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

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

    public Weblink(long id, String url, String htmlPage) {
        this.id = id;
        this.url = url;
        this.host = "https://localhost:8080";
        this.htmlPage = htmlPage;
        this.downloadStatus = DownloadStatus.NOT_ATTEMPTED;
    }

    public enum DownloadStatus { NOT_ATTEMPTED, SUCCESS, FAILED, NOT_ELIGIBLE }

    @Override
    public String getItemData() {
        return new StringBuilder()
                .append("<item>")
                .append("<type>WebLink</type>")
                .append("<title>").append(getTitle()).append("</title>")
                .append("<url>").append(url).append("</url>")
                .append("<host>").append(host).append("</host>")
                .append("</item>")
                .toString();
    }

    @Override
    public boolean isWeb3Link() { return true; }
}