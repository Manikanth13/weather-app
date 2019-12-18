import React, { PureComponent, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { connect } from 'react-redux';
import ACTIONS from './action';
import { Typography } from '@material-ui/core';

export class App extends PureComponent {
    componentDidMount() {
      // can have a select box to set city
      this.props.fetchData && this.props.fetchData('Munich,de', 40);
    };

    render() {
      const {isLoading} = this.props;
        return (
            <div className="App">
                {isLoading ? (
                  <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh', padding: 100 }}>Loading...</Typography>
                ) : (
                  <Fragment>
                      <Header />
                      <HomePage />
                  </Fragment>
                )}
            </div>
        );
    }
};

const mapStateToProps = state => ({
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchData: (city, count) => dispatch(ACTIONS.fetchData(city, count))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);