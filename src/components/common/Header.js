//import libraries for making a registerComponent
import React from 'react';
import { Text, View } from 'react-native';

//View can make positioning easier

//make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    //This uses destructuring
    //it's also possible to do dot notation: styles.viewStyle
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
//viewStyle styles the View tag
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//make the component available to other parts of the app
//This component is a child component of the Root component
//AppRegistry is the top level, root component
export { Header };
