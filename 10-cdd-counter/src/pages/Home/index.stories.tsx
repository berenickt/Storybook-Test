// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Home } from '.'

// 2. Pages라는 메뉴 하위에 Home이라고 표시
// 3. 컴포넌트는 Home
export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <Home /> 컴포넌트 템플릿을 선언
const Template: ComponentStory<typeof Home> = () => <Home />

export const Default = Template.bind({})
