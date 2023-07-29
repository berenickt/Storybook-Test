// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '.';

// 2. Organisms라는 메뉴 하위에 Header이라고 표시
// 3. 컴포넌트는 Header
export default {
  title: 'Organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <Header /> 컴포넌트 템플릿을 선언
const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
