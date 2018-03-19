import React from 'react'
import { connect } from 'react-redux'
import * as moment from 'moment'

import { Header } from '../../components/Header'
import { Wrapper } from '../../components/Wrapper'
import List from '../../components/List'
import { Avatar } from '../../components/Avatar'
import { UserDetails } from '../../components/UserDetails'
import { BidDetails } from '../../components/BidDetails'
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

  getLoadingContent() {
    const tenItems = Array.from({ length: 10 }, (e, i) => i)
    let items = [];

    if (this.props.isLoading) {
      items = tenItems.map((i) => {
        return (
          <List.Item
            key={i}
            noCursor
          >
            <BidDetails showLoading />
          </List.Item>
        )
      })
      items.unshift(
        <List.Item
          key="LOADING_MERCHANT"
          noCursor
        >
          <Avatar showLoading />
          <UserDetails showLoading />
        </List.Item>
      )
    }

    return items
  }

  getLoadedContent() {
    const { data } = this.props;
    let items = [];

    if (data.id.length) {

      if (data.bids.length) {
        items = data.bids.map((bid) => {
          return (
            <List.Item
              key={bid.id}
              noCursor
            >
              <BidDetails
                carTitle={bid.carTitle}
                created={`${moment(bid.created).format()}`}
                amount={bid.amount}
              />
            </List.Item>
          )
        })
      } else {
        items.push(
          <List.Item
            noCursor
            key="NO_BIDS"
          >
            <Placeholder message="No bids yet." />
          </List.Item>
        )
      }

      items.unshift(
        <List.Item
          key={data.id}
          noCursor
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
    }

    return items;
  }

  getMessage()  {
    const {
      data,
      isLoading,
      error
    } = this.props;

    let item = []
    let message = ''
    let status = 'default'

    if (error.has) {
      message = 'Fetch failed!'
      status = 'error'
    } else if (!isLoading && !data.id.length) {
      message = 'No result.'
    }

    if (message.length) {
      item.push(
        <List.Item
          noCursor
          key="MESSAGE"
        >
          <Placeholder message={message} status={status} />
        </List.Item>
      )
    }

    return item;
  }

  getContent() {
    return [
      ...this.getMessage(),
      ...this.getLoadingContent(),
      ...this.getLoadedContent()
    ]
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
