import React from 'react'
import Loadable from 'react-loadable';
import { Loading } from '../../components/Loading';

const LoadableComponent = Loadable({
  loader: () => import('./MerchantList'),
  loading: Loading,
})

export default class LoadableMerchantList extends React.Component {
  render() {
    return <LoadableComponent {...this.props} />;
  }
}