import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    starlight({
      title: 'Rust For JS Devs',
      customCss: ['./src/styles/custom.css', './src/styles/lander.css'],
      components: {
        Header: './src/components/Header.astro',
        Footer: './src/components/Footer.astro',
        Hero: './src/components/Hero.astro'
      }
    })
  ]
})
