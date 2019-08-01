import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {
  return (
    <View style={styles.subContainerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  subContainerStyle: {
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row', //componentleri alt alta sıralar colom yanyana
    borderColor: '#ddd',
    position: 'relative',
    flexWrap: 'wrap'
  }
};

export { CardSection };
