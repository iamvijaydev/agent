import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Header } from '../../components/Header'
import { Wrapper } from '../../components/Wrapper'
import { List } from '../../components/List'
import { Avatar } from '../../components/Avatar'
import { UserDetails } from '../../components/UserDetails'
import { BidDetails } from '../../components/BidDetails'
import { Placeholder } from '../../components/Placeholder'
import { ShowAt } from '../../components/Responsive'
import { Button } from '../../components/Forms'

export default class MerchantAddEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      avatarUrl: '',
      firstname: '',
      firstnameMsg: '',
      lastname: '',
      lastnameMsg: '',
      email: '',
      emailMsg: '',
      phone: '',
      phoneMsg: '',
      hasPremium: false
    }

    this.onBack = this.onBack.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      this.props.fetchMerchantItem(this.props.match.params.id)
    } else {
      this.props.clearMerchantData()
    }

    this.fillData(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    const differentMerchant = nextProps.data.id !== this.props.data.id
    const saveSuccess = this.props.hasSaved === null && nextProps.hasSaved === true

    if (differentMerchant) {
      this.fillData(nextProps.data)
    } else if (saveSuccess) {
      this.onBack()
    }
  }

  fillData(data) {
    const {
      avatarUrl,
      firstname,
      lastname,
      email,
      phone,
      hasPremium
    } = data;

    this.setState({
      avatarUrl,
      firstname,
      firstnameMsg: '',
      lastname,
      lastnameMsg: '',
      email,
      emailMsg: '',
      phone,
      phoneMsg: '',
      hasPremium
    })
  }

  clearMsgs() {
    this.setState({
      firstnameMsg: '',
      lastnameMsg: '',
      emailMsg: '',
      phoneMsg: '',
    })
  }

  onBack() {
    this.props.history.goBack()
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSave() {
    this.clearMsgs()

    if (this.validate()) {
      const {
        firstname,
        lastname,
        email,
        phone
      } = this.state;
      const data = {
        firstname,
        lastname,
        email,
        phone
      }

      if (this.props.match.params.id) {
        data.id = this.props.match.params.id
      }

      this.props.saveMerchant(data)
    }
  }

  validate() {
    const notEmail = email => !/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(email)
    const rules = {
      firstname: ['notEmpty'],
      lastname: ['notEmpty'],
      email: ['notEmpty', 'isEmail'],
      phone: ['notEmpty'],
    }
    const matchFields = {
      firstname: true,
      lastname: true,
      email: true,
      phone: true
    }
    const fields = Object.keys(this.state).filter(key => !!matchFields[key])
    let isValid = true;

    // check if any field is invalid
    // also set a local msg for that field
    fields.forEach(field => {
      if (!!rules[field]) {
        const rule = rules[field]
        let msg = ''
        
        // find an invalid entry
        const inValid = rule.findIndex(ruleName => {

          // either empty or not a valid email
          if (ruleName === 'notEmpty' && !this.state[field].trim().length) {
            msg = 'This field cannot be empty';
            return true;
          } else if (ruleName === 'isEmail' && notEmail(this.state[field])) {
            msg = 'Please enter a valid email';
            return true;
          }

          return false;
        })

        // set the message for invalid field
        // tag as invalid form
        if (inValid > -1) {
          this.setState({
            [`${field}Msg`]: msg
          })
          isValid = false;
        }
      }
    })

    return isValid;
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
          title={this.props.match.params.id ? 'Edit Merchant' : 'Add Merchant'}
          showLoader={this.props.isLoading}
        />
        <Wrapper.Content>
          <List>
            <List.Item>
              <div>
                <input
                  type="text"
                  name="firstname"
                  value={this.state.firstname}
                  placeholder="firstname"
                  onChange={this.handleInputChange}
                />
                <span>{this.state.firstnameMsg}</span>
              </div>
              <div>
                <input
                  type="text"
                  name="lastname"
                  value={this.state.lastname}
                  placeholder="lastname"
                  onChange={this.handleInputChange}
                />
                <span>{this.state.lastnameMsg}</span>
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  placeholder="email"
                  onChange={this.handleInputChange}
                />
                <span>{this.state.emailMsg}</span>
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  placeholder="phone"
                  onChange={this.handleInputChange}
                />
                <span>{this.state.phoneMsg}</span>
              </div>
              <input
                type="checkbox"
                name="hasPremium"
                checked={this.state.hasPremium}
                onChange={this.handleInputChange}
              />
            </List.Item>
            <List.Item
              noCursor
              justify="flex-end"
            >
              <Button onClick={this.onSave}>Save</Button>
              <Button onClick={this.onBack}>Cancel</Button>
            </List.Item>
          </List>
        </Wrapper.Content>
      </Wrapper>
    )
  }
}

MerchantAddEdit.propTypes = {
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
