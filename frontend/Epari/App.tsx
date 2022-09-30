import React from 'react';
import MainNav from './src/navigation/MainNavigator';
import {RecoilRoot} from 'recoil';
import {QueryClientProvider} from '@tanstack/react-query';
import {getClient} from './src/queryClient';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '126188289267-4ii18qf3etih6ht49beh3ijfopfq6i6m.apps.googleusercontent.com',
});

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
