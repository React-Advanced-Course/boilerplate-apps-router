import React from 'react'
import GlobalStyles from '../src/styles/global' // por não está dentro do next é necessário usar os '../'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]

/* import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
 */
