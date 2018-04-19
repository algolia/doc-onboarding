package com.algolia;

public class Location {

  private String name;
  private String city;
  private String country;
  private String iataCode;
  private GeoLoc _geoLoc;
  private Integer linksCount;
  private String objectID;

  public String getName() {
    return name;
  }

  public Location setName(String name) {
    this.name = name;
    return this;
  }

  public String getCity() {
    return city;
  }

  public Location setCity(String city) {
    this.city = city;
    return this;
  }

  public String getCountry() {
    return country;
  }

  public Location setCountry(String country) {
    this.country = country;
    return this;
  }

  public String getIataCode() {
    return iataCode;
  }

  public Location setIataCode(String iataCode) {
    this.iataCode = iataCode;
    return this;
  }

  public GeoLoc get_geoLoc() {
    return _geoLoc;
  }

  public Location set_geoLoc(GeoLoc _geoLoc) {
    this._geoLoc = _geoLoc;
    return this;
  }

  public Integer getLinksCount() {
    return linksCount;
  }

  public Location setLinksCount(Integer linksCount) {
    this.linksCount = linksCount;
    return this;
  }

  public String getObjectID() {
    return objectID;
  }

  public Location setObjectID(String objectID) {
    this.objectID = objectID;
    return this;
  }
}

class GeoLoc {

  private Double lat;
  private Double lng;

  public Double getLat() {
    return lat;
  }

  public GeoLoc setLat(Double lat) {
    this.lat = lat;
    return this;
  }

  public Double getLng() {
    return lng;
  }

  public GeoLoc setLng(Double lng) {
    this.lng = lng;
    return this;
  }
}
