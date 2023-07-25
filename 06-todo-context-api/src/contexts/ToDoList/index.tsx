// context를 생성하기 위해서는 createContext라는 훅을 사용해야 함
import { createContext, useState } from 'react';

interface Context {
  readonly toDoList: string[];
  readonly onAdd: (toDo: string) => void;
  readonly onDelete: (toDo: string) => void;
}

/**
 * createContext 훅을 사용해 Context를 생성할 떄 Context의 기본값 설정
 * 타입스크립트의 interface를 사용해 해당 Context의 데이터 타입과 함수 타입을 정의
 */
const ToDoListContext = createContext<Context>({
  toDoList: [],
  /* eslint-disable @typescript-eslint/no-empty-function */
  onAdd: (): void => {},
  onDelete: (): void => {},
  /* eslint-enable @typescript-eslint/no-empty-function */
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

/**
 * 부모 컴포넌트로부터 1개 또는 복수 개의 리액트 컴포넌트를 children props로 받음
 */
const ToDoListContextProvider = ({ children }: Props) => {
  // ** 전역적으로 관리할 데이터
  const [toDoList, setToDoList] = useState([
    '리액트 공부하기',
    '운동하기',
    '책 읽기',
  ]);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  };

  // ****
  // createContext로 생성한 Context의 Provider를 사용해 생성한
  // 할일목록 데이터, onAdd, onDelete 설정
  // Provider 하위에는 부모 컴포넌트로부터 전달받은 리액트 컴포넌트를 표시
  return (
    <ToDoListContext.Provider
      value={{
        toDoList,
        onAdd,
        onDelete,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};

// ** 생성한 Context의 Provider와 Context를 외부에서도 사용가능하게 export
// 공통 부모 컴포넌트에는 ToDoListContextProvider를 사용해서 데이터를 제공
// 데이터를 사용하는 곳에서는 useContext 훅을 사용해 생성한 TodoListContext에서 필요한 내용을 사용
export { ToDoListContext, ToDoListContextProvider };
