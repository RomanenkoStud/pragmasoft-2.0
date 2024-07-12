import { z, defineCollection } from 'astro:content';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const namedSectionDefinition = z.object({
  title: z.string(),
});

const statDefinition = z.object({
  amount: z.string(),
  title: z.string(),
});

const testimonialDefinition = z.object({
  testimonial: z.string(),
});


const sectionCollection = defineCollection({
  schema: z.union([
    namedSectionDefinition.merge(z.object({
      type: z.literal("projects"),
      variant: z.enum(["custom", "sky", "orange", "red", "blue"]),
      parallax: z.boolean(),

      defaultItem: z.object({
        title: z.string(),
        image: z.string(),
        tags: z.array(z.string()).optional(),
      }).optional(),
    })),
    namedSectionDefinition.merge(z.object({
      type: z.literal("about"),

      stats: z.array(statDefinition).length(4),
      offers: z.tuple([z.array(z.string()), z.array(z.string())]),
    })),
    namedSectionDefinition.merge(z.object({
      type: z.literal("team"),

      members: z.array(z.string()).length(10),
    })),
    namedSectionDefinition.merge(z.object({
      type: z.literal("text"),

      background: z.enum(["gray"]).optional(),
    })),
    z.object({
      type: z.literal("hero"),

      testimonials: z.array(testimonialDefinition),
    })
  ]),
});

export const collections = {
  post: postCollection,
  section: sectionCollection,
};
