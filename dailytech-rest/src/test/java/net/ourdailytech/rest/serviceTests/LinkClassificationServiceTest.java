package net.ourdailytech.rest.serviceTests;

import java.util.List;
import net.ourdailytech.rest.config.LinkClassificationProperties;
import net.ourdailytech.rest.config.LinkClassificationProperties.CategoryPatternProperties;
import net.ourdailytech.rest.service.LinkClassificationService;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LinkClassificationServiceTest {

  private final LinkClassificationService service = new LinkClassificationService(new LinkClassificationProperties());

  @Test
  void suggestsAiCategoryForAiLinks() {
    assertEquals(10L, service.suggestCategory("https://www.llama.com/llama-downloads/", "Download Llama").categoryId());
  }

  @Test
  void suggestsQuantumCategoryForQuantumLinks() {
    assertEquals(13L, service.suggestCategory("https://quantum-computing.ibm.com", "Qiskit tutorial").categoryId());
  }

  @Test
  void suggestsSociologyCategoryForDataResearchLinks() {
    assertEquals(12L, service.suggestCategory("https://www.kaggle.com", "Data science dataset").categoryId());
  }

  @Test
  void suggestsWebDevCategoryForWebDevelopmentLinks() {
    assertEquals(11L, service.suggestCategory("https://react.dev", "React documentation").categoryId());
  }

  @Test
  void suggestsBlockchainCategoryForBlockchainLinks() {
    assertEquals(14L, service.suggestCategory(
        "https://archive.trufflesuite.com/blog/build-on-web3-with-truffle-vs-code-extension/",
        "Build on Web3 with Truffle"
    ).categoryId());
  }

  @Test
  void defaultsToWebDevCategoryWhenNoTermsMatch() {
    assertEquals(11L, service.suggestCategory("https://example.com/resource", "Example resource").categoryId());
  }

  @Test
  void usesConfiguredCategoryPatternsInAdditionToJavaDefaults() {
    LinkClassificationProperties properties = new LinkClassificationProperties();
    CategoryPatternProperties pattern = new CategoryPatternProperties();
    pattern.setCategoryId(12L);
    pattern.setConfidence(0.88);
    pattern.setReason("Matched configured research term");
    pattern.setTerms(List.of("ethnography"));
    properties.setPatterns(List.of(pattern));

    LinkClassificationService configuredService = new LinkClassificationService(properties);

    assertEquals(12L, configuredService.suggestCategory("https://example.com", "Digital ethnography").categoryId());
    assertEquals(10L, configuredService.suggestCategory("https://openai.com", "OpenAI").categoryId());
  }
}
