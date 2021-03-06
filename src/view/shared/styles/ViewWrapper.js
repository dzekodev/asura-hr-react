import styled from 'styled-components';

const ViewWrapper = styled.div`
  padding: 24px;
  padding-top: 0;
  padding-bottom: 0;

  .ant-row {
    margin-bottom: 8px;
  }
`;

export const viewItemLayout = {
  labelCol: {
    md: { span: 8 },
    lg: { span: 6 },
  },
  wrapperCol: {
    md: { span: 18 },
    lg: { span: 12 },
  },
};

export default ViewWrapper;
