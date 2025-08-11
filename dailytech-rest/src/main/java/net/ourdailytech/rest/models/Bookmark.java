package net.ourdailytech.rest.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@MappedSuperclass
public class Bookmark implements Shareable {
    private static final long serialVersionUID = 1L;

    private String title;

    private String profileUrl;


    /**
     * @return
     */
    @Override
    public String getItemData() {
        return title + " : " + profileUrl;
    }

    /**
     * @return
     */
    @Override
    public boolean isWeb3Link() {
        return false;
    }

}
