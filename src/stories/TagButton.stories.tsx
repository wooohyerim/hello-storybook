import type { Meta, StoryObj } from '@storybook/react'

import TagButton from '../components/TagButton'

const meta = {
  title: 'Buttons/TagButton',
  component: TagButton,
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
    children: {
      control: 'text',
      description: '버튼 텍스트'
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    isChecked: {
      control: 'boolean',
      description: '버튼 활성화 여부',
      defaultValue: false
    }
  }
} satisfies Meta<typeof TagButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
    isChecked: false
  }
}
