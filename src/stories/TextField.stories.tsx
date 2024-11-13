import type { Meta, StoryObj } from '@storybook/react'

import TextField from '../components/TextField'

const meta = {
  title: 'TextFields/TextField',
  component: TextField,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    iconAlt: { control: 'text', description: '이미지의 alt 속성' },
    iconPath: { control: 'text', description: '이미지의 경로' },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    placeholder: { control: 'text', description: '텍스트 필드의 placeholder' },
    value: { control: 'text', description: '텍스트 필드의 값' },
    onChange: { action: 'changed', description: '텍스트 필드 값 변경 이벤트' },
    errorMessage: {
      control: 'text',
      description: '텍스트 필드의 에러 메시지'
    },
    isError: {
      control: 'boolean',
      description: '에러 상태 여부'
    }
  }
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    iconAlt: 'alt',
    iconPath: '/close-icon.svg',
    onClick: () => {},
    onChange: () => {},
    value: '',
    placeholder: '텍스트를 입력해주세요',
    errorMessage: '텍스트를 확인해주세요',
    isError: false
  }
}
