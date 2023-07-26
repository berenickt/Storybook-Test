// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Title } from '.'

// 2. ATOMS라는 메뉴 하위에 Title이라고 표시
// 3. 컴포넌트는 Title
export default {
  title: 'Atoms/Title',
  component: Title,
} as ComponentMeta<typeof Title>

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <Title /> 컴포넌트 템플릿을 선언
// Title 컴포넌트에 args 객체를 전달하여 동적인 컴포넌트를 생성
const Template: ComponentStory<typeof Title> = args => <Title {...args} />

// 5. Title은 Props가 없어서 따로 여러 스토리를 작성안해도 됨
export const Default = Template.bind({})
// Title컴포넌트의 스토리인 Default의 필수 Props인 title 설정
Default.args = {
  title: 'Counter App',
}
