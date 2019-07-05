import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Platform,
  TouchableHighlight,
  RefreshControl,
  TextInput,TouchableOpacity
} from "react-native";
import {connect} from 'react-redux';
import {addNewTask} from '../redux/action';

 class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskName: ''
    };
  }
  render() {
    
    return (
      <View>
        <TextInput
          keyboardType='default'
          placeholderTextColor='white'
          placeholder='Enter task name'
          autoCapitalize='none'
          onChangeText={ (text) => {
            this.setState({ newTaskName: text });
          }}
        />

        <TouchableOpacity
          onPress={this.onClick}
        >
        <Image
            source={require("../../icon/home-page.png")}
            style={{ width: 26, height: 26  }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  onClick = () => {
    const {newTaskName} = this.state;
    console.log( this.props.addNewTask(newTaskName));
    this.props.addNewTask(newTaskName)
  }
}

const mapStateToProps = state => {
  return {
  }
}
const mapDispatToProps = dispatch => {
  return {
    addNewTask: (taskName) => dispatch(addNewTask(taskName))
  }
}
export default connect(mapStateToProps, mapDispatToProps)(AddComponent)