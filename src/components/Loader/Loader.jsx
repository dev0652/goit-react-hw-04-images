import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader = props => (
  <ContentLoader
    speed={2}
    // width={400}
    height={260}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="16" y="5" rx="2" ry="2" height="165" />
  </ContentLoader>
);

// export default Loader;
