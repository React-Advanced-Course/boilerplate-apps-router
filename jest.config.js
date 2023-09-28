module.exports = {
  testEnvironment: 'jsdom', // environmet = browser
  testPathIgnorePatterns: ['/node_modules', '/.next/'], //ignore some folders
  collectCoverage: true, //mostrar a cobertura dos arquivos
  collectCoverageFrom: [
    //Tudo da pasta src q seja ts ou tsx
    'src/**/*.ts(x)?',
    '!src/app/**', // ignorar esses arquivos - should be tested in e2e
    '!src/lib/registry.tsx', // não interessa
    '!src/types/**', // ignorar tudo que tem em types
    '!src/styles/**' // ignorar tudo que tem na pasta styles
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  /* Carregar um arquivo antes de tudo - jest/setup.ts
  -> carregar jest.styledComponets quando for testar ele
  -> a configuração do jsEnvironmentDom e outras coisas
  */
  modulePaths: ['<rootDir>/src/'], // vai pegar todos os arquivos desta pasta
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  }, // vai usar o preset do babel p compilar os js,jsx...

  // https://github.com/styled-components/styled-components/issues/4081
  // v6 of styled-components doesn't inject styles in test environment
  // we should to force it to use the browser version
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js'
  }
}
