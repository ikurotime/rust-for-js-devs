// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNova()],
      title: 'Rust For JS Devs',
      description: 'Learn Rust concepts mapped to your JavaScript knowledge',
      components: {
        // Header: './src/components/Header.astro'
        Banner: './src/components/Banner.astro',
        Pagination: './src/components/Pagination.astro',
        Footer: './src/components/Footer.astro'
      },
      lastUpdated: true,
      pagination: true,
      editLink: {
        baseUrl: 'https://github.com/ikurotime/rust-for-js-devs/edit/main/'
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight'
        }
      ],
      sidebar: [
        {
          label: 'Getting Started',
          link: '/getting-started/'
        },
        {
          label: 'What Can I Do with Rust?',
          slug: 'what-can-i-do-with-rust'
        },
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', link: 'guides/example' }
          ]
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' }
        }
      ]
    })
  ]
});
