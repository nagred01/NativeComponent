import React, {Component} from 'react';
import {View, Text} from 'react-native';
import NativeHeader from '../component/NativeHeader';
import NativeListWithGesture from '../component/NativeListWithGesture';
import NativeDataList2 from '../component/NativeDataList2';
const LIST_DATA = require('../helper/ListDataJson2');
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
                {/*<NativeListWithGesture*/}
                    {/*navigation={this.props.navigation}*/}
                    {/*itemsSource={this.state.dataListItems}*/}
                {/*/>*/}

                <NativeDataList2
                    navigation={this.props.navigation}
                    itemsSource={this.state.dataListItems}
                    groupsSource={[{
                        groupKey:'typeId'}
                      ]}
                    itemKey={(index) =>  index }
                    onClick={(index)=> { alert('PRESS')}}
                    itemId={"id"}
                    groupId={'typeId'}
                    groupKey={'typeId'}
                    groupText={"typeId"}

                />

            </View>

        )
    }

}
