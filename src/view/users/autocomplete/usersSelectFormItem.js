import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import usersService from 'modules/users/usersService';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import Skeleton from 'react-loading-skeleton';

class usersSelectFormItem extends Component {
  state = {
    data: null,
  };
  fetchFn = (value) => {
    return usersService.listSelect(10);
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
          readName="name"
          {...this.props}
          options={this.state.data.map((item) => ({
            value: item.id,
            label: item.name,
          }))}
        />
      );
    } else {
      return <Skeleton height={30} />;
    }
  }
}

export default usersSelectFormItem;