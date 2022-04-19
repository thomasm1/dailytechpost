// Look at those @decorators! 
// Source code for KarateOptions: 


package com.intuit.karate;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
public @interface KarateOptions {
String[] features() default {};

    String[] tags() default {};
}1
