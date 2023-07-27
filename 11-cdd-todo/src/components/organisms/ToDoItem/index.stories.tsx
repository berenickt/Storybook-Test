// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToDoItem } from '.';

// 2. Organisms라는 메뉴 하위에 ToDoItemr이라고 표시
// 3. 컴포넌트는 ToDoItem
export default {
  title: 'Organisms/ToDoItem',
  component: ToDoItem,
} as ComponentMeta<typeof ToDoItem>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <ToDoItem /> 컴포넌트 템플릿을 선언
const Template: ComponentStory<typeof ToDoItem> = (args) => <ToDoItem {...args} />;

export const Default = Template.bind({});
// ToDoItem 컴포넌트의 스토리인 Default 필수 Props인 label 설정
Default.args = {
  label: '리액트 공부하기',
};
