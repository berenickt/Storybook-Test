// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageTitle } from '.';

// 2. ATOMS라는 메뉴 하위에 PageTitle이라고 표시
// 3. 컴포넌트는 PageTitle
export default {
  title: 'Atoms/PageTitle',
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <PageTitle /> 컴포넌트 템플릿을 선언
// PageTitle 컴포넌트에 args 객체를 전달하여 동적인 컴포넌트를 생성
const Template: ComponentStory<typeof PageTitle> = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
// PageTitle 컴포넌트의 스토리인 Default의 필수 Props인 title 설정
Default.args = {
  title: '할 일 목록',
};
