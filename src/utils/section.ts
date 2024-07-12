import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Section } from '~/types';
import { cleanSlug } from './permalinks';

const getNormalizedSection = async (section: CollectionEntry<'section'>): Promise<Section> => {
  const { id, slug: rawSlug = '', data } = section;
  const { Content } = await section.render();

  const {title, ...sectionData} = data;

  const slug = cleanSlug(rawSlug); // cleanSlug(rawSlug.split('/').pop());

  switch(sectionData.type) {
    case 'about': {
      const {type, stats, offers} = sectionData;
      return {
        id: id,
        slug: slug,
        stats: stats,
        offers: offers,
    
        title: title,
        type: type,
        Content: Content,
        // or 'content' in case you consume from API
      };
    };
    case 'projects': {
      const {type, variant, parallax, defaultItem} = sectionData;
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
        // or 'content' in case you consume from API
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
