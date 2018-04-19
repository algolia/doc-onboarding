package com.algolia;

import java.util.Map;

public class BlogPost {

  private String objectID;
  private Integer postId;
  private String postTitle;
  private Integer postDate;
  private String postDateFormatted;
  private Author postAuthor;
  private String permalink;
  private String postMimeType;
  private Map<String, String> taxonomies;
  private String image;
  private Integer timeToRead;
  private String content;
  private Integer recordIndex;

  public String getObjectID() {
    return objectID;
  }

  public BlogPost setObjectID(String objectID) {
    this.objectID = objectID;
    return this;
  }

  public Integer getPostId() {
    return postId;
  }

  public BlogPost setPostId(Integer postId) {
    this.postId = postId;
    return this;
  }

  public String getPostTitle() {
    return postTitle;
  }

  public BlogPost setPostTitle(String postTitle) {
    this.postTitle = postTitle;
    return this;
  }

  public Integer getPostDate() {
    return postDate;
  }

  public BlogPost setPostDate(Integer postDate) {
    this.postDate = postDate;
    return this;
  }

  public String getPostDateFormatted() {
    return postDateFormatted;
  }

  public BlogPost setPostDateFormatted(String postDateFormatted) {
    this.postDateFormatted = postDateFormatted;
    return this;
  }

  public Author getPostAuthor() {
    return postAuthor;
  }

  public BlogPost setPostAuthor(Author postAuthor) {
    this.postAuthor = postAuthor;
    return this;
  }

  public String getPermalink() {
    return permalink;
  }

  public BlogPost setPermalink(String permalink) {
    this.permalink = permalink;
    return this;
  }

  public String getPostMimeType() {
    return postMimeType;
  }

  public BlogPost setPostMimeType(String postMimeType) {
    this.postMimeType = postMimeType;
    return this;
  }

  public Map<String, String> getTaxonomies() {
    return taxonomies;
  }

  public BlogPost setTaxonomies(Map<String, String> taxonomies) {
    this.taxonomies = taxonomies;
    return this;
  }

  public String getImage() {
    return image;
  }

  public BlogPost setImage(String image) {
    this.image = image;
    return this;
  }

  public Integer getTimeToRead() {
    return timeToRead;
  }

  public BlogPost setTimeToRead(Integer timeToRead) {
    this.timeToRead = timeToRead;
    return this;
  }

  public String getContent() {
    return content;
  }

  public BlogPost setContent(String content) {
    this.content = content;
    return this;
  }

  public Integer getRecordIndex() {
    return recordIndex;
  }

  public BlogPost setRecordIndex(Integer recordIndex) {
    this.recordIndex = recordIndex;
    return this;
  }
}

class Author {
  private String displayName;
  private String avatarURL;

  public String getDisplayName() {
    return displayName;
  }

  public Author setDisplayName(String displayName) {
    this.displayName = displayName;
    return this;
  }

  public String getAvatarURL() {
    return avatarURL;
  }

  public Author setAvatarURL(String avatarURL) {
    this.avatarURL = avatarURL;
    return this;
  }
}

