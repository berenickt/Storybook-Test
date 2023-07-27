// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

// 2. 할일 목록 앱 전체에 사용할 수있는 데이터를 위해 Context API
import { ToDoListContextProvider } from 'contexts/ToDoList';

import { ToDoListPage } from '.';

// 2. Pages라는 메뉴 하위에 ToDoListPage이라고 표시
// 3. 컴포넌트는 ToDoListPage
export default {
  title: 'Pages/ToDoListPage',
  component: ToDoListPage,
} as ComponentMeta<typeof ToDoListPage>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <ToDoListPage /> 컴포넌트 템플릿을 선언
const Template: ComponentStory<typeof ToDoListPage> = () => (
  <ToDoListContextProvider>
    <ToDoListPage />
  </ToDoListContextProvider>
);

export const Default = Template.bind({});
