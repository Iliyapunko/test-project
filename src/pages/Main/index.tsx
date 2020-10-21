import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { changeInput,changeRadio,changeSwicth } from 'actions/main'
import mainSelector from './selector'
import Main from './Main'

const mapDispatchToProps = { changeInput,changeRadio,changeSwicth}

const MainPage = connect(mainSelector, mapDispatchToProps)(Main)
export default withTranslation()(MainPage)
