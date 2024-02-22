
-- Seed data for the author table
INSERT INTO author (firstName, lastName, mobile, email, intro)
VALUES 
  ('John', 'Doe', '1234567890', 'john.doe@example.com', 'Introductory text for John Doe'),
  ('Jane', 'Smith', '9876543210', 'jane.smith@example.com', 'Introductory text for Jane Smith'),
  ('Leo', 'Miguel Bantolino', 'n/a', 'leo.miguel.bantl@gmail.com', 'self made learner');

-- Seed data for the post table
INSERT INTO post (authorId, title, metaTitle, slug, summary, published, createdAt, updatedAt, publishedAt, content)
VALUES
  (1, 'First Post', 'Meta Title for First Post', 'first-post', 'Summary of the first post', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '# Exploring the Wonders of Deep Learning

## Introduction

Deep learning has emerged as a revolutionary technology, transforming the landscape of artificial intelligence. In this blog post, we will delve into the basics of deep learning, its applications, and its impact on various industries.

## What is Deep Learning?

Deep learning is a subset of machine learning that mimics the human brain''s neural networks to analyze and process data. It involves training neural networks on vast amounts of data to make predictions or decisions without explicit programming.

## Applications of Deep Learning

### Image Recognition

One of the most notable applications of deep learning is image recognition. Systems powered by deep learning algorithms can accurately identify objects in images, leading to advancements in facial recognition, medical imaging, and autonomous vehicles.

### Natural Language Processing (NLP)

Deep learning has revolutionized NLP, enabling machines to understand, interpret, and generate human-like text. This has paved the way for chatbots, language translation services, and sentiment analysis tools.

### Healthcare

In the healthcare sector, deep learning plays a crucial role in diagnosing diseases, predicting patient outcomes, and analyzing medical images. This technology has the potential to enhance diagnostic accuracy and improve patient care.

## Challenges and Future Prospects

While deep learning has achieved remarkable successes, challenges remain. Issues like interpretability, ethical concerns, and the need for large datasets pose ongoing challenges. However, ongoing research and advancements continue to address these issues.

## Conclusion

Deep learning is a powerful tool with diverse applications, from image recognition to healthcare. As technology continues to evolve, so will the capabilities of deep learning, opening up new possibilities and transforming the way we interact with the world.

Have you personally encountered applications of deep learning in your daily life or work?
'),
  (2, 'Second Post', 'Meta Title for Second Post', 'second-post', 'Summary of the second post', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'Content of the second post');

-- Seed data for the post_meta table
INSERT INTO post_meta (postId, name, content)
VALUES
  (1, 'Tag', 'Technology'),
  (1, 'Tag', 'Programming'),
  (2, 'Tag', 'Travel'),
  (2, 'Tag', 'Photography');

-- Seed data for the category table
INSERT INTO category (title, metaTitle, slug, content)
VALUES
  ('Technology', 'Meta Title for Technology', 'technology', 'Content related to technology'),
  ('Travel', 'Meta Title for Travel', 'travel', 'Content related to travel');
