import React from 'react'
import { connect } from 'react-redux'

import { fetchMerchantList } from './data/actions'

export class MerchantList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pageNo: 1,
            perPage: 10
        }
    }

    componentWillMount() {
        const {
            pageNo: page_no,
            perPage: per_page
        } = this.state;
        
        this.props.fetchMerchantList({
            page_no,
            per_page
        })
    }

    render() {
        return <div>Merchant List</div>
    }
}

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
