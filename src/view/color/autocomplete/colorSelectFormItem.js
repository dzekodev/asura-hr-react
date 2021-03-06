import React, { Component } from 'react';
import AutocompleteFormItem from 'view/shared/form/items/AutocompleteFormItem';
import colorService from 'modules/color/colorService';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import Skeleton from 'react-loading-skeleton';

class colorSelectFormItem extends Component {
  state = {
    data: null,
  };
  fetchFn = (value) => {
    return colorService.listSelect(10);
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

export default colorSelectFormItem;
