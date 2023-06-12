import type { Meta, StoryObj } from '@storybook/react'

import { Component } from '../index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Demo/Component',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    initialCount: { control: 'number' },
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    initialCount: 0,
  },
}

export const WithInitialCount: Story = {
  args: {
    initialCount: 42,
  },
}
