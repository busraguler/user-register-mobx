import React, { Component } from 'react';
import { TextInput } from 'react-native';


class Input extends Component {
  render() {
    return (
      <TextInput
        secureTextEntry={this.props.secureTextEntry}
        placeholder={this.props.placeholder}
        keyboardType={this.props.keyboardType}
        value={this.props.value}
        onChangeText={this.props.onChangeText}
        style={[
          this.props.style,
          {

          }
        ]}


      />
    );
  }

}

export { Input };
