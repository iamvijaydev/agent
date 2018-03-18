import React from 'react'
import { connect } from 'react-redux'

import { Header } from '../../components/Header'
import { fetchMerchantItem } from './data/actions'

export class MerchantItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

    this.onBack = this.onBack.bind(this)
  }

  componentWillMount() {
    this.props.fetchMerchantItem(this.props.match.params.id)
  }

  onBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        <Header
          hasBackBtn
          backCallback={this.onBack}
          title="Merchant"
        />
        <div>View merchant details of</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.merchantItem.data,
  isLoading: state.merchantItem.isLoading,
  error: state.merchantItem.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchMerchantItem: id => dispatch(fetchMerchantItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MerchantItem)
