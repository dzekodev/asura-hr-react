import { Button } from 'antd';
import actions from 'modules/auth/authActions';
import selectors from 'modules/auth/authSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from 'view/auth/styles/Content';
import EmailUnverifiedPageWrapper from 'view/auth/styles/EmailUnverifiedPageWrapper';
import Logo from 'view/auth/styles/Logo';
import OtherActions from 'view/auth/styles/OtherActions';
import ButtonLink from 'view/shared/styles/ButtonLink';
import { i18n, i18nHtml } from 'i18n';
import ReactCodeInput from 'react-verification-code-input';

class EmailUnverifiedPage extends Component {
  constructor(props) {
    super(props);
    this.state = { code: '', submit: false };
  }
  doSignout = () => {
    const { dispatch } = this.props;
    dispatch(actions.doSignout());
  };

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(actions.doSendEmailConfirmation());
  }
  doSubmit = () => {
    const { dispatch } = this.props;

    dispatch(actions.doSendEmailConfirmation());
  };
  doSendCode = () => {
    const { dispatch } = this.props;

    dispatch(
      actions.doSendEmailCodeVerification(this.state.code),
    );
  };

  render() {
    return (
      <EmailUnverifiedPageWrapper>
        <Content>
          <Logo>
            <h1>{i18n('app.title')}</h1>
          </Logo>

          <h3 style={{ textAlign: 'center' }}>
            {i18nHtml(
              'auth.emailUnverified.message',
              this.props.email,
            )}
          </h3>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ReactCodeInput
              fields={4}
              onChange={(char) => {
                this.setState({ code: char });

                console.log('char :', this.state.code);
                console.log(
                  'lenght: ',
                  this.state.code.length,
                );
                if (
                  this.state.code &&
                  this.state.code.length === 3
                ) {
                  this.setState({ submit: true });
                }
              }}
              loading={this.props.loading}
            />
          </div>
          <Button
            onClick={this.doSendCode}
            style={{ marginTop: '24px' }}
            type="primary"
            size="large"
            block
            htmlType="submit"
            loading={this.props.loading}
            disabled={!this.state.submit}
          >
            {i18n('auth.emailUnverified.sendCode')}
          </Button>
          <OtherActions>
            <ButtonLink onClick={this.doSubmit}>
              {i18n('auth.emailUnverified.submit')}
            </ButtonLink>
          </OtherActions>

          <OtherActions>
            <ButtonLink onClick={this.doSignout}>
              {i18n('auth.signinWithAnotherAccount')}
            </ButtonLink>
          </OtherActions>
        </Content>
      </EmailUnverifiedPageWrapper>
    );
  }
}

const select = (state) => ({
  email: selectors.selectCurrentUserEmail(state),
  loading: selectors.selectLoadingEmailConfirmation(state),
});

export default connect(select)(EmailUnverifiedPage);
