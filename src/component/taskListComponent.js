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
  TextInput
} from "react-native";
import { connect } from "react-redux";


class FlatListItem extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Text
          style={{
            backgroundColor: this.props.index % 2 == 0 ? "pink" : "tomato"
          }}
        >
          {}
        </Text>
      </View>
    );
  }
}

class TaskListComponent extends Component {
  render() {
    return (
      console.log(this.props.taskName),
      (
        <FlatList
          data={this.props.taskName}
          renderItem={({ item, index }) => {
            return <FlatListItem {...item} />;
          }}
          keyExtractor={({ item, index }) => item.taskName}
        />
      )
    );
  }
}
mapStatetoProps = state => {
  return {
    taskName: !state.taskReducers ? [] : state.taskReducers
  };
};
export default connect(mapStatetoProps)(TaskListComponent);
