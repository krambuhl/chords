import React from 'react'
import classnames from 'classnames'
import styles from './styles.css'

export default function Wrapper ({
  tagName: Tag = 'div',
  variant = Wrapper.shell,
  className,
  children,
  ...attrs
}) {
  const classList = classnames(styles.root, variant, className)

  return (
    <Tag className={classList} {...attrs}>{children}</Tag>
  )
}

// variants
Wrapper.shell = styles.sizeShell
