import { connect } from 'react-redux'

import { fetchMerchantItem } from './data/actions'
import MerchantItem from './MerchantItem.component'

const mapStateToProps = (state) => ({
  data: state.merchantItem.data,
  isLoading: state.merchantItem.isLoading,
  error: state.merchantItem.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchMerchantItem: id => dispatch(fetchMerchantItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MerchantItem)
