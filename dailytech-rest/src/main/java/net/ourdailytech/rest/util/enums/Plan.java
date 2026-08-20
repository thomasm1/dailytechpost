package net.ourdailytech.rest.util.enums;

public enum Plan {

  // MUST BE ORDERED - FREE <  WHALE_WATCHER < TOKEN_STALKER < PREMIUM
  FREE, 
  WHALE_WATCHER,
  TOKEN_STALKER,
  PREMIUM;

  public boolean isAtLeast(Plan other) {
    return this.ordinal() >= other.ordinal();
  }

  public Plan setPlan(Plan plan) {
    return plan;
  }
}
