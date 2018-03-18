import React from 'react'
import Loadable from 'react-loadable';
import { Loading } from '../../components/Loading';

const LoadableComponent = Loadable({
  loader: () => import('./MerchantAddEdit'),
  loading: Loading,
})

export default class LoadableMerchantAddEdit extends React.Component {
  render() {
    return <LoadableComponent {...this.props} />;
  }
}