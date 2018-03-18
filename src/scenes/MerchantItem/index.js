import React from 'react'
import Loadable from 'react-loadable';
import { Loading } from '../../components/Loading';

const LoadableComponent = Loadable({
  loader: () => import('./MerchantItem'),
  loading: Loading,
})

export default class LoadableMerchantItem extends React.Component {
  render() {
    return <LoadableComponent {...this.props} />;
  }
}