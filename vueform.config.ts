import en from '@vueform/vueform/locales/en'
import theme from '@vueform/vueform/dist/tailwind'
import { defineConfig } from '@vueform/vueform'
import builder from '@vueform/builder/plugin'

export default defineConfig({
  theme,
  locales: { en },
  locale: 'en',
  apiKey: 'yedy-dapf-q7so-4q2x-nsyk',
  plugins: [
    builder,
  ],
})