import React, { Component }     from 'react';
import './SignInForm.css';
import { Input, Button, Image } from 'semantic-ui-react';
import { userSignInSubmit }     from '../../redux/actions/signIn';
import { connect }              from 'react-redux';
import { FormValidation }       from 'calidation';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        isLoginEmpty: false,
        isPasswordEmpty: false,
      },
      login: '',
      password: '',
    };
    this.formConfig = {
      login: {
        isRequired: 'Is required!',
      },
      password: {
        isRequired: 'Is requ!',
        isMinLength: {
          message: '',
          length: 8,
        },
      },
    };
  }

  handleSubmit = ({ errors, fields, isValid }) => {
    if (isValid) {
      this.props.userSignInSubmit(fields.login, fields.password);
      this.setState({
        login: '',
        password: '',
      });
    }
  };

  render() {
    return (
      <FormValidation onSubmit={this.handleSubmit} config={this.formConfig} className={'login-form'}>
        {({ fields, errors, submitted }) => (
          <>
            <Image src={'images/logo.svg'}/>
            {submitted && errors.login ?
              <Input
                type={'email'} name={'login'} placeholder={'Login'} className={'form-item'}
                value={fields.login} error
              />
              :
              <Input
                type={'email'} name={'login'} placeholder={'Login'} className={'form-item'}
                value={fields.login}
              />
            }

            {submitted && errors.password ?
              <Input
                type={'password'} name={'password'} placeholder={'Password'} className={'form-item'}
                value={fields.password} error
              />
              :
              <Input
                type={'password'} name={'password'} placeholder={'Password'} className={'form-item'}
                value={fields.password}
              />
            }

            <Button primary type={'submit'} className={'form-item'}>Sign in</Button>
          </>
        )}


      </FormValidation>
    );
  }
}

//      <form onSubmit={this.handleSubmit} className={'login-form'}>
//        <Image src={'images/logo.svg'}/>
//        <Input
//          type={'email'} name={'login'} placeholder={'Login'} className={'form-item'}
//          value={this.state.login} onChange={this.handleChange}
//        />
//        <Input
//          type={'password'} name={'password'} placeholder={'Password'} className={'form-item'}
//          value={this.state.password} onChange={this.handleChange}
//        />
//        <Button primary type={'submit'} className={'form-item'}>Sign in</Button>
//      </form>
const mapStateToProps = (state) => ({
  signInData: state.signInData,
});

const mapDispatchToProps = (dispatch) => ({
  userSignInSubmit: (login, password) => dispatch(userSignInSubmit(login, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
