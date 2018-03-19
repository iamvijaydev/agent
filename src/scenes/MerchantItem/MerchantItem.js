import React from 'react'
import { connect } from 'react-redux'
import * as moment from 'moment'

import { Header } from '../../components/Header'
import { Wrapper } from '../../components/Wrapper'
import List from '../../components/List'
import { Avatar } from '../../components/Avatar'
import { UserDetails } from '../../components/UserDetails'
import { Placeholder } from '../../components/Placeholder'
import { ShowAt } from '../../components/Responsive'
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

  getContent() {
    const {
      data,
      isLoading,
      error
    } = this.props

    let message = ''
    let status = 'default'

    if (isLoading) {
      message = 'Loading...'
    } else if (error.has) {
      message = 'Fetch failed!'
      status = 'error'
    } else if (!data.id.length) {
      message = 'No results.'
    }

    const showMessage = (!data.id.length && message.length) || error.has
    let items = [];

    if (data.bids.length) {
      items = data.bids.map((bid) => {
        return (
          <List.Item
            key={bid.id}
          >
            <p>{bid.amount}</p>
            <p>{bid.carTitle}</p>
            <p>{`${moment(bid.created)}`}</p>
            {/* <Avatar
              src={merchant.avatarUrl}
              alt={`${merchant.firstname} ${merchant.lastname}`}
            />
            <UserDetails
              name={`${merchant.firstname} ${merchant.lastname}`}
              hasPremium={merchant.hasPremium}
              email={merchant.email}
              phone={merchant.phone}
              bids={merchant.bids.length}
            /> */}
          </List.Item>
        )
      })
    }

    if (!showMessage) {
      items.unshift(
        <List.Item
          noCursor
          key={data.id}
        >
          <Avatar
            src={data.avatarUrl}
            alt={`${data.firstname} ${data.lastname}`}
          />
          <UserDetails
            name={`${data.firstname} ${data.lastname}`}
            hasPremium={data.hasPremium}
            email={data.email}
            phone={data.phone}
            bids={data.bids.length}
          />
        </List.Item>
      )

      if (!data.bids.length) {
        items.push(
          <List.Item
            noCursor
            key="NO_BIDS"
          >
            <Placeholder message="No bids yet." />
          </List.Item>
        )
      }
    }

    if (showMessage) {
      items.unshift(
        <List.Item
          noCursor
          key="PLACEHOLDER"
        >
          <Placeholder message={message} status={status} />
        </List.Item>
      )
    }

    return items;
  }

  render() {
    return (
      <Wrapper>
        <Header
          hasBackBtn
          backCallback={this.onBack}
          title="Merchant"
          showLoader={this.props.isLoading}
        />
        <Wrapper.Content>
          <List>{this.getContent()}</List>
        </Wrapper.Content>
      </Wrapper>
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
