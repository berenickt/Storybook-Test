// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToDoInput } from '.';

// 2. Templates라는 메뉴 하위에 ToDoInput이라고 표시
// 3. 컴포넌트는 ToDoInput
export default {
  title: 'Templates/ToDoInput',
  component: ToDoInput,
} as ComponentMeta<typeof ToDoInput>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <ToDoInput /> 컴포넌트 템플릿을 선언
const Template: ComponentStory<typeof ToDoInput> = () => <ToDoInput />;

export const Default = Template.bind({});
