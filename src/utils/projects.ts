import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

type ProjectFeature = CollectionEntry<'projects'>['data'] & {
  description: string,
}

export async function getProjectFeatures(category: 'mobile'|'java'): Promise<ProjectFeature[]> {
  return (await getCollection('projects', ({ id }) => {
    return id.startsWith(category + '/');
  })).map(({data}) => ({
    ...data,
    description: data.technologies.join(", "),
  }));
}
