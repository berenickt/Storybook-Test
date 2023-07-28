// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

// 2. ATOMS라는 메뉴 하위에 Button이라고 표시
// 3. 컴포넌트는 Button
export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <Button /> 컴포넌트 템플릿을 선언
// Button 컴포넌트에 args 객체를 전달하여 동적인 컴포넌트를 생성
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const RedButton = Template.bind({});
// Button 컴포넌트의 스토리인 RedButton의 필수 Props인 label 설정
RedButton.args = {
  label: '등록',
};

export const BlueButton = Template.bind({});
// Button 컴포넌트의 스토리인 BlueButton의 필수 Props인 label 설정
BlueButton.args = {
  label: '닫기',
  color: '#304FFE',
};
