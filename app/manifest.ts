import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arnaud Flaesch - Développeur d'applications",
    short_name: 'AF',
    description: "Arnaud Flaesch - Développeur d'applications",
    start_url: '/',
    display: 'standalone',
    background_color: '#fafafa',
    theme_color: '#1976d2',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/favicon.ico',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}
