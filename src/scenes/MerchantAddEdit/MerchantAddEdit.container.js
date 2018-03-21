import { connect } from 'react-redux'

import {
  clearMerchantData,
  fetchMerchantItem
} from '../../shared/data/actions'
import { saveMerchant } from './data/actions'
import MerchantAddEdit from './MerchantAddEdit.component'

const mapStateToProps = (state) => ({
  data: state.merchantItem.data,
  isLoading: state.merchantItem.isLoading,
  error: state.merchantItem.error,
  isSaving: state.merchantAddEdit.isSaving,
  hasSaved: state.merchantAddEdit.hasSaved,
  saveError: state.merchantAddEdit.error
})

const mapDispatchToProps = (dispatch) => ({
  clearMerchantData: () => dispatch(clearMerchantData()),
  fetchMerchantItem: id => dispatch(fetchMerchantItem(id)),
  saveMerchant: data => dispatch(saveMerchant(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(MerchantAddEdit)
