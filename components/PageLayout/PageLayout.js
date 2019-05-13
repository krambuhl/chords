import React from 'react'
import classnames from 'classnames'
import { Heading, Wrapper } from '@components'
import styles from './styles.css'

export default function PageLayout ({
  className,
  contentClass,
  children,
  ...attrs
}) {
  const classList = classnames(styles.root, className)
  const contentClassList = classnames(styles.content, contentClass)

  return (
    <Wrapper className={classList} {...attrs}>
      <header>
        <Heading>Chords</Heading>
      </header>

      <main className={contentClassList}>
        {children}
      </main>
    </Wrapper>
  )
}
