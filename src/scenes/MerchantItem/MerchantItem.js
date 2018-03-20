import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as moment from 'moment'

import { Header } from '../../components/Header'
import { Wrapper } from '../../components/Wrapper'
import { List } from '../../components/List'
import { Avatar } from '../../components/Avatar'
import { UserDetails } from '../../components/UserDetails'
import { BidDetails } from '../../components/BidDetails'
import { Placeholder } from '../../components/Placeholder'
import { ShowAt } from '../../components/Responsive'
import { Button } from '../../components/Forms'
import { fetchMerchantItem } from './data/actions'

export class MerchantItem extends React.Component {
  constructor(props) {
    super(props)

    this.onBack = this.onBack.bind(this)
    this.onEdit = this.onEdit.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  componentWillMount() {
    this.props.fetchMerchantItem(this.props.match.params.id)
  }

  onBack() {
    this.props.history.goBack()
  }

  onEdit() {
    this.props.history.push(`/edit/${this.props.data.id}`)
  }

  onDelete() {
    
    // No time to create fancy modal :(
    const response = window.confirm(`Delete merchant ${this.props.data.firstname}?`)
    
    response && this.props.history.push('/')
  }

  getLoadingContent() {
    const fiveItems = Array.from({ length: 5 }, (e, i) => i)

    return this.props.isLoading ? (
      <div>
        <List>
          <List.Item
            key="LOADING_MERCHANT"
            noCursor
          >
            <ShowAt breakpoint="smallAndAbove">
              <Avatar showLoading />
            </ShowAt>
            <UserDetails showLoading />
          </List.Item>
        </List>
        <List>
          {
            fiveItems.map((i) => {
              return (
                <List.Item
                  key={i}
                  noCursor
                >
                  <BidDetails showLoading />
                </List.Item>
              )
            })
          }
        </List>
      </div>
    ) : null
  }

  getAmount(amount = 0) {
    const toAry = amount.toString().split('').reverse()
    let formated = ''

    toAry.forEach((number, index) => {
      if (index === 3 || index === 6) {
        formated = ',' + formated;
      }

      formated = number + formated;
    })

    return formated;
  }

  getDate(created) {
    const today = moment();
    const someday = moment(created);

    if (today.diff(someday, 'days') < 1) {
      return `Today ${someday.format('hA')}`
    } else {
      return someday.format('Do MMM')
    }
  }

  getLoadedContent() {
    const { data, isLoading } = this.props;
    const bids = data.bids.length ? (
      data.bids.map((bid) => {
        return (
          <List.Item
            key={bid.id}
            noCursor
          >
            <BidDetails
              amount={this.getAmount(bid.amount)}
              carTitle={bid.carTitle}
              created={this.getDate(bid.created)}
            />
          </List.Item>
        )
      })
    ) : (
      <List.Item
        noCursor
        key="NO_BIDS"
      >
        <Placeholder message="No bids yet." />
      </List.Item>
    );

    return data.id.length && !isLoading ? (
      <div>
        <List>
          <List.Item
            key={data.id}
            noCursor
          >
            <ShowAt breakpoint="smallAndAbove">
              <Avatar
                src={data.avatarUrl}
                alt={`${data.firstname} ${data.lastname}`}
              />
            </ShowAt>
            <UserDetails
              name={`${data.firstname} ${data.lastname}`}
              hasPremium={data.hasPremium}
              email={data.email}
              phone={data.phone}
              bids={data.bids.length}
            />
          </List.Item>
          <List.Item
            noCursor
            justify="flex-end"
          >
            <Button onClick={this.onEdit}>Edit</Button>
            <Button onClick={this.onDelete}>Delete</Button>
          </List.Item>
        </List>
        <List>{bids}</List>
      </div>
    ) : null
  }

  getMessage() {
    const {
      data,
      isLoading,
      error
    } = this.props;

    let message = ''
    let status = 'default'

    if (error.has) {
      message = 'Fetch failed!'
      status = 'error'
    } else if (!isLoading && !data.id.length) {
      message = 'No result.'
    }

    return message.length ? (
      <List>
        <List.Item
          noCursor
          key="MESSAGE"
        >
          <Placeholder message={message} status={status} />
        </List.Item>
      </List>
    ) : null;
  }

  getContent() {
    return (
      <div>
        {this.getMessage()}
        {this.getLoadingContent()}
        {this.getLoadedContent()}
      </div>
    )
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
          {this.getContent()}
        </Wrapper.Content>
      </Wrapper>
    )
  }
}

MerchantItem.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.shape({
    id: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    hasPremium: PropTypes.bool,
    bids: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        carTitle: PropTypes.string,
        amount: PropTypes.number,
        created: PropTypes.string,
      })
    )
  }),
  error: PropTypes.shape({
    has: PropTypes.bool
  })
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
