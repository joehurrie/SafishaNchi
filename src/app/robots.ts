import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/maintenance/'],
    },
    sitemap: 'https://safishanchi.com/sitemap.xml',
  }
}
