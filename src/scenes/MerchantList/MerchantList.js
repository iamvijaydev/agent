import React from 'react'
// import { connect } from 'react-redux'

export default class MerchantList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pageNo: 1,
            perPage: 10
        }
    }

    render() {
        return <div>Merchant List</div>
    }
}

// const mapStateToProps = (state) => {
// }

// const mapDispatchToProps = (dispatch) => {
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MerchantList)
