// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToDoList } from '.';

// 2. Templates라는 메뉴 하위에 ToDoList이라고 표시
// 3. 컴포넌트는 ToDoList
export default {
  title: 'Templates/ToDoList',
  component: ToDoList,
} as ComponentMeta<typeof ToDoList>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <ToDoItem /> 컴포넌트 템플릿을 선언
const Template: ComponentStory<typeof ToDoList> = (args) => <ToDoList {...args} />;

export const Default = Template.bind({});
// ToDoItem 컴포넌트의 스토리인 Default 필수 Props인 toDoList 설정
Default.args = {
  toDoList: [],
};

export const WithToDoList = Template.bind({});
// ToDoItem 컴포넌트의 스토리인 WithToDoList 필수 Props인 toDoList 설정
WithToDoList.args = {
  toDoList: ['리액트 공부하기', 'CDD 공부하기', '할 일 목록 앱 개발하기'],
};
