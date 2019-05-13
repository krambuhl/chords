import React from 'react'
import classnames from 'classnames'
import styles from './styles.css'

export default function Heading ({
  tagName,
  variant = Heading.h1,
  className,
  children,
  ...attrs
}) {
  const Tag = tagName || variant.tagName
  const classList = classnames(
    styles.root,
    variant.className,
    className
  )

  return (
    <Tag className={classList} {...attrs}>{children}</Tag>
  )
}

// variants
Heading.h1 = { tagName: 'h1', className: styles.h1 }
Heading.h2 = { tagName: 'h2', className: styles.h2 }
Heading.h3 = { tagName: 'h3', className: styles.h3 }
Heading.h4 = { tagName: 'h4', className: styles.h4 }
Heading.h5 = { tagName: 'h5', className: styles.h5 }
Heading.h6 = { tagName: 'h6', className: styles.h6 }
