// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BlogListPage } from '.';

// 2. Pages라는 메뉴 하위에 BlogListPage이라고 표시
// 3. 컴포넌트는 BlogListPage
export default {
  title: 'Pages/BlogListPage',
  component: BlogListPage,
} as ComponentMeta<typeof BlogListPage>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <BlogListPage /> 컴포넌트 템플릿을 선언
const Template: ComponentStory<typeof BlogListPage> = () => <BlogListPage />;

export const Default = Template.bind({});
