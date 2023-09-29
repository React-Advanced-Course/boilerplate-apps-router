import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main', // se adicionar a / 'name/name' Você agrupa
  component: Main,
  // args: {
  //   title: 'title default',
  //   description: 'description default'
  // },
  parameters: {
    layout: 'fullscreen' // sem borda ou margem
  }
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'title basic',
    description: 'description basic'
  }
}
