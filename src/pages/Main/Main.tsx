import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { DashboardProps } from 'types'
import styles from './Main.styles'
import Form from './Form'
import Summary from './Summary'

export default class Dashboard extends PureComponent {
  initialState = {
  }

  constructor(props: DashboardProps) {
    super(props)
    this.state = this.initialState
  }

  render() {
    return (
      <div>
        <Form />
        <Summary />
      </div>
    )
  }
}
