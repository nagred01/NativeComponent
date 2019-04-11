import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import NativeHeader from '../component/NativeHeader';
import NativeList from '../component/NativeList';
import { Actions } from 'react-native-router-flux' ;
import StyleConfig from "../assets/StyleConfig";
const LIST_DATA = require('../helper/ListDataJson');
export default class ListDataScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataListItems:LIST_DATA
        }

    }
    render(){
        return(
            <View style={{flex:1, backgroundColor:'white', justifyContent:'center'}}>
                <NativeHeader showBack onBackPress={()=> Actions.pop()}  headerText={'List Data'}/>
                <NativeList
                    itemsSource={this.state.dataListItems}
                    onClick={(item) => alert(JSON.stringify(item))}
                />
            </View>

        )
    }

}
