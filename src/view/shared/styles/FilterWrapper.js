import styled from 'styled-components';

const FilterWrapper = styled.div`
  margin-bottom: 16px;

  .filter-buttons {
    text-align: right;

    .ant-btn {
      margin-left: 5px;
      margin-bottom: 8px;
    }
  }
`;

export const formItemLayout = {
  labelCol: {
    md: { span: 12 },
  },
  wrapperCol: {
    md: { span: 12 },
  },
};

export default FilterWrapper;
