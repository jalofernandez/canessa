import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

import matter from 'gray-matter';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export function sanitizeArticle(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [
      'p',
      'br',
      'strong',
      'b',
      'em',
      'i',
      'a',
      'ul',
      'ol',
      'li',
      'blockquote',
      'h2',
      'h3',
      'hr',
    ],
    allowedAttributes: { a: ['href', 'title', 'target', 'rel'] },
    allowedSchemes: ['https', 'mailto', 'tel'],
    transformTags: {
      a: (_tag, attrs) => ({
        tagName: 'a',
        attribs: { ...attrs, ...(attrs.target === '_blank' ? { rel: 'noopener noreferrer' } : {}) },
      }),
    },
  });
}
export interface Article {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  author: string;
  authorBio: string;
  html: string;
}
const directory = resolve('src/content/articles');
export function getArticles(): Article[] {
  return readdirSync(directory)
    .filter((file) => file.endsWith('.md'))
    .sort()
    .map((file) => {
      const { data, content } = matter(readFileSync(resolve(directory, file), 'utf8'));
      if (
        typeof data.title !== 'string' ||
        typeof data.description !== 'string' ||
        typeof data.img !== 'string' ||
        typeof data.alt !== 'string' ||
        typeof data.author?.name !== 'string'
      )
        throw new Error('Artículo sin metadatos válidos: ' + file);
      return {
        slug: file.replace(/\.md$/, ''),
        title: data.title,
        description: data.description,
        image: 'blog/' + data.img,
        alt: data.alt,
        author: data.author.name,
        authorBio: String(data.author.bio ?? ''),
        html: sanitizeArticle(marked.parse(content, { async: false })),
      };
    });
}
