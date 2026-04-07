package net.ourdailytech.rest.util.enums;

public enum Plan {

  // MUST BE ORDERED - FREE <  WHALE_WATCHER < TOKEN_STALKER < TOKEN_STALKER_PRO
  FREE, 
  WHALE_WATCHER,
  TOKEN_STALKER,
  TOKEN_STALKER_PRO;

  public boolean isAtLeast(Plan other) {
    return this.ordinal() >= other.ordinal();
  }

  public Plan setPlan(Plan plan) {
    return plan;
  }
}