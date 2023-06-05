import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Menu = ({text, style}) => {
  return <Text style={[styles.menu, style]}>{text}</Text>;
};
Menu.defaultProps = {
  text: 'Meniu indisponibil',
};

export default React.memo(Menu);
