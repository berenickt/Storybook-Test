export const parameters = {
  // on 으로 시작하는 onClick 이벤트 같은 것들이 action 탭에 표시됨
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
