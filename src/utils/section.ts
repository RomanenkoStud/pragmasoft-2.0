import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Section } from '~/types';
import { cleanSlug } from './permalinks';

const getNormalizedSection = async (section: CollectionEntry<'section'>): Promise<Section> => {
  const { id, slug: rawSlug = '', data } = section;
  const { Content } = await section.render();

  const slug = cleanSlug(rawSlug); // cleanSlug(rawSlug.split('/').pop());
  const {type} = data;

  switch(type) {
    case 'text': {
      const {title, background} = data;
      return {
        id: id,
        slug: slug,
        background: background,
    
        title: title,
        type: type,
    
        Content: Content,
      };
    }
    case 'hero': {
      const {testimonials} = data;
      return {
        id: id,
        slug: slug,
        testimonials: testimonials,
    
        type: type,
    
        Content: Content,
      };
    }
    case 'team': {
      const {title, members} = data;
      return {
        id: id,
        slug: slug,
        members: members,
    
        title: title,
        type: type,
        Content: Content,
      };
    };
    case 'about': {
      const {title, stats, offers} = data;
      return {
        id: id,
        slug: slug,
        stats: stats,
        offers: offers,
    
        title: title,
        type: type,
        Content: Content,
      };
    };
    case 'projects': {
      const {title, variant, parallax, defaultItem} = data;
      return {
        id: id,
        slug: slug,
        variant: variant,
        parallax: parallax,
    
        title: title,
        type: type,
        defaultItem: defaultItem && {
          ...defaultItem,
          description: defaultItem.tags?.join(", ") || '',
          image: {
            src: defaultItem.image,
            alt: defaultItem.title,
          }
        },
    
        Content: Content,
      };
    }
  }
};

const load = async function (): Promise<Array<Section>> {
  const sections = await getCollection('section');
  const normalizedPosts = sections.map(async (section) => await getNormalizedSection(section));

  const results = (await Promise.all(normalizedPosts));

  return results;
};

let _sections: Array<Section>;

/** */
export const fetchSections = async (): Promise<Array<Section>> => {
  if (!_sections) {
    _sections = await load();
  }

  return _sections;
};

/** */
export const findSectionBySlug = async (slug: string): Promise<Section> => {
  const sections = await fetchSections();

  return sections.find(function (section: Section) {
    return slug === section.slug;
  }) as Section;
};
