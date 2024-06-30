import { fetchPosts } from './blog';

export type ProjectFeature = {
  title: string,
  image?: {
    src: string,
    alt: string,
  }
  description: string,
  href?: string,
}

export async function getProjectFeatures(category: string): Promise<ProjectFeature[]> {
  const projects = (await fetchPosts())
    .filter((projects) => projects.category?.slug && category === projects.category?.slug);
  
  return (Promise.all(
    projects.map(async (project) => ({
      ...project,
      description: project.tags?.map(({title}) => title).join(", ") || '',
      image: project.image? {
        src: project.image,
        alt: project.title,
      } : undefined,
      href: project.permalink,
    })))
  );
}
