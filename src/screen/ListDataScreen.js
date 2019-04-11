import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import NativeText from '../component/NativeText';
import { Actions } from 'react-native-router-flux' ;
import StyleConfig from "../assets/StyleConfig";
export default class ListDataScreen extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center'}}>
                <TouchableOpacity style={{backgroundColor:'grey', padding:StyleConfig.countFontSize(8)}}
                                  onPress={()=> Actions.push('item_detail')}>
                    <Text >DataList Screen</Text>
                </TouchableOpacity>

            </View>

        )
    }

}
