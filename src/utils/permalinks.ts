import slugify from 'limax';

import { SITE, APP_BLOG } from 'astrowind:config'

import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.base || '/';

export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');

export const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
export const CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
export const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || 'tag';

export const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink || `${BLOG_BASE}/%slug%`);

/** */
export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash == false && path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash == true && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};

/** */
export const getPermalink = (slug = '', type = 'page'): string => {
  let permalink: string;

  if (
    slug.startsWith('https://') ||
    slug.startsWith('http://') ||
    slug.startsWith('://') ||
    slug.startsWith('#') ||
    slug.startsWith('javascript:')
  ) {
    return slug;
  }

  const [locale, ...baseSlugParts] = slug.split('/');
  const baseSlug = baseSlugParts.join('/');

  switch (type) {
    case 'home':
      permalink = getHomePermalink(slug);
      break;

    case 'blog':
      permalink = getBlogPermalink(slug);
      break;

    case 'asset':
      permalink = getAsset(slug);
      break;

    case 'category':
      permalink = createPath(locale, CATEGORY_BASE, trimSlash(baseSlug));
      break;

    case 'tag':
      permalink = createPath(locale, TAG_BASE, trimSlash(baseSlug));
      break;

    case 'post':
      permalink = createPath(trimSlash(slug));
      break;

    case 'page':
    default:
      permalink = createPath(slug);
      break;
  }

  return definitivePermalink(permalink);
};

/** */
export const getHomePermalink = (locale?: string): string => getPermalink(locale ?? '/');

/** */
export const getBlogPermalink = (locale?: string): string => getPermalink(locale ? locale + '/' + BLOG_BASE : BLOG_BASE);

/** */
export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');

/** */
const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);

export const replacePermalinkLocale = (url: string, targetLocale: string): string => {
  const [_locale,...path] = trimSlash(url).split('/');
  return createPath(targetLocale, ...path);
};

type MenuItem = {
  type: string;
  url: string;
};
type TopMenuItem = {
  href: MenuItem|string;
};
type Menu = Record<string, TopMenuItem|MenuItem|string>;

/** */
export const applyGetPermalinks = (menu: Menu|Menu[] = {}): Record<string, string|Menu|Menu[]>|(string|Menu|Menu[])[] => {
  if (Array.isArray(menu)) {
    return menu.map((item: Menu) => applyGetPermalinks(item) as Menu);
  } else if (typeof menu === 'object' && menu !== null) {
    const obj: Record<string, string|Menu|Menu[]> = {};
    for (const key in menu) {
      if (key === 'href') {
        if (typeof menu[key] === 'string') {
          obj[key] = getPermalink(menu[key] as string);
        } else if (typeof menu[key] === 'object') {
          const menuItem = menu[key] as MenuItem;
          if (menuItem.type === 'home') {
            obj[key] = getHomePermalink(menuItem.url);
          } else if (menuItem.type === 'blog') {
            obj[key] = getBlogPermalink(menuItem.url);
          } else if (menuItem.type === 'asset') {
            obj[key] = getAsset(menuItem.url);
          } else if (menuItem.url) {
            obj[key] = getPermalink(menuItem.url, menuItem.type);
          }
        }
      } else {
        obj[key] = applyGetPermalinks((menu[key] as MenuItem)) as Menu;
      }
    }
    return obj;
  }
  return menu;
};
