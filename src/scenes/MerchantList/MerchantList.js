import React from 'react'
import { connect } from 'react-redux'

import { Header } from '../../components/Header'
import { Wrapper } from '../../components/Wrapper'
import List from '../../components/List'
import { Avatar } from '../../components/Avatar'
import { UserDetails } from '../../components/UserDetails'
import { Pagination } from '../../components/Pagination'
import { Placeholder } from '../../components/Placeholder'
import { ShowAt, HideAt } from '../../components/Responsive'
import { fetchMerchantList } from './data/actions'

export class MerchantList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pageNo: 1,
      perPage: 10,
      count: 0
    }

    this.onAdd = this.onAdd.bind(this)
    this.onDetails = this.onDetails.bind(this)
    this.onPerPageChange = this.onPerPageChange.bind(this)
    this.onPrev = this.onPrev.bind(this)
    this.onNext = this.onNext.bind(this)
  }

  componentWillMount() {
    if (this.props.meta.count !== null) {
      this.setState({
        count: this.props.meta.count
      })
    }

    const {
      pageNo: page_no,
      perPage: per_page
    } = this.state;
    
    this.props.fetchMerchantList({
      page_no,
      per_page
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.meta.count !== null && nextProps.meta.count !== this.props.meta.count) {
      this.setState({
        count: nextProps.meta.count
      })
    }
  }

  onAdd() {
    this.props.history.push('/add')
  }

  onDetails(id) {
    this.props.history.push(`/view/${id}`)
  }

  onPerPageChange(e) {
    const perPage = e.target.value
    const perPageInt = parseInt(perPage, 10)

    if (!isNaN(perPageInt)) {
      this.setState({
        pageNo: 1,
        perPage: perPageInt
      })

      this.props.fetchMerchantList({
        page_no: 1,
        per_page: perPageInt
      })
    }
  }

  onPrev() {
    let {
      pageNo: page_no,
      perPage: per_page
    } = this.state;

    --page_no;
    this.setState({ pageNo: page_no })
    
    this.props.fetchMerchantList({
      page_no,
      per_page
    })
  }

  onNext() {
    let {
      pageNo: page_no,
      perPage: per_page
    } = this.state;

    ++page_no;
    this.setState({ pageNo: page_no })
    
    this.props.fetchMerchantList({
      page_no,
      per_page
    })
  }

  getPagination(onTop = true) {
    const pagination = (
      <Pagination
        isLoading={this.props.isLoading}
        onPerPageChange={this.onPerPageChange}
        perPage={this.state.perPage}
        pageNo={this.state.pageNo}
        results={this.props.data.length}
        count={this.state.count}
        onPrev={this.onPrev}
        onNext={this.onNext}
      />
    )
    const key = `PAGINATION_${onTop ? 'TOP' : 'BOTTOM'}`

    return onTop ? (
      <ShowAt
        breakpoint="mediumAndAbove"
        key={key}
      >
        <List.Item noCursor>{pagination}</List.Item>
      </ShowAt>
    ) : (
        <List.Item
          noCursor
          key={key}
        >
          {pagination}
        </List.Item>
    )
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
              <ShowAt breakpoint="smallAndAbove">
                <Avatar showLoading />
              </ShowAt>
              <UserDetails showLoading />
            </List.Item>
          )
        })
    }

    return items;
  }

  getLoadedContent() {
    const { data, isLoading } = this.props;
    let items = [];

    if (!isLoading && data.length) {
      items = data.map((merchant) => {
        return (
          <List.Item
            key={merchant.id}
            onClick={() => this.onDetails(merchant.id)}
          >
            <ShowAt breakpoint="smallAndAbove">
              <Avatar
                src={merchant.avatarUrl}
                alt={`${merchant.firstname} ${merchant.lastname}`}
              />
            </ShowAt>
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

    return items;
  }

  getMessage() {
    const {
      isLoading,
      data,
      error
    } = this.props

    let items = []
    let message = ''
    let status = 'default'

    if (error.has) {
      message = 'Fetch failed!'
      status = 'error'
    } else if (!isLoading && !data.length) {
      message = 'No results.'
    }

    if (message.length) {
      items.push(
        <List.Item
          noCursor
          key="MESSAGE"
        >
          <Placeholder message={message} status={status} />
        </List.Item>
      )
    }

    return items;
  }

  getContent() {
    const onTop = true;
    
    return [
      ...this.getMessage(),
      this.getPagination(onTop),
      ...this.getLoadingContent(),
      ...this.getLoadedContent(),
      this.getPagination(!onTop)
    ]
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
          showLoader={this.props.isLoading}
        />
        <Wrapper.Content>
          <List>{this.getContent()}</List>
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
