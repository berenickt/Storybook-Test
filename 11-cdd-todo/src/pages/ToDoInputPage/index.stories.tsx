// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToDoInputPage } from '.';

// 2. Pages라는 메뉴 하위에 ToDoInputPage이라고 표시
// 3. 컴포넌트는 ToDoInputPage
export default {
  title: 'Pages/ToDoInputPage',
  component: ToDoInputPage,
} as ComponentMeta<typeof ToDoInputPage>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <ToDoInputPage /> 컴포넌트 템플릿을 선언
const Template: ComponentStory<typeof ToDoInputPage> = () => <ToDoInputPage />;

export const Default = Template.bind({});
