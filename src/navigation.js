import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About us',
      href: '#about',
    },
    {
      text: 'Projects',
      href: '#projects',
    },
    {
      text: 'Our team',
      href: '#team',
    },
    {
      text: 'Vacancies',
      href: '#vacancies',
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'About', href: '#' },
    { text: 'Team', href: '#' },
    { text: 'Careers', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    © ${(new Date()).getFullYear()} Pragmasoft. All rights reserved.
  `,
};
