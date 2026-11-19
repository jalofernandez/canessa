import { describe, expect, it } from 'vitest';
import { seo } from './seo';

describe('page metadata', () => {
  it('keeps one clean canonical for the home page and a deep URL', () => {
    expect(seo('Canessa', 'Cuidado canino', '/')).toContainEqual({
      tagName: 'link',
      rel: 'canonical',
      href: 'https://peluqueriacanessa.com',
    });
    expect(seo('Contacto', 'Pide cita', '/contacto')).toContainEqual({
      tagName: 'link',
      rel: 'canonical',
      href: 'https://peluqueriacanessa.com/contacto',
    });
  });
});
