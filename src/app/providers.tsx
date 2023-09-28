import { PropsWithChildren } from 'react'

import GlobalStyles from '@/styles/global'

// export function Providers({ children} : {children: React.ReactNode}) {
// Forma Literal
// por ser Ts ele precisa de um type

// PropsWithChildren - propriedade
// É um genérico "<P" que tem um children como uma propriedade a ser passada MAIS qualquer coisa que é passada junto - é realizada uma junção - foo -> adicionando uma propriedade
// export function Providers({ children, foo }: PropsWithChildren<{foo: string}>) {

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
