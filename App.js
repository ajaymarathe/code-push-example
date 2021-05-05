import React, {Component} from 'react';
import {View, Text} from 'react-native';

//code push
import CodePush from 'react-native-code-push';

const CODE_PUSH_OPTIONS = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    CodePush.sync(
      {installMode: CodePush.InstallMode.IMMEDIATE},
      this.syncWithCodePush,
      null,
    );
  }

  syncWithCodePush = status => {
    console.log(status);
  };

  render() {
    return (
      <View>
        <Text> React-Native App </Text>
        <Text> Code Push Example -4 </Text>
      </View>
    );
  }
}

export default CodePush(CODE_PUSH_OPTIONS)(App);
