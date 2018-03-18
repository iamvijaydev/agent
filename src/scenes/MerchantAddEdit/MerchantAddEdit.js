import React from 'react'
// import { connect } from 'react-redux'

export default class MerchantAddEdit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pageNo: 1,
            perPage: 10
        }
    }

    render() {
        return <div>Merchant add/edit -</div>
    }
}

// const mapStateToProps = (state) => {
// }

// const mapDispatchToProps = (dispatch) => {
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MerchantAddEdit)
