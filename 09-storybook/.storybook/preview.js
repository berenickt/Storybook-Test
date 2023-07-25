// **** 컴포넌트를 어떻게 표시할지 관리하는 설정 파일
// 스토리북에서 사용한느 전역 매개변수, 전역코드, 데코레이터를 관리
// 스토리북의 특정 설정을 변경해야 한다면, .storybook 폴더 안에서 내용을 수정
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
