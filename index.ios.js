import React from 'react';
import { AppRegistry, Text } from 'react-native';

const App = () => (
   <Text>Some Text for Testing this application in react-native</Text>
);

AppRegistry.registerComponent('albums', () => App);
