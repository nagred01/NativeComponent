import React, {Component} from 'react';
import {View} from 'react-native';
import NativeText from '../component/NativeText';
import { Actions } from 'react-native-router-flux' ;
export default class ItemDetailScreen extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center'}}>
                <NativeText value={'ItemDetailScreen'}/>
            </View>

        )
    }

}
