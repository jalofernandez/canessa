import { describe, expect, it } from 'vitest';
import { getArticles, sanitizeArticle } from './articles.server';

describe('article content boundary', () => {
  it('removes executable markup and unsafe URLs while preserving readable content', () => {
    const html = sanitizeArticle(
      '<p onclick="steal()">Hola <strong>Canessa</strong></p><script>alert(1)</script><img src=x onerror=steal()><a href="javascript:steal()">mal</a><a href="https://example.com" target="_blank">bien</a>'
    );
    expect(html).toContain('<strong>Canessa</strong>');
    expect(html).not.toMatch(/onclick|<script|onerror|javascript:|<img/);
    expect(html).toContain('rel="noopener noreferrer"');
  });
  it('keeps all three authored articles and their full text', () => {
    const articles = getArticles();
    expect(articles).toHaveLength(3);
    expect(articles.find((article) => article.slug === 'el-gran-reencuentro')?.html).toContain(
      '9 años más tarde'
    );
    expect(articles.every((article) => article.html.length > 1000)).toBe(true);
  });
});
