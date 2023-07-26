import styled from '@emotion/styled'

const Label = styled.h1`
  margin-bottom: 32px;
`

interface Props {
  readonly title: string
}

// 1. 타이틀 컴포넌트 생성
export const Title = ({ title }: Props) => {
  return <Label>{title}</Label>
}
