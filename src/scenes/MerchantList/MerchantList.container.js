import { connect } from 'react-redux'

import { fetchMerchantList } from './data/actions'
import MerchantList from './MerchantList.component'

const mapStateToProps = state => ({
  meta: state.merchantList.meta,
  data: state.merchantList.data,
  isLoading: state.merchantList.isLoading,
  error: state.merchantList.error,
})

const mapDispatchToProps = dispatch => ({
  fetchMerchantList: options => dispatch(fetchMerchantList(options))
})

export default connect(mapStateToProps, mapDispatchToProps)(MerchantList)
