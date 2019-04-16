import React, {Component} from 'react';
import {View} from 'react-native';
import NativeItemDetail from '../component/NativeItemDetail';
import NativeHeader from "../component/NativeHeader";
export default class ItemDetailScreen extends Component{
    render(){
        const { item } = this.props.navigation.state.params ;
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <NativeHeader showBack onBackPress={()=>{this.props.navigation.navigate('ListData')}}  headerText={item.name}/>
                <NativeItemDetail itemDetail={item} />
            </View>
        )
    }
}
