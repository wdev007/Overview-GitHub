import React from 'react';
import Stack from './routes';
import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider} from './contexts/auth';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
