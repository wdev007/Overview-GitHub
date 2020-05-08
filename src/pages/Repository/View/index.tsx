import React from 'react';
import {View, Text} from 'react-native';

const ViewRepository = ({
  route: {
    params: {id},
  },
}) => {
  return (
    <View>
      <Text>Aqui vai ser os detalhes do repositorio, o id -> {id}</Text>
    </View>
  );
};

export default ViewRepository;
