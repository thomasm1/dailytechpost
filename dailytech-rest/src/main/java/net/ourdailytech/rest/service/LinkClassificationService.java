package net.ourdailytech.rest.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import net.ourdailytech.rest.config.LinkClassificationProperties;
import net.ourdailytech.rest.config.LinkClassificationProperties.CategoryPatternProperties;
import org.springframework.stereotype.Service;

@Service
public class LinkClassificationService {

  public static final Long DEFAULT_CATEGORY_ID = 11L;
  public static final Long AI_CATEGORY_ID = 10L;
  public static final Long WEBDEV_CATEGORY_ID = 11L;
  public static final Long SOCIOLOGY_CATEGORY_ID = 12L;
  public static final Long QUANTUM_CATEGORY_ID = 13L;
  public static final Long BLOCKCHAIN_CATEGORY_ID = 14L;

  private static final List<CategoryPattern> DEFAULT_CATEGORY_PATTERNS = List.of(
      new CategoryPattern(
          AI_CATEGORY_ID,
          0.85,
          "Matched AI terms",
          List.of("a.i.", "ai", "artificial intelligence", "llm", "openai", "llama", "machine learning",
              "neural", "deep learning", "generative ai")
      ),
      new CategoryPattern(
          QUANTUM_CATEGORY_ID,
          0.90,
          "Matched quantum terms",
          List.of("quantum", "qubit", "qiskit", "ibm quantum", "quantum computing")
      ),
      new CategoryPattern(
          SOCIOLOGY_CATEGORY_ID,
          0.85,
          "Matched sociology or data terms",
          List.of("sociology", "statistics", "statcan", "data.gov", "sagepub", "research methods",
              "gapminder", "kaggle", "semantic scholar", "stanford")
      ),
      new CategoryPattern(
          BLOCKCHAIN_CATEGORY_ID,
          0.85,
          "Matched blockchain terms",
          List.of("blockchain", "web3", "crypto", "ethereum", "bitcoin", "smart contract", "solidity",
              "truffle", "token", "defi", "wallet")
      ),
      new CategoryPattern(
          WEBDEV_CATEGORY_ID,
          0.85,
          "Matched web development terms",
          List.of("angular", "react", "javascript", "typescript", "css", "html", "docker", "aws",
              "api", "frontend", "web dev", "web development")
      )
  );

  private final LinkClassificationProperties properties;

  public LinkClassificationService(LinkClassificationProperties properties) {
    this.properties = properties;
  }

  public LinkCategorySuggestion suggestCategory(String url, String title) {
    String text = normalize(url) + " " + normalize(title);

    for (CategoryPattern pattern : getCategoryPatterns()) {
      if (matches(text, pattern.terms())) {
        return new LinkCategorySuggestion(pattern.categoryId(), pattern.confidence(), pattern.reason());
      }
    }

    return new LinkCategorySuggestion(getDefaultCategoryId(), 0.0, "Default category");
  }

  private List<CategoryPattern> getCategoryPatterns() {
    List<CategoryPattern> patterns = new ArrayList<>(DEFAULT_CATEGORY_PATTERNS);

    for (CategoryPatternProperties configured : properties.getPatterns()) {
      if (configured.getCategoryId() == null || configured.getTerms().isEmpty()) {
        continue;
      }

      patterns.add(new CategoryPattern(
          configured.getCategoryId(),
          configured.getConfidence() == null ? 0.70 : configured.getConfidence(),
          configured.getReason() == null || configured.getReason().isBlank()
              ? "Matched configured terms"
              : configured.getReason(),
          configured.getTerms()
      ));
    }

    return patterns;
  }

  private Long getDefaultCategoryId() {
    return properties.getDefaultCategoryId() == null ? DEFAULT_CATEGORY_ID : properties.getDefaultCategoryId();
  }

  private String normalize(String value) {
    return value == null ? "" : value.toLowerCase(Locale.ROOT);
  }

  private boolean matches(String text, List<String> terms) {
    return terms.stream()
        .map(this::normalize)
        .anyMatch(text::contains);
  }

  private record CategoryPattern(Long categoryId, double confidence, String reason, List<String> terms) {
  }
}
