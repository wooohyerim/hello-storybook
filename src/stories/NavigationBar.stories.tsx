import type { Meta, StoryObj } from '@storybook/react'

import NavigationBar from '../components/NavigationBar'

const meta = {
  title: 'Navigation/NavigationBar',
  component: NavigationBar,
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
    isDark: {
      control: 'boolean',
      description: '다크모드 여부',
      defaultValue: false
    },
    showBackButton: {
      control: 'boolean',
      description: '뒤로가기 버튼 표시 여부',
      defaultValue: true
    },
    showCloseButton: {
      control: 'boolean',
      description: '닫기 버튼 표시 여부',
      defaultValue: true
    },
    showTitle: {
      control: 'text',
      description: '페이지 이름 표시 여부',
      defaultValue: true
    },
    title: { control: 'text', description: '타이틀', defaultValue: '' },
    onBackButtonOnClick: {
      action: 'clicked',
      description: '뒤로가기 버튼 클릭 이벤트'
    },
    onCloseButtonOnClick: {
      action: 'clicked',
      description: '닫기 버튼 클릭 이벤트'
    }
  }
} satisfies Meta<typeof NavigationBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isDark: false,
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: '타이틀'
  }
}
