import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository/View';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    <AppStack.Screen name="Repository" component={Repository} />
  </AppStack.Navigator>
);

export default AppRoutes;
