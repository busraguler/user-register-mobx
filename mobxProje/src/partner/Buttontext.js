import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Buttontext extends Component {

  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        onPress={this.props.onPress}
        style={[
          this.props.style,
          {


          }
        ]}
          >
        <Text
        style={[
          this.props.textStyle,
          {
            flex: 0,
            textShadowColor: '#fa6496',
            letterSpacing: -1,
            borderRadius: 2,
            textAlign: 'center',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            textShadowOffset: { width: 0, height: 1 },
            textShadowRadius: 1,
            elevation: 7,
            fontWeight: '300',
          }
        ]}
        > {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export { Buttontext };
