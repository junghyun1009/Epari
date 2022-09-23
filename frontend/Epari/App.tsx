import React from 'react';
import MainNav from './src/navigation/MainNavigator';
import {RecoilRoot} from 'recoil';
import {QueryClientProvider} from '@tanstack/react-query';
import {getClient} from './src/queryClient';

const App = () => {
  const queryClient = getClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <MainNav />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
