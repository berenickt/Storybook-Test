// **** 스토리북 메인 설정 파일
// 스토리북은 컴포넌트 표시를 위해 자체 개발 서버를 사용하는데,
// main.js은 해당 서버에 관한 설정 파일임
// 스토리북을 실행하는데 필수설정 팡리이라, 수정하는 경우 스토리북을 재실행해야 함
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
