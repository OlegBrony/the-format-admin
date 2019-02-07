import React, { Component }                                 from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './reset.css';
import './index.css';
import { connect }                                          from 'react-redux';
import SignInForm                                           from './components/SignInForm';
import { userSignInSubmit }                                 from './redux/actions/signIn';
import { initJWTValidation }                                from './redux/actions/signIn';
import GalleryPage                                          from './pages/Gallery';
import CoursePage                                           from './pages/Course';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };
  }


  componentDidMount() {
    if (window.localStorage.getItem('userToken') !== '') {
      this.setState({
        isAuth: true,
      });
    }
  }


  render() {
    return (
      <Router>
        <>
          {
            this.state.isAuth ?
              <Route exact path={'/admin'} component={CoursePage}/> :
              <Route exact path={'/admin'} component={SignInForm}/>
          }
          <Route exact path={'/admin/gallery'} component={GalleryPage}/>
        </>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.signInData.isAuth,
});

const mapDispatchToProps = dispatch => ({
  initJWTValidation: () => dispatch(initJWTValidation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
