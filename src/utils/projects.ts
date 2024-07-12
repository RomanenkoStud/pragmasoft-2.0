import { getLocalePosts } from './blog';

export type ProjectFeature = {
  title: string,
  image?: {
    src: string,
    alt: string,
  }
  description: string,
  href?: string,
}

export async function getProjectFeatures(slug: string): Promise<ProjectFeature[]> {
  const [locale, ...baseSlugParts] = slug.split('/');
  const category = baseSlugParts.join('/');

  const projects = (await getLocalePosts())[locale]
    .filter((project) => project.category?.title && category === project.category?.title);
  
  return projects.map((project) => ({
      ...project,
      description: project.tags?.map(({title}) => title).join(", ") || '',
      image: project.image? {
        src: project.image,
        alt: project.title,
      } : undefined,
      href: project.permalink,
    })
  );
}
