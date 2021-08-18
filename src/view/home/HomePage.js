import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Layout from 'view/layout/Layout';
import { i18n } from 'i18n';
import { Row, Col, Card } from 'antd';

class HomePage extends PureComponent {
  render() {
    const twoColumnsResponsiveProps = {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 12,
      style: { marginBottom: 24 },
    };

    const threeColumnsResponsiveProps = {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 8,
      style: { marginBottom: 24 },
    };

    return (
      <React.Fragment>
        <Row gutter={24}></Row>
        <p
          style={{
            width: '100%',
            textAlign: 'center',
            color: 'grey',
          }}
        >
          {i18n('home.message')}
        </p>
      </React.Fragment>
    );
  }
}

export default connect(null)(Layout(HomePage));
