import { combineReducers } from 'redux'

import merchantList from '../scenes/MerchantList/data/reducer';
import merchantItem from '../scenes/MerchantItem/data/reducer';
// import merchantAddEdit from '../scenes/MerchantAddEdit/data/reducer';

export default combineReducers({
    merchantList,
    merchantItem
})