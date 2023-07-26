// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CounterApp } from '.'

// 2. Templates라는 메뉴 하위에 CounterApp이라고 표시
// 3. 컴포넌트는 CounterApp
export default {
  title: 'Templates/CounterApp',
  component: CounterApp,
} as ComponentMeta<typeof CounterApp>

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <CounterApp /> 컴포넌트 템플릿을 선언
const Template: ComponentStory<typeof CounterApp> = () => <CounterApp />

export const Default = Template.bind({})
