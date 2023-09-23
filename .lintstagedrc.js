module.exports = {
  // lint & prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `npm test -- --findRelatedTests ${filenames.join(' ')}` // -- --... -> será repassado para o comando acima os pararâmetros do comando atual: --findRel... será adicionado no comando
  ]
}
