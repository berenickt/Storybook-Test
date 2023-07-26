// **** 컴포넌트를 어떻게 표시할지 관리하는 설정 파일
// 스토리북에서 사용한느 전역 매개변수, 전역코드, 데코레이터를 관리
// 스토리북의 특정 설정을 변경해야 한다면, .storybook 폴더 안에서 내용을 수정
export const parameters = {
  // ** storybook실행한 뒤 하단 action탭에 로그 출력. on으로 시작하는 이벤트만 표시됨,
  // on으로 시작하지 않는 이벤트들도 로그 출력하고 싶다면 이 설정을 수정해야 함
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i, // 색상선택기 표시를 모든 컴포넌트에다 적용
      date: /Date$/,
    },
  },
};
