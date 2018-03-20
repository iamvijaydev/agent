import React from 'react'
import Loadable from 'react-loadable';
import { ComponentLoading } from '../../components/ComponentLoading';

const LoadableComponent = Loadable({
  loader: () => import('./MerchantList'),
  loading: ComponentLoading,
  timeout: 5000
})

export default class LoadableMerchantList extends React.Component {
  render() {
    return <LoadableComponent {...this.props} />;
  }
}
