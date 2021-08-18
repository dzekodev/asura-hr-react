import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import AuthServices from 'modules/auth/authService';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import Skeleton from 'react-loading-skeleton';

class providerSelectFormItem extends Component {
  state = {
    data: null,
  };
  fetchFn = (value) => {
    return AuthServices.getRoles();
  };
  componentDidMount = () => {
    this.fetchFn().then((data) => {
      this.setState({ data: data });
    });
  };

  render() {
    if (this.state.data) {
      return (
        <SelectFormItem
          {...this.props}
          options={this.state.data.map((item) => ({
            value: item.role,
            label: item.name,
          }))}
        />
      );
    } else {
      return <Skeleton height={30} />;
    }
  }
}

export default providerSelectFormItem;
