package com.algolia;

public class Opportunity {
  private String objectID;
  private String accountID;
  private String name;
  private String account;
  private Integer amount;
  private String id;
  private String closeDate;
  private String stageName;
  private String ownerID;
  private String type;

  public String getObjectID() {
    return objectID;
  }

  public Opportunity setObjectID(String objectID) {
    this.objectID = objectID;
    return this;
  }

  public String getAccountID() {
    return accountID;
  }

  public Opportunity setAccountID(String accountID) {
    this.accountID = accountID;
    return this;
  }

  public String getName() {
    return name;
  }

  public Opportunity setName(String name) {
    this.name = name;
    return this;
  }

  public String getAccount() {
    return account;
  }

  public Opportunity setAccount(String account) {
    this.account = account;
    return this;
  }

  public Integer getAmount() {
    return amount;
  }

  public Opportunity setAmount(Integer amount) {
    this.amount = amount;
    return this;
  }

  public String getId() {
    return id;
  }

  public Opportunity setId(String id) {
    this.id = id;
    return this;
  }

  public String getCloseDate() {
    return closeDate;
  }

  public Opportunity setCloseDate(String closeDate) {
    this.closeDate = closeDate;
    return this;
  }

  public String getStageName() {
    return stageName;
  }

  public Opportunity setStageName(String stageName) {
    this.stageName = stageName;
    return this;
  }

  public String getOwnerID() {
    return ownerID;
  }

  public Opportunity setOwnerID(String ownerID) {
    this.ownerID = ownerID;
    return this;
  }

  public String getType() {
    return type;
  }

  public Opportunity setType(String type) {
    this.type = type;
    return this;
  }
}
