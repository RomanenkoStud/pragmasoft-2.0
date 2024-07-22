import { I18N } from 'astrowind:config';

export const formatters: Record<string, Intl.DateTimeFormat> = Object.keys(I18N.locales).reduce(
  (acc: Record<keyof typeof I18N.locales, Intl.DateTimeFormat>, locale) => {
    acc[locale] = new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    });
    return acc;
  },
  {}
);

export const getFormattedDate = (date: Date, locale: string = I18N.defaultLocale): string => (date ? formatters[locale].format(date) : '');

export const trim = (str = '', ch?: string) => {
  let start = 0,
    end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};
