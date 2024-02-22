-- email and mobile should be unique
CREATE TABLE author (
  id BIGSERIAL PRIMARY KEY,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50) NOT NULL,
  mobile VARCHAR(50) UNIQUE,
  email VARCHAR(50) NOT NULL UNIQUE,
  intro TEXT
);

CREATE INDEX idx_usr ON author(mobile, email);

/*
* NOTES:
* - essentially create a post table inside the blog database
* - the ON DELETE, and ON UPDATE statement are used to avoid accidently deleting the foreign key
* - in the future if we do decide to create a user's table it's best to make the authorId reference the user id from the user table
*/

CREATE TABLE post (
  id BIGSERIAL PRIMARY KEY,
  -- user name should limited 25 characters
  authorId BIGINT NOT NULL,
  title VARCHAR(75) NOT NULL,
  metaTitle VARCHAR(100),
  slug VARCHAR(100) NOT NULL UNIQUE,
  summary TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  publishedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  content TEXT NOT NULL,
  CONSTRAINT fk_author
    FOREIGN KEY (authorId)
    REFERENCES author(id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- index the slug for quick search
-- defaults to using the btree as the method of choice
CREATE INDEX idx_slug ON post(slug);


/*
* The CONSTRAINT something is simply the name given for the foreign key constraint
*/
CREATE TABLE post_meta (
  id BIGSERIAL PRIMARY KEY,
  postId BIGINT NOT NULL,
  name VARCHAR(50) NOT NULL,
  content TEXT,
  CONSTRAINT fk_meta_post
    FOREIGN KEY (postId)
    REFERENCES post (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE INDEX idx_meta_post ON post_meta(postId);


CREATE TABLE category (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(75) NOT NULL,
  metaTitle VARCHAR(100),
  slug VARCHAR(100) NOT NULL,
  content TEXT
);


