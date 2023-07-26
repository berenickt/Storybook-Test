import styled from '@emotion/styled'

import { Title } from 'components/atoms/Title'
import { Counter } from 'components/organisms/Counter'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

/**
 * Counter Organisms(유기체)를 가져와서,
 * Title Atoms(원자)를 합쳐서
 * Templates(템플릿) 만들기
 */
export const CounterApp = () => {
  return (
    <Container>
      <Title title="Counter App" />
      <Counter />
    </Container>
  )
}
