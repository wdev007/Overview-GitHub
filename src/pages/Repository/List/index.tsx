import React, {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';

import {Repository} from '../../../models';

interface IProps {
  repositories: Repository[];
  handlePress(id: number): void;
  loadData(page: number): void;
}

const ListRepositories = ({repositories, handlePress, loadData}: IProps) => {
  const [page, setPage] = useState(1);

  const renderItem = ({item: repository}: any) => (
    <TouchableOpacity onPress={() => handlePress(repository.id)}>
      <ListItem
        title={repository.name}
        subtitle={repository.description}
        activeOpacity={1}
        bottomDivider
        badge={{
          value: repository.forks,
          badgeStyle: {
            backgroundColor: '#393449',
          },
          textStyle: {color: '#fff'},
          containerStyle: {marginTop: -20},
        }}
      />
    </TouchableOpacity>
  );

  const loadMore = () => {
    setPage(page + 1);
    loadData(page);
  };

  return (
    <FlatList
      data={repositories}
      onEndReachedThreshold={0.1}
      onEndReached={loadMore}
      keyExtractor={(repository) => repository.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default ListRepositories;
