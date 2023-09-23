module.exports = {
  testEnvironment: 'jsdom', // environmet = browser
  testPathIgnorePatterns: ['/node_modules', '/.next/'], //ignore some folders
  collectCoverage: true, //mostrar a cobertura dos arquivos
  collectCoverageFrom: ['src/**/*.ts(x)?'], //Tudo da pasta src q seja ts ou tsx
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  /* Carregar um arquivo antes de tudo - jest/setup.ts
  -> carregar jest.styledComponets quando for testar ele
  -> a configuração do jsEnvironmentDom e outras coisas
  */
  modulePaths: ['<rootDir>/src/'], // vai pegar todos os arquivos desta pasta
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  } // vai usar o preset do babel p compilar os js,jsx...
}
