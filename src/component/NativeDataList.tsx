import * as React from 'react';
import { TouchableOpacity, Text, View, FlatList, StyleSheet } from 'react-native';
import NativeControl from "../Interfaces/NativeControl";
import StyleConfig from '../assets/StyleConfig/index';

interface DataListProps extends NativeControl {
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
    itemStyle:{},
    subItemStyle:{},
    titleText:{},
    titleBlackText:{},
    detailText:{}
}
export default class NativeDataList extends React.Component<DataListProps> {
    constructor(props) {
        super(props)
        let data = [];
        for (let ind in props.itemsSource) {
            let obj = props.itemsSource[ind]
            obj['expanded'] = obj.hasOwnProperty('items')
            data.push(obj)
        }
        this.state = {
            data
        }
    }

    handleClick = (item): void => {
        if (this.props.onClick)
            this.props.onClick(item);
    }
    _onExpand = (item, ind) => {
        if (item.hasOwnProperty('items')) {
            let { data } = this.state
            data[ind]['expanded'] = !data[ind]['expanded']
            this.setState({ data })
        }
    }
    render() {
        const {itemParent, subItemParent, titleThemeText, titleBlackText, detailText } = styles
        return (
            <FlatList
                data={this.state.data}
                extraData={this.state}
                style={{flex:1}}
                renderItem={({ item, index }) => (
                    <View>
                        <TouchableOpacity
                            onPress={() => this._onExpand(item, index)}
                            style={itemParent} key={index}>
                            <Text style={{ fontSize: 16 }}>{item.acType}</Text>
                        </TouchableOpacity>
                        {item.expanded === true && item.hasOwnProperty('items') && item.items.map((subItem, subIndex) => (
                            <TouchableOpacity key={subIndex+subIndex} onPress={() => this.handleClick(subItem)}
                                              style={subItemParent} key={subIndex + '' + subIndex}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={titleThemeText}>{subItem.name}</Text>
                                    <View style={{ flex: 1 }} />
                                    <Text style={titleBlackText}>{subItem.balance}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop:2 }}>
                                    <Text style={detailText}>{subItem.xType}</Text>
                                    <View style={{ flex: 1 }} />
                                    <Text style={detailText}>{subItem.availableType === ''? subItem.outStanding : subItem.availableType+' Balance'}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

            />

        );
    }
}

const styles = StyleSheet.create({
    itemParent:{ backgroundColor: '#E8E8E8', padding: 8 },
    subItemParent:{
        padding:  12,
        backgroundColor: 'white',
        borderColor:'#ccc',
        borderBottomWidth: 1
    },
    titleThemeText:{
        fontSize: StyleConfig.countFontSize(20),
        color: '#4B759B'
    },
    titleBlackText:{
        fontSize: StyleConfig.countFontSize(20),
        color:'black'
    },
    detailText:{
        fontSize: StyleConfig.countFontSize(15),
        color:'black'
    }
});
