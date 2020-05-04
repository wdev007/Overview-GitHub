import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import AuthContext from '../../contexts/auth';

const Home = () => {
  const {signOut} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="logout" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F9',
  },
});

export default Home;
