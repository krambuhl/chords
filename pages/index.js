import React from 'react'
import piu from 'piu'
import teoria from 'teoria'
import { Heading, Keyboard, PageLayout } from '@components'
import { Rhythm } from '@modifiers'

class IndexPage extends React.Component {
  static getInitialProps () {

  }

  constructor (props) {
    super(props)

    this.state = {
      keys: []
    }

    this.onKeyboardChange = this.onKeyboardChange.bind(this)
  }

  onKeyboardChange (keys) {
    this.setState({
      keys: keys.filter(k => k.checked).map(k => k.value)
    })
  }

  render () {
    const { keys } = this.state
    const notes = keys.map(teoria.note)
    const chords = piu.infer(notes).map(piu.name)

    console.log(chords)

    return (
      <PageLayout contentClass={Rhythm.large}>
        <Keyboard onChange={this.onKeyboardChange} />

        { chords.length > 0 && <Heading variant={Heading.h2}>{chords.join(' / ')}</Heading> }
        { keys.length > 0 && <p>{keys.join(' – ')}</p> }
      </PageLayout>
    )
  }
}

export default IndexPage
