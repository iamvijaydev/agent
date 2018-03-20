import React from 'react'
import Loadable from 'react-loadable';
import { ComponentLoading } from '../../components/ComponentLoading';

const LoadableComponent = Loadable({
  loader: () => import('./MerchantItem'),
  loading: ComponentLoading,
  timeout: 5000
})

export default class LoadableMerchantItem extends React.Component {
  render() {
    return <LoadableComponent {...this.props} />;
  }
}
