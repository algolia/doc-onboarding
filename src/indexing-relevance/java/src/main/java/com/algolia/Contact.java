package com.algolia;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Contact {
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

  public Contact setObjectID(String objectID) {
    this.objectID = objectID;
    return this;
  }

  public String getAccountID() {
    return accountID;
  }

  public Contact setAccountID(String accountID) {
    this.accountID = accountID;
    return this;
  }

  public String getName() {
    return name;
  }

  public Contact setName(String name) {
    this.name = name;
    return this;
  }

  public String getAccount() {
    return account;
  }

  public Contact setAccount(String account) {
    this.account = account;
    return this;
  }

  public Integer getAmount() {
    return amount;
  }

  public Contact setAmount(Integer amount) {
    this.amount = amount;
    return this;
  }

  public String getId() {
    return id;
  }

  public Contact setId(String id) {
    this.id = id;
    return this;
  }

  public String getCloseDate() {
    return closeDate;
  }

  public Contact setCloseDate(String closeDate) {
    this.closeDate = closeDate;
    return this;
  }

  public String getStageName() {
    return stageName;
  }

  public Contact setStageName(String stageName) {
    this.stageName = stageName;
    return this;
  }

  public String getOwnerID() {
    return ownerID;
  }

  public Contact setOwnerID(String ownerID) {
    this.ownerID = ownerID;
    return this;
  }

  public String getType() {
    return type;
  }

  public Contact setType(String type) {
    this.type = type;
    return this;
  }
}
