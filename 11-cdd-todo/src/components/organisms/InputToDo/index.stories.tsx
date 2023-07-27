// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputToDo } from '.';

// 2. Organisms라는 메뉴 하위에 InputToDo 이라고 표시
// 3. 컴포넌트는 InputToDo
export default {
  title: 'Organisms/InputToDo',
  component: InputToDo,
} as ComponentMeta<typeof InputToDo>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <InputToDo /> 컴포넌트 템플릿을 선언
const Template: ComponentStory<typeof InputToDo> = () => <InputToDo />;

export const Default = Template.bind({});
