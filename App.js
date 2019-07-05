import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AddComponent from "./src/component/AddComponent";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./src/redux/reducers/index";
import TaskManagerComponent from "./src/component/taskManagerComponent";

let store = createStore(allReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <TaskManagerComponent />
<<<<<<< Updated upstream
          ///met sadssssss
=======
          ///met sadssssssssssssssssssssssssssssssssssssssssssssssss
>>>>>>> Stashed changes
        </View>
      </Provider>
    
    );
  }
}