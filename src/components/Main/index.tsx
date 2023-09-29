import * as S from './styles'

const Main = ({
  // As props geram os controls no storybook
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    {/* <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description> */}
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frentet para uma tela com código"
    />
    {/* <h1>React Avançado</h1> */}
  </S.Wrapper>
)

export default Main
