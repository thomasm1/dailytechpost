package net.ourdailytech.rest.config;

import java.util.ArrayList;
import java.util.List;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "dailytech.link-classification")
public class LinkClassificationProperties {

  private Long defaultCategoryId;
  private List<CategoryPatternProperties> patterns = new ArrayList<>();

  public Long getDefaultCategoryId() {
    return defaultCategoryId;
  }

  public void setDefaultCategoryId(Long defaultCategoryId) {
    this.defaultCategoryId = defaultCategoryId;
  }

  public List<CategoryPatternProperties> getPatterns() {
    return patterns;
  }

  public void setPatterns(List<CategoryPatternProperties> patterns) {
    this.patterns = patterns == null ? new ArrayList<>() : patterns;
  }

  public static class CategoryPatternProperties {
    private Long categoryId;
    private Double confidence;
    private String reason;
    private List<String> terms = new ArrayList<>();

    public Long getCategoryId() {
      return categoryId;
    }

    public void setCategoryId(Long categoryId) {
      this.categoryId = categoryId;
    }

    public Double getConfidence() {
      return confidence;
    }

    public void setConfidence(Double confidence) {
      this.confidence = confidence;
    }

    public String getReason() {
      return reason;
    }

    public void setReason(String reason) {
      this.reason = reason;
    }

    public List<String> getTerms() {
      return terms;
    }

    public void setTerms(List<String> terms) {
      this.terms = terms == null ? new ArrayList<>() : terms;
    }
  }
}
