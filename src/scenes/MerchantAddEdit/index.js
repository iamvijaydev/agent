import React from 'react'
import Loadable from 'react-loadable';
import { ComponentLoading } from '../../components/ComponentLoading';

const LoadableComponent = Loadable({
  loader: () => import('./MerchantAddEdit.container'),
  loading: ComponentLoading,
  timeout: 5000
})

export default class LoadableMerchantAddEdit extends React.Component {
  render() {
    return <LoadableComponent {...this.props} />;
  }
}
