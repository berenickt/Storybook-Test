// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BlogBody } from '.';

// 2. ATOMS라는 메뉴 하위에 BlogBody이라고 표시
// 3. 컴포넌트는 BlogBody
export default {
  title: 'Atoms/BlogBody',
  component: BlogBody,
} as ComponentMeta<typeof BlogBody>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <BlogBody /> 컴포넌트 템플릿을 선언
// BlogBody 컴포넌트에 args 객체를 전달하여 동적인 컴포넌트를 생성
const Template: ComponentStory<typeof BlogBody> = (args) => <BlogBody {...args} />;

export const Default = Template.bind({});
// BlogBody 컴포넌트의 스토리인 Default의 필수 Props인 body 설정
Default.args = {
  body: '블로그 글',
};
