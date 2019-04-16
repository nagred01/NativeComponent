import React, {Component} from 'react';
import {View} from 'react-native';
import NativeHeader from '../component/NativeHeader';
import NativeList from '../component/NativeList';
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
                <NativeList
                    navigation={this.props.navigation}
                    itemsSource={this.state.dataListItems}
                />
            </View>

        )
    }

}
