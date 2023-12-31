const config = {
  staticDirs: ['../public'], // são estáticos do projeto e devem ser carregadas
  // stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  stories: ['../src/components/**/stories.tsx'], // só os stories dentro dos componentes
  addons: [
    // '@storybook/addon-links',
    '@storybook/addon-essentials'
    // '@storybook/addon-onboarding',
    // '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true //'tag'
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
export default config
