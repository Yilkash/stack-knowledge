import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://stack-knowledge.app',
            lastModified: new Date(),
        },
        {
            url: 'https://stack-knowledge.app/resources',
            lastModified: new Date(),
        },
        {
            url: 'https://stack-knowledge.app/upload',
            lastModified: new Date(),
        },
        {
            url: 'https://stack-knowledge.app/chat',
            lastModified: new Date(),
        },
    ];
}
