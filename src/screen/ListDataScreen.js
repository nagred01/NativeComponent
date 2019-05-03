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
                    groupsSource={[{"acType": "Checking",
                        "groupId":1,
                        "groupKey":0},
                        { "acType": "Checking",
                        "groupId":2,
                        "groupKey":1},
                        { "acType": "Checking 2",
                        "groupId":3,
                        "groupKey":1}]}
                    itemKey={(index) =>  index }
                    onClick={(index)=> { alert('PRESS')}}
                    itemId={"id"}
                    groupId={'groupId'}
                    groupKey={'groupKey'}
                    groupText={"acType"}
                    children={(subItem)=>{
                        console.log({subItem})
                        return(
                            <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{
                                    fontSize: 20,
                                    color: '#4B759B'
                                }}>{subItem.name}</Text>
                                <View style={{ flex: 1 }} />
                                <Text style={{
                                    fontSize: 20,
                                    color: 'black'
                                }}>{subItem.balance}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 2 }} >
                            <Text style={{
                                fontSize: 14,
                                color: 'black'
                                }}>{subItem.xType}</Text>
                            <View style={{ flex: 1 }} />
                            <Text style={{
                            fontSize: 14,
                            color: 'black'
                                }}>{subItem.availableType === ''
                            ? subItem.outStanding
                            : subItem.availableType + ' Balance'}</Text>
                        </View>
                            </View>

                   )
                    }}
                />

            </View>

        )
    }

}
