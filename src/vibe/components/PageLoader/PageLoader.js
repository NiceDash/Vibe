import React from 'react';
import PageLoaderContext from './PageLoaderContext';

const PageLoader = () => {
  return <PageLoaderContext.Consumer>{context => <Loader percent={context.percent} />}</PageLoaderContext.Consumer>;
};

const Loader = props => {
  const loading = props.percent && props.percent > 0;
  const loaderStyle = {
    width: `${props.percent}%`
  };

  const wrapStyle = {
    opacity: loading && props.percent < 100 ? '1' : '0'
  };

  return (
    <div className="PageLoaderWrap" style={wrapStyle}>
      <div className="PageLoader" style={loaderStyle} />
    </div>
  );
};

export default PageLoader;
