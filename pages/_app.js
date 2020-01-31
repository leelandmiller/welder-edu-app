/*global FB*/
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { lightTheme } from '../src/theme';
import Navbar from '../src/components/Navbar';

import '../src/stylesheets/main.scss';

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    // Load facebook SDK
    // window.fbAsyncInit = function () {
    //   FB.init({
    //     appId: '527762481420216',
    //     cookie: true,
    //     xfbml: true,
    //     version: 'v5.0'
    //   });

    //   FB.AppEvents.logPageView();

    // }

    // (function (d, s, id) {
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) { return; }
    //   js = d.createElement(s); js.id = id;
    //   js.src = "https://connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'))
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme={lightTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Navbar />
          <div className="main-wrapper">
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}