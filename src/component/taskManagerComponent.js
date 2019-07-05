import React,{Component} from 'react'
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
import AddContainers from '../containers/AddContainers';
import TaskListContainers from '../containers/taskListContainers'
import AddComponent from './AddComponent';
import TaskListComponent from './taskListComponent';
  export default class TaskManagerComponent extends Component{
      render() {
        return(
            <View>
                <AddComponent/>
                <TaskListComponent/>
            </View>
        );
      }
  }