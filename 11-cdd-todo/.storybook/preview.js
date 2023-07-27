import { BrowserRouter } from 'react-router-dom';
import { ToDoListContextProvider } from 'contexts/ToDoList';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// **** BroswerRouter 컴포넌트 (스토리북의 데코레이터)
// 데코레이터 옵션에서 이를 사용해 각각의 스토리에 적용되도록 수정
// 데코레이터는 각각의 스토리가 화면에 표시될 때, 해당 스토리에 추가적으로 컴포넌트를 제공할 떄 사용
export const decorators = [
  (Story) => (
    <ToDoListContextProvider>
      {/* AppTitle 컴포넌트는 react-router-dom의 Link 컴포넌트를 사용해 페이지 이동을 구현함 */}
      {/* 이 컴포넌트를 화면에 표시하기 위해서는 react-router-dom의 BroswerRouter 컴포넌트하위에 표시해야 함 */}
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </ToDoListContextProvider>
  ),
];
