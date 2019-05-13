import React from 'react'
import classnames from 'classnames'
import teoria from 'teoria'
import { A11y } from '@modifiers'
import styles from './styles.css'

const toNote = note => teoria.note.fromString(note)
const capitalize = str => `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`

export function Key ({
  note,
  className,
  ...attrs
}) {
  const value = note.toString()
  const name = note.toString(true)
  const classList = classnames(styles.key, {
    [styles.blackKey]: note.accidentalValue() !== 0
  }, className)

  return (
    <div className={classList} {...attrs}>
      <input
        type='checkbox'
        className={classnames(styles.input, A11y.visuallyHidden)}
        id={`note-${value}`}
        name='note'
        value={value}
      />

      <label
        className={styles.label}
        htmlFor={`note-${value}`}
      >
        {capitalize(name)}
      </label>
    </div>
  )
}

export default class Keyboard extends React.Component {
  constructor (props) {
    super(props)

    this.formRef = React.createRef()

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange () {
    const { current } = this.formRef

    const result = (
      Array.from(current.note)
        .map(input => ({
          value: capitalize(input.value),
          checked: input.checked
        }))
    )

    this.props.onChange(result)
  }

  render () {
    const { className } = this.props
    const classList = classnames(styles.root, className)

    return (
      <form ref={this.formRef} onChange={this.handleChange} className={classList}>
        <Key note={toNote('C2')} />
        <Key note={toNote('Db2')} />
        <Key note={toNote('D2')} />
        <Key note={toNote('Eb2')} />
        <Key note={toNote('E2')} />
        <Key note={toNote('F2')} />
        <Key note={toNote('Gb2')} />
        <Key note={toNote('G2')} />
        <Key note={toNote('Ab3')} />
        <Key note={toNote('A3')} />
        <Key note={toNote('Bb3')} />
        <Key note={toNote('B3')} />
        <Key note={toNote('C3')} />
      </form>
    )
  }
}

// <Key note={toNote('Db3')} />
// <Key note={toNote('D3')} />
// <Key note={toNote('Eb3')} />
// <Key note={toNote('E3')} />
// <Key note={toNote('F3')} />
// <Key note={toNote('Gb3')} />
// <Key note={toNote('G3')} />
// <Key note={toNote('Ab4')} />
// <Key note={toNote('A4')} />
// <Key note={toNote('Bb4')} />
// <Key note={toNote('B4')} />
// <Key note={toNote('C4')} />
