import * as React from "react";
import NativeField from "../Interfaces/NativeField";
import {Text, StyleSheet, Modal,ScrollView, View, TouchableOpacity, Image} from 'react-native';
import ReactNative from 'react-native';
import AppImages from '../assets/icons';
import StyleConfig from '../assets/StyleConfig/index'
const itemHeight=StyleConfig.countFontSize(60) ;
export interface DropdownProps extends NativeField {
    itemsSource: Array<any>,
    onSelectItem: (item) => void,
    selectedItem: object,
    promptText: string
}

interface TextState {
    modalOpen: boolean
}

export default class NativeText extends React.PureComponent<DropdownProps, TextState> {

    constructor(props: Readonly<DropdownProps>) {
        super(props);
        this.state = {modalOpen: false};
    }

    private onPress = (): void => {
        this.setState({changed: true});
    };

    render(): React.ReactNode {
        const {selectedItem, itemsSource} =this.props ;

        let modelHeight = itemHeight * (itemsSource.length > 8 ? 8 : itemsSource.length+1)

        return (
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        borderColor: 'ddd',
                        borderWidth: 0.5,
                        padding: StyleConfig.countFontSize(8),
                        marginVertical: StyleConfig.countFontSize(4),
                        alignItems: 'center'
                    }}
                    onPress={() => {
                        this.setState({modalOpen: true})
                    }}>
                    {selectedItem ?
                        <View style={{flex:1}}>
                            <Text style={styles.titleText}>{`${selectedItem.name} : ${selectedItem.xType}`}</Text>
                            <Text style={styles.subTitleText}>{`Available : ${selectedItem.balance}`}</Text>
                        </View>
                        :
                        <Text style={{flex: 1}}>{this.props.promptText}</Text>}
                    <Image
                        style={{height: 24, width: 24}}
                        source={AppImages.ic_dropdown}
                    />
                </TouchableOpacity>
                <View style={{marginTop: 22}}>
                    <Modal
                        animationType="none" //slide  fade  none
                        transparent={true}
                        visible={this.state.modalOpen}
                        >
                        <View style={{ justifyContent:'center',
                            paddingVertical: (StyleConfig.height-modelHeight)/2,
                            backgroundColor: 'rgba(0,0,0,0.25)'}}>
                        <ScrollView style={{
                            height: modelHeight,
                            backgroundColor:'white',
                            borderWidth:1,
                            borderRadius:StyleConfig.countFontSize(8),
                            borderColor:'#ccc',
                            marginHorizontal: StyleConfig.countFontSize(24),
                        }}>
                            <View style={{backgroundColor: 'white', }}>
                                {itemsSource.map((item, ind) => {
                                    let isSelected = JSON.stringify(selectedItem)==JSON.stringify(item)
                                    let isLastItem = itemsSource.length === ind+1
                                        return (
                                            <TouchableOpacity
                                                style={[styles.itemParent, {backgroundColor:isSelected ? 'lightblue':'white', borderBottomWidth:isLastItem? 0 : 1}]}
                                                onPress={() => {
                                                    this.props.onSelectItem(item)
                                                    this.setState({modalOpen: false})
                                                }}>
                                                <Text style={styles.titleText}>{`${item.name} : ${item.xType}`}</Text>
                                                <Text style={styles.subTitleText}>{`Available : ${item.balance}`}</Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                )}
                                </View>
                        </ScrollView>
                        </View>

                    </Modal>


                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemParent:{
      height:itemHeight,
      paddingVertical: StyleConfig.countFontSize(8),
      paddingHorizontal: StyleConfig.countFontSize(12),
      borderColor: '#aaa'
    },
    titleText: {
        fontSize: StyleConfig.countFontSize(18),
        color: '#222'
    },
    subTitleText: {
        fontSize: StyleConfig.countFontSize(18),
        color: '#333'
    }
})

