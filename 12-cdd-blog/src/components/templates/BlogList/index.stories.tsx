// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BlogList } from '.';

// 2. Templates라는 메뉴 하위에 BlogList 표시
// 3. 컴포넌트는 BlogList
export default {
  title: 'Templates/BlogList',
  component: BlogList,
} as ComponentMeta<typeof BlogList>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <BlogList /> 컴포넌트 템플릿을 선언
// BlogList 컴포넌트에 args 객체를 전달하여 동적인 컴포넌트를 생성
const Template: ComponentStory<typeof BlogList> = (args) => <BlogList {...args} />;

export const Default = Template.bind({});

export const WithData = Template.bind({});
// BlogList 컴포넌트의 스토리인 WithData의 필수 Props인 posts 설정
WithData.args = {
  posts: [
    { id: 1, title: 'blog title 1', body: 'blog body 1' },
    { id: 2, title: 'blog title 2', body: 'blog body 2' },
    { id: 3, title: 'blog title 3', body: 'blog body 3' },
  ],
};
