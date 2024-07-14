import { SITE } from 'astrowind:config';
import { getHomePermalink } from './utils/permalinks';
import { useTranslations } from './i18n/utils';

export const headerData = (locale) => {
  const t = useTranslations(locale);

  return ({
    links: [
      {
        text: t("nav.about"),
        href: getHomePermalink(locale) + '#about',
      },
      {
        text: t("nav.projects"),
        href: getHomePermalink(locale) + '#projects',
      },
      {
        text: t("nav.team"),
        href: getHomePermalink(locale) + '#team',
      },
      {
        text: t("nav.quality"),
        href: getHomePermalink(locale) + '#quality',
      },
      {
        text: t("nav.jobs"),
        href: getHomePermalink(locale) + '#vacancies',
      },
    ],
    // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
  });
};

export const footerData = (locale) => {
  const t = useTranslations(locale);

  return ({
    secondaryLinks: [
      { text: t("nav.about"), href: getHomePermalink(locale) + '#about' },
      { text: t("nav.team"), href: getHomePermalink(locale) + '#team' },
      { text: t("nav.jobs"), href: getHomePermalink(locale) + '#vacancies' },
    ],
    socialLinks: [
      { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
    ],
    footNote: `
      © ${(new Date()).getFullYear()} ${SITE?.name}. All rights reserved.
    `,
  })
};
