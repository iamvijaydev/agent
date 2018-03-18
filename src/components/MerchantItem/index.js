import React from 'react'

export default class MerchantItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Avatar src={this.props.avatarUrl} />
                <div>
                    {`${this.props.firstname} ${this.props.lastname}`}
                    {this.props.email} . {this.props.phone}
                </div>
                <MerchantActions bindCount={this.props.bids.length} />
            </div>
        )
    }
}