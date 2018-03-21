import React from 'react'
import PropTypes from 'prop-types'

import { Header } from '../../components/Header'
import { Wrapper } from '../../components/Wrapper'
import { List } from '../../components/List'
import { Avatar } from '../../components/Avatar'
import { Placeholder } from '../../components/Placeholder'
import {
  Button,
  TextInput,
  Checkbox
} from '../../components/Forms'
import { validator } from '../../shared/utils/validator'

export default class MerchantAddEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
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
      this.setState({ isEditing: true })
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
    const keys = [
      'firstname',
      'lastname',
      'email',
      'phone'
    ]
    
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

    const rules = {
      firstname: ['notEmpty'],
      lastname: ['notEmpty'],
      email: ['notEmpty', 'isEmail'],
      phone: ['notEmpty', 'isPhone'],
    }

    const {
      isValid,
      messages
    } = validator(keys, data, rules)

    Object.keys(messages)
      .forEach(key => {
        this.setState({
          [`${key}Msg`]: messages[key]
        })
      })

    return isValid;
  }

  getLoadedContent() {
    const { data, isLoading } = this.props;
    const hideForm = this.state.isEditing && !data.id.length && !isLoading

    return hideForm ? null : (
      <List>
        <List.Item
          noCursor
          justify="center"
        >
          <Avatar
            src={this.state.avatarUrl}
            alt={this.state.firstname}
          />
        </List.Item>
        <List.Item noCursor>
          <TextInput
            name="firstname"
            value={this.state.firstname}
            placeholder="First name"
            onChange={this.handleInputChange}
            isLoading={this.props.isLoading}
            message={this.state.firstnameMsg}
          />
        </List.Item>
        <List.Item noCursor>
          <TextInput
            name="lastname"
            value={this.state.lastname}
            placeholder="Last name"
            onChange={this.handleInputChange}
            isLoading={this.props.isLoading}
            message={this.state.lastnameMsg}                
          />
        </List.Item>
        <List.Item noCursor>
          <TextInput
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleInputChange}
            isLoading={this.props.isLoading}
            message={this.state.emailMsg}                
          />
        </List.Item>
        <List.Item noCursor>
          <TextInput
            name="phone"
            value={this.state.phone}
            placeholder="Phone"
            onChange={this.handleInputChange}
            isLoading={this.props.isLoading}
            message={this.state.phoneMsg}                
          />
        </List.Item>
        <List.Item noCursor>
            <Checkbox>
              <input
                type="checkbox"
                id="hasPremium"
                name="hasPremium"
                checked={this.state.hasPremium}
                onChange={this.handleInputChange}
              />
              <label htmlFor="hasPremium">Has premium</label>
            </Checkbox>
        </List.Item>
        <List.Item
          noCursor
          justify="flex-end"
        >
          <Button
            onClick={this.onSave}
            disabled={(this.state.isEditing && this.props.isLoading) || this.props.isSaving}
          >
            {this.props.isSaving ? 'Saving...' : 'Save'}
          </Button>
          <Button onClick={this.onBack}>Cancel</Button>
        </List.Item>
      </List>
    )
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
      message = 'No result. Try reloading'
    }

    return this.state.isEditing && message.length ? (
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
          showLoader={this.props.isLoading || this.props.isSaving}
        />
        <Wrapper.Content>{this.getContent()}</Wrapper.Content>
      </Wrapper>
    )
  }
}

// MerchantAddEdit.propTypes = {
//   isLoading: PropTypes.bool,
//   data: PropTypes.shape({
//     id: PropTypes.string,
//     firstname: PropTypes.string,
//     lastname: PropTypes.string,
//     avatarUrl: PropTypes.string,
//     email: PropTypes.string,
//     phone: PropTypes.string,
//     hasPremium: PropTypes.bool,
//     bids: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string,
//         carTitle: PropTypes.string,
//         amount: PropTypes.number,
//         created: PropTypes.string,
//       })
//     )
//   }),
//   error: PropTypes.shape({
//     has: PropTypes.bool
//   })
// }
