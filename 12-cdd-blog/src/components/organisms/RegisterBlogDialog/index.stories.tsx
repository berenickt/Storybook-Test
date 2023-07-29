// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RegisterBlogDialog } from '.';

// 2. Organisms라는 메뉴 하위에 RegisterBlogDialog 표시
// 3. 컴포넌트는 RegisterBlogDialog
export default {
  title: 'Organisms/RegisterBlogDialog',
  component: RegisterBlogDialog,
} as ComponentMeta<typeof RegisterBlogDialog>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <RegisterBlogDialog /> 컴포넌트 템플릿을 선언
// RegisterBlogDialog 컴포넌트에 args 객체를 전달하여 동적인 컴포넌트를 생성
const Template: ComponentStory<typeof RegisterBlogDialog> = (args) => (
  <RegisterBlogDialog {...args} />
);

export const Default = Template.bind({});
