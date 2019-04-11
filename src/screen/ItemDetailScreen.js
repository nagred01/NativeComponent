import React, {Component} from 'react';
import {View} from 'react-native';
import NativeItemDetail from '../component/NativeItemDetail';
import { Actions } from 'react-native-router-flux' ;
import NativeHeader from "../component/NativeHeader";
export default class ItemDetailScreen extends Component{

    render(){
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <NativeHeader showBack onBackPress={()=> Actions.pop()}  headerText={this.props.item.name}/>
                <NativeItemDetail itemDetail={this.props.item} />
            </View>
        )
    }

}
