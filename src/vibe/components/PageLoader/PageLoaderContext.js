import React, { Component } from 'react';

const PageLoaderContext = React.createContext();

export class PageLoaderProvider extends Component {
  state = {
    percent: 0
  };

  loadPage = () => {
    this.setState({ percent: 1 });
    setTimeout(() => {
      this.setState({ percent: 5 });
    }, 500);
    setTimeout(() => {
      this.setState({ percent: 10 });
    }, 1000);
    setTimeout(() => {
      this.setState({ percent: 12 });
    }, 1500);
    setTimeout(() => {
      this.setState({ percent: 20 });
    }, 2000);
    setTimeout(() => {
      this.setState({ percent: 100 });
    }, 2400);
  };

  render() {
    return (
      <PageLoaderContext.Provider
        value={{
          percent: this.state.percent,
          setPercent: percent => this.setState({ percent }),
          loadPage: this.loadPage
        }}>
        {this.props.children}
      </PageLoaderContext.Provider>
    );
  }
}

export default PageLoaderContext;
