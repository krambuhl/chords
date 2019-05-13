import React from 'react'
import classnames from 'classnames'
import { Heading, Wrapper } from '@components'
import styles from './styles.css'

export default function PageLayout ({
  className,
  children,
  ...attrs
}) {
  const classList = classnames(styles.root, className)

  return (
    <Wrapper className={classList} {...attrs}>
      <header>
        <Heading>Chords</Heading>
      </header>

      <main>
        {children}
      </main>
    </Wrapper>
  )
}
