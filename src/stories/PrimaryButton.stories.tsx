import type { Meta, StoryObj } from '@storybook/react'

import PrimaryButton from '../components/PrimaryButton'

const meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <div style={{ width: '360px' }}>
          <Story />
        </div>
      )
    }
  ],
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['dark', 'light', 'social', 'text']
      }
    },
    children: {
      control: 'text',
      description: '버튼 텍스트'
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
      defaultValue: false
    }
  }
} satisfies Meta<typeof PrimaryButton>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
  args: {
    children: 'Button',
    theme: 'dark',
    disabled: false
  }
}

export const Light: Story = {
  args: {
    children: 'Button',
    theme: 'light',
    disabled: false
  }
}

export const Social: Story = {
  args: {
    children: 'Button',
    theme: 'social',
    disabled: false
  }
}

export const Text: Story = {
  args: {
    children: 'Button',
    theme: 'text',
    disabled: false
  }
}
