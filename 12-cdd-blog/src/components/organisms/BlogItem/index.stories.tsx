// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BlogItem } from '.';

// 2. Organisms라는 메뉴 하위에 BlogItem이라고 표시
// 3. 컴포넌트는 BlogItem
export default {
  title: 'Organisms/BlogItem',
  component: BlogItem,
} as ComponentMeta<typeof BlogItem>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <BlogItem /> 컴포넌트 템플릿을 선언
// BlogItem 컴포넌트에 args 객체를 전달하여 동적인 컴포넌트를 생성
const Template: ComponentStory<typeof BlogItem> = (args) => <BlogItem {...args} />;

export const Default = Template.bind({});
// BlogItem 컴포넌트의 스토리인 Default의 필수 Props인 title, body 설정
Default.args = {
  title: '블로그 글 제목',
  body: '블로그 글 본문',
};
