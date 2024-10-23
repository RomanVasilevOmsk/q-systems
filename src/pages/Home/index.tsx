import React from 'react';
import { HomeContextProvider } from './context';

const Content = React.lazy(() => import('./content'));

const Home = () => {
  return (
    <HomeContextProvider>
      <Content />
    </HomeContextProvider>
  );
};

export default Home;
