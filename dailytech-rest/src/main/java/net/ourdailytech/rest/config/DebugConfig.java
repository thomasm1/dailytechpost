// DebugConfig.java
package net.ourdailytech.rest.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.ApplicationContext;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.repository.Repository;
import java.lang.reflect.Method;
import org.springframework.data.repository.query.Param;

@Configuration
public class DebugConfig implements CommandLineRunner {
  private final ApplicationContext ctx;
  public DebugConfig(ApplicationContext ctx){ this.ctx = ctx; }
  @Override
  public void run(String... args) {
    System.out.println("=== Repository parameter audit ===");
    ctx.getBeansOfType(Object.class).values().stream()
        .map(Object::getClass)
        .map(c -> c.getInterfaces().length > 0 ? c.getInterfaces()[0] : c)
        .filter(i -> Repository.class.isAssignableFrom(i))
        .distinct()
        .forEach(repo -> {
          for (Method m : repo.getMethods()) {
            var params = m.getParameters();
            for (var p : params) {
              Param ann = p.getAnnotation(Param.class);
              if (ann == null) {
                System.out.println(repo.getName() + "#" + m.getName() +
                    " param without @Param: " + p.getName() + " type=" + p.getType().getSimpleName());
              }
            }
          }
        });
  }
}