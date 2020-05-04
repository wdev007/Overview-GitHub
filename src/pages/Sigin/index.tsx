import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const SigIn = () => {
  const {signIn} = useContext(AuthContext);
  const [username, setUsername] = useState('');

  const handleSigin = async () => {
    signIn(username);
  };

  return (
    <View style={styles.container}>
      <Text>SigIn</Text>
      <TextInput
        placeholder="Username"
        onChangeText={setUsername}
        defaultValue={username}
      />
      <Button title="Sigin" onPress={handleSigin} />
    </View>
  );
};

export default SigIn;
