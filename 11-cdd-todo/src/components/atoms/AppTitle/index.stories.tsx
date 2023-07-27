// 1. 스토리를 작성하기 위해 기본적으로 import
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppTitle } from '.';

// 2. ATOMS라는 메뉴 하위에 AppTitle이라고 표시
// 3. 컴포넌트는 AppTitle
export default {
  title: 'Atoms/AppTitle',
  component: AppTitle,
  // background 옵션으로 원하는 색상 추가
  parameters: {
    backgrounds: {
      default: 'Header background color',
      values: [{ name: 'Header background color', value: '#304ffe' }],
    },
  },
} as ComponentMeta<typeof AppTitle>;

// 4. 하나의 스토리 파일에 여러 스토리를 작성하도록 <AppTitle /> 컴포넌트 템플릿을 선언
const Template: ComponentStory<typeof AppTitle> = () => <AppTitle />;

export const Default = Template.bind({});
