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
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English'
        },
        es: {
          label: 'Español'
        }
      },
      components: {
        Header: './src/components/Header.astro',
        Banner: './src/components/Banner.astro',
        // Pagination: './src/components/Pagination.astro',
        Footer: './src/components/Footer.astro'
      },
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
          label: 'Welcome',
          link: '/welcome/'
        },
        {
          label: 'What Can I Do with Rust?',
          slug: 'what-can-i-do-with-rust'
        },
        {
          label: 'Introduction',
          items: [
            // { label: 'Getting Started', slug: 'introduction/getting-started' },
            { label: 'Installation', slug: 'introduction/installation' },
            { label: 'Hello World', slug: 'introduction/hello-world' },
            { label: 'Hello Cargo', slug: 'introduction/hello-cargo' }
          ]
        },

        {
          label: 'Common Concepts',
          items: [
            {
              label: 'Variables and Mutability',
              slug: 'common-concepts/variables-mutability'
            },
            { label: 'Data Types', slug: 'common-concepts/data-types' },
            { label: 'Functions', slug: 'common-concepts/functions' },
            { label: 'Comments', slug: 'common-concepts/comments' },
            { label: 'Control Flow', slug: 'common-concepts/control-flow' },
            { label: 'Strings', slug: 'common-concepts/strings' }
          ]
        },
        {
          label: 'Ownership & Borrowing',
          items: [
            {
              label: 'What is Ownership',
              slug: 'ownership-borrowing/what-is-ownership'
            },
            {
              label: 'Borrowing in Depth',
              slug: 'ownership-borrowing/borrowing-in-depth'
            },
            { label: 'Lifetimes', slug: 'ownership-borrowing/lifetimes' }
          ]
        },
        {
          label: 'Structs & Enums',
          items: [
            {
              label: 'Defining Structs',
              slug: 'structs-enums/defining-structs'
            },
            { label: 'Struct Example', slug: 'structs-enums/struct-example' },
            { label: 'Methods', slug: 'structs-enums/methods' },
            { label: 'Defining Enums', slug: 'structs-enums/defining-enums' },
            { label: 'Match', slug: 'structs-enums/match' },
            { label: 'If Let', slug: 'structs-enums/if-let' }
          ]
        },
        {
          label: 'Collections',
          items: [
            { label: 'Vectors', slug: 'collections/vectors' },
            { label: 'Strings', slug: 'collections/strings' },
            { label: 'Hash Maps', slug: 'collections/hash-maps' }
          ]
        },
        {
          label: 'Error Handling',
          items: [{ label: 'Error Handling Overview', slug: 'error-handling' }]
        },
        {
          label: 'Practical Projects',
          items: [
            {
              label: 'Guessing Game',
              slug: 'guessing-game'
            },
            {
              label: 'Simple Web Server',
              slug: 'practical-projects/simple-web-server'
            }
          ]
        }
        // {
        //   label: 'Guides',
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: 'Example Guide', link: 'guides/example' }
        //   ]
        // }
        // {
        //   label: 'Reference',
        //   autogenerate: { directory: 'reference' }
        // }
      ]
    })
  ]
});
