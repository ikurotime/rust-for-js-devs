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
        // English docs in `src/content/docs/en/`
        en: {
          label: 'English'
        },
        es: {
          label: 'Español'
        }
      },
      favicon: '/favicon.ico',
      logo: {
        src: './src/assets/rustjs.png',
        alt: 'Rust for JavaScript Developers'
      },
      social: {
        github: 'https://github.com/ikurotime/rust-for-js-devs',
        twitter: 'https://twitter.com/ikurotime'
      },
      customCss: ['./src/styles/custom.css'],
      components: {
        Header: './src/components/Header.astro',
        Footer: './src/components/Footer.astro',
        Pagination: './src/components/Pagination.astro',
        Banner: './src/components/Banner.astro'
      },
      sidebar: [
        { label: 'Home', link: '/home' },
        {
          label: 'What Can I Do with Rust?',
          link: '/what-can-i-do-with-rust/'
        },
        { label: 'Getting Started', link: '/getting-started/' },
        {
          label: '1. Introduction',
          items: [
            { label: 'Installation', link: '/introduction/installation/' },
            { label: 'Hello World', link: '/introduction/hello-world/' },
            { label: 'Hello Cargo', link: '/introduction/hello-cargo/' }
          ]
        },
        {
          label: '2. Programming a Guessing Game',
          items: [{ label: 'Building a Game', link: '/guessing-game/' }]
        },
        {
          label: '3. Common Programming Concepts',
          items: [
            {
              label: 'Variables and Mutability',
              link: '/common-concepts/variables-mutability/'
            },
            { label: 'Data Types', link: '/common-concepts/data-types/' },
            { label: 'Functions', link: '/common-concepts/functions/' },
            { label: 'Comments', link: '/common-concepts/comments/' },
            { label: 'Control Flow', link: '/common-concepts/control-flow/' }
          ]
        },
        {
          label: '4. Understanding Ownership',
          items: [
            {
              label: 'What is Ownership?',
              link: '/ownership-borrowing/what-is-ownership'
            },
            {
              label: 'Borrowing in Depth',
              link: '/ownership-borrowing/borrowing-in-depth/'
            },
            {
              label: 'Lifetimes',
              link: '/ownership-borrowing/lifetimes/'
            }
          ]
        },
        {
          label: '5. Using Structs',
          items: [
            {
              label: 'Defining Structs',
              link: '/structs-enums/defining-structs/'
            },
            {
              label: 'Example Program Using Structs',
              link: '/structs-enums/struct-example/'
            },
            { label: 'Method Syntax', link: '/structs-enums/methods/' }
          ]
        },
        {
          label: '6. Enums and Pattern Matching',
          items: [
            { label: 'Defining Enums', link: '/structs-enums/defining-enums/' },
            { label: 'The match Control Flow', link: '/structs-enums/match/' },
            { label: 'Patterns with if let', link: '/structs-enums/if-let/' }
          ]
        },
        {
          label: '7. Collections',
          items: [
            { label: 'Vectors', link: '/collections/vectors/' },
            { label: 'Strings', link: '/collections/strings/' },
            { label: 'Hash Maps', link: '/collections/hash-maps/' }
          ]
        },
        {
          label: '8. Error Handling',
          items: [{ label: 'Error Handling Home', link: '/error-handling/' }]
        },
        {
          label: '9. Practical Projects',
          items: [
            {
              label: 'Simple Web Server',
              link: '/practical-projects/simple-web-server/'
            }
          ]
        }
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: '/open-graph.png'
          }
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:image',
            content: '/open-graph.png'
          }
        }
      ],
      lastUpdated: true,
      pagination: true,
      editLink: {
        baseUrl: 'https://github.com/ikurotime/rust-for-js-devs/edit/main/'
      }
    })
  ]
});
