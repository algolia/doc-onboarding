package com.algolia

case class Post(objectID: String,
                postId: Int,
                postTitle: String,
                postDate: Int,
                postDateFormatted: String,
                postAuthor: Author,
                permalink: String,
                postMimeType: String,
                taxonomies: Map[String, String],
                image: String,
                timeToRead: Int,
                content: String,
                recordIndex: Int)

case class Author(displayName: String, avatarURL: String)
