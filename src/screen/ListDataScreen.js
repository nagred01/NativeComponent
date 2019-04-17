import React, {Component} from 'react';
import {View} from 'react-native';
import NativeHeader from '../component/NativeHeader';
import NativeListWithGesture from '../component/NativeListWithGesture';
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
                <NativeHeader showBack onBackPress={()=> {this.props.navigation.navigate('Home')}}  headerText={'List Data'}/>
                <NativeListWithGesture
                    navigation={this.props.navigation}
                    itemsSource={this.state.dataListItems}
                />

            </View>

        )
    }

}
