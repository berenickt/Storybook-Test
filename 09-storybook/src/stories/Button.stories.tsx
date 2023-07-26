import React from 'react';

// 컴포넌트의 스토리를 작성하기 위해서는 스토리북이 제공하는 ComponentStory, ComponentMeta를 가져와야 함
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Button 컴포넌트의 스토리를 작성하므로 Button 컴포넌트 import
import { Button } from './Button';

/*** More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * 스토리를 작성할 떄는, "export default"와 "export"를 사용해서 작성
 * export default는 스토리북에서 사용될 이름, 해당 컴포넌트의 Props 등을 조자하기 위한 정보를
 * ComponentMeta를 사용해 제공함
 */
export default {
  title: 'Example/Button', // 메뉴 그룹의 이름들을 그룹화
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // 버튼 컴포넌트의 backgroundColor라는 Props를 스토리북에서 변경할 떄 색상선태기를 표시
    // .storybook/preview.js 파일에서 색상선태긱가 표시되도록 matchers에 설정했었음
    backgroundColor: { control: 'color' }, // 색상 선택기
  },
} as ComponentMeta<typeof Button>;

/*** More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * 버튼 컴포넌트를 표시하기 위해 "ComponentStory"를 사용
 * Template라는 변수에 간단한 함수 컴포넌트 할당
 * Template 컴포넌트와 <Button /> 컴포넌트의 Props로 다양한 컴포넌트 예제를 만들 수 있다.
 * Template 컴포넌트도 리액트 컴포넌트라 useState, useEffect같은 훅 사용 가능하고,
 * <Button /> 컴포넌트를 다른 컴포넌트로 감싸서 제공 가능
 */
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

/*** More on args: https://storybook.js.org/docs/react/writing-stories/args
 * 만든 Template 컴포넌트에 Propsdㅢ 기본값을 다양하게 설정해 여러 예제들을 스토리북에 제공
 * Template.bind()로 새로운 객체 생성해서 Primary라는 변수에 할당
 * Primary라는 변수명은 스토리북에서 표시되는 이름으로 캐멀케이스 형태로 알기쉽게 명명
 * 캐멀케이스로 작성된 변수명에서 대문자는 띄어쓰기가 추가되어 표시됨
 */
export const Primary = Template.bind({});
Primary.args = {
  // <Button /> 컴포넌트의 필수 Props인 "label"과 기본적인 primary라는 Props를 설정
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
