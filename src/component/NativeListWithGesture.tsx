import * as React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import NativeControl from "../Interfaces/NativeControl";
import NativeItemDetail from './NativeItemDetail';
import Animated from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import StyleConfig from '../assets/StyleConfig/index';
const { width, height } = Dimensions.get("window");
const { cond, eq, add, set, Value, event, interpolate, Extrapolate } = Animated;
interface ListProps extends NativeControl {
    groupKey: string,
    itemKey: any,
    onClick: (e: any) => void,
    actionLinks: any,
    itemsSource: Array<any>,
    groupsSource?: Array<any>;
    groupId: string,
    groupText: string,
    expandable: boolean,
    noDataText: string,
    emptyListClassName: string,
}

export default class NativeList extends React.Component<ListProps> {
    constructor(props) {
        super(props)
        let data = [];
        for (let ind in props.itemsSource) {
            let obj = props.itemsSource[ind]
            obj['expanded'] = obj.hasOwnProperty('items')
            data.push(obj)
        }
        this.state = {
            data,
            selectedItem:null
        }
    }

    handleClick = (item) => {
        let {selectedItem} = this.state ;
        if(selectedItem === item){
            this.setState({selectedItem:null})
        }else{
            this.setState({selectedItem:item})
        }

        // if(StyleConfig.isTab){
        //     this.setState({selectedItem:item})
        // } else {
        //     this.props.navigation.navigate('ItemDetail',{item} )
        // }
    }

    _onExpand = (item, ind) => {
        if (item.hasOwnProperty('items')) {
            let {data} = this.state
            data[ind]['expanded'] = !data[ind]['expanded']
            this.setState({data})
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {StyleConfig.isTab ? this.renderTabView() : this.renderList()}
            </View>
        );
    }

    renderList = () => {
        const {itemParent, subItemParent, titleThemeText, titleBlackText, detailText} = styles;
        let { data, selectedItem } = this.state ;
        return (
            <FlatList
                data={data}
                extraData={this.state}
                style={{flex: 1}}
                renderItem={({item, index}) => (
                    <View>
                        <TouchableOpacity
                            onPress={() => this._onExpand(item, index)}
                            style={itemParent} key={index}>
                            <Text style={{fontSize: StyleConfig.countFontSize(16)}}>{item.acType}</Text>
                        </TouchableOpacity>
                        {item.expanded === true && item.hasOwnProperty('items') && item.items.map((subItem, subIndex) => (
                            <TouchableOpacity key={subIndex+''+ subIndex} onPress={() => this.handleClick(subItem)}
                                              style={[subItemParent,{backgroundColor: subItem === selectedItem && StyleConfig.isTab ? '#dcdcfc' : '#fff' }]} key={subIndex + '' + subIndex}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={titleThemeText}>{subItem.name}</Text>
                                    <View style={{flex: 1}}/>
                                    <Text style={titleBlackText}>{subItem.balance}</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 2}}>
                                    <Text style={detailText}>{subItem.xType}</Text>
                                    <View style={{flex: 1}}/>
                                    <Text
                                        style={detailText}>{subItem.availableType === '' ? subItem.outStanding : subItem.availableType + ' Balance'}</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 4}}>

                                {StyleConfig.isPhone && subItem === selectedItem && <NativeItemDetail itemDetail={this.state.selectedItem} />}
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

            />
        )
    }

    renderTabView = () => {
        const DEFAULT_WIDTH = StyleConfig.responsiveWidth(25);
        let listWidth = this.state.selectedItem == null ?  StyleConfig.responsiveWidth(100) :  this.transX
        return (<View style={{flex: 1, flexDirection: 'row'}}>
            <PanGestureHandler
                maxPointers={1}
                onGestureEvent={this.onGestureEvent}
                onHandlerStateChange={this.onGestureEvent}
            >
                <Animated.View
                    style={{
                        width: listWidth,
                        borderRightWidth:1,
                        borderColor:'#ddd'
                    }}
                >
                    {this.renderList()}
                </Animated.View>

            </PanGestureHandler>
            <Animated.View style={{flex:1}}>
                <NativeItemDetail itemDetail={this.state.selectedItem} />
            </Animated.View>
        </View>)

    }


    dragX = new Value(0);
    offsetX = new Value(width / 2);
    gestureState = new Value(-1);
    onGestureEvent = event([
        {
            nativeEvent: {
                translationX: this.dragX,
                translationY: 0,
                state: this.gestureState,
            },
        },
    ]);
    transX = cond(
        eq(this.gestureState, State.ACTIVE),
        add(this.offsetX, this.dragX),
        set(this.offsetX, add(this.offsetX, this.dragX)),
    );
    borderWidth = interpolate(this.transX, {
        inputRange: [0, width],
        outputRange: [0, 5],
        extrapolate: Extrapolate.CLAMP
    });

}

const styles = StyleSheet.create({
    itemParent: {backgroundColor: '#E8E8E8', padding: StyleConfig.countFontSize(8)},
    subItemParent: {
        padding: StyleConfig.countFontSize(12),
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderBottomWidth: 1
    },
    titleThemeText: {
        fontSize: StyleConfig.countFontSize(20),
        color: '#4B759B'
    },
    titleBlackText: {
        fontSize: StyleConfig.countFontSize(20),
        color: 'black'
    },
    detailText: {
        fontSize: StyleConfig.countFontSize(15),
        color: 'black'
    },

});
