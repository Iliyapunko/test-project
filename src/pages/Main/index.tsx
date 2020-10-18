import { FC } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
// import { getStats, changeSearchFilter, changeDateRangeFilter, deleteStats } from 'actions/Main'
import mainSelector from './selector'
import Main from './Main'

const mapDispatchToProps = { }

const MainPage = connect(mainSelector, mapDispatchToProps)(Main)
export default withTranslation()(MainPage as FC)
