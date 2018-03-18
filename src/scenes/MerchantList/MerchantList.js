import React from 'react'
import { connect } from 'react-redux'

import { Header } from '../../components/Header'
import { Wrapper } from '../../components/Wrapper'
import List from '../../components/List'
import { Avatar } from '../../components/Avatar'
import { UserDetails } from '../../components/UserDetails'
import { fetchMerchantList } from './data/actions'

export class MerchantList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pageNo: 1,
      perPage: 10
    }

    this.onAdd = this.onAdd.bind(this)
    this.onDetails = this.onDetails.bind(this)
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

  onAdd() {
    this.props.history.push('/add')
  }

  onDetails(id) {
    this.props.history.push(`/view/${id}`)
  }

  render() {
    return (
      <Wrapper>
        <Header
            title="Merchants"
            hasAction
            actionTitle="Add"
            actionIcon="add"
            actionCallback={this.onAdd}
        />
        <Wrapper.Content>
          <List>
            {
              this.props.data.map((merchant) => {
                return (
                  <List.Item
                    key={merchant.id}
                    onClick={() => this.onDetails(merchant.id)}
                  >
                    <Avatar
                      src={merchant.avatarUrl}
                      alt={`${merchant.firstname} ${merchant.lastname}`}
                    />
                    <UserDetails
                      name={`${merchant.firstname} ${merchant.lastname}`}
                      hasPremium={merchant.hasPremium}
                      email={merchant.email}
                      phone={merchant.phone}
                      bids={merchant.bids.length}
                    />
                  </List.Item>
                )
              })
            }
          </List>
        </Wrapper.Content>
      </Wrapper>
    )
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
