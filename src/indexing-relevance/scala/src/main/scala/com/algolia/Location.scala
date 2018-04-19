package com.algolia

case class Location(name: String,
                    city: String,
                    country: String,
                    iataCode: String,
                    _geoLoc: GeoLoc,
                    linksCount: Int,
                    objectID: String)

case class GeoLoc(lat: Double, lng: Double)
