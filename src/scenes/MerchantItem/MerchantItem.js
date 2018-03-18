import React from 'react'
import { connect } from 'react-redux'

import {
    fetchMerchantItem
} from './data/actions'

export class MerchantItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }

    componentWillMount() {
        this.props.fetchMerchantItem(this.props.match.params.id)
    }

    render() {
        return <div>View merchant details of</div>
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
