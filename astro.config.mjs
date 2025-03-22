import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    starlight({
      title: 'Rust For JS Devs',
      description: 'Learn Rust concepts mapped to your JavaScript knowledge',
      favicon: '/favicon.ico',
      logo: {
        src: '/public/rustjs.png',
        alt: 'Rust for JavaScript Developers'
      },
      social: {
        github: 'https://github.com/your-username/rust-for-js-devs',
        twitter: 'https://twitter.com/your-username'
      },
      customCss: ['./src/styles/custom.css', './src/styles/lander.css'],
      components: {
        Header: './src/components/Header.astro',
        Footer: './src/components/Footer.astro',
        Hero: './src/components/Hero.astro'
      },
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'Documentation', link: '/overview/' },
        {
          label: 'Introduction',
          items: [
            { label: 'Why Rust?', link: '/introduction/' },
            { label: 'Getting Started', link: '/introduction/getting-started/' }
          ]
        },
        {
          label: 'Language Fundamentals',
          items: [
            {
              label: 'Variables and Types',
              link: '/language-fundamentals/variables-and-types/'
            },
            {
              label: 'Control Flow',
              link: '/language-fundamentals/control-flow/'
            },
            { label: 'Functions', link: '/language-fundamentals/functions/' }
          ]
        },
        {
          label: 'Ownership & Borrowing',
          items: [
            { label: 'Ownership System', link: '/ownership-borrowing/' },
            {
              label: 'Borrowing in Depth',
              link: '/ownership-borrowing/borrowing-in-depth/'
            }
          ]
        },
        {
          label: 'Error Handling',
          items: [{ label: 'Error Handling in Rust', link: '/error-handling/' }]
        },
        {
          label: 'Practical Projects',
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
        baseUrl: 'https://github.com/your-username/rust-for-js-devs/edit/main/'
      }
    })
  ]
});
