import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      iconDir: 'src/assets/images'
    })
  ],
  devToolbar: {
    enabled: false
  },
  site: 'https://danieldampe.github.io',
  base: '/contact-form-main'
})
