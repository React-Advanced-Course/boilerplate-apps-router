import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main', // se adicionar a / 'name/name' Você agrupa
  component: Main,
  parameters: {
    layout: 'fullscreen' // sem borda ou margem
  }
} as Meta

export const Default: StoryObj = {}
