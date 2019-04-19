import * as React from "react";
import NativeField from "../Interfaces/NativeField";
import {Text, StyleSheet, Modal,ScrollView, View, TouchableOpacity, Image} from 'react-native';
import ReactNative from 'react-native';
import AppImages from '../assets/icons';
import StyleConfig from '../assets/StyleConfig/index'

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
        const {selectedItem} =this.props
        return (
            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        borderColor: 'ddd',
                        borderWidth: 0.5,
                        padding: 8,
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
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalOpen}

                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ justifyContent:'center',  height: StyleConfig.height,backgroundColor: 'rgba(0,0,0,0)'}}>
                        <ScrollView style={{
                            height: StyleConfig.height-StyleConfig.countFontSize(320),
                            backgroundColor:'white',
                            borderWidth:1,
                            borderColor:'#ccc',
                            marginVertical: StyleConfig.countFontSize(160), marginHorizontal: StyleConfig.countFontSize(24),}}>
                            <View style={{backgroundColor: 'white', }}>
                                {this.props.itemsSource.map((item, ind) => {
                                        return (
                                            <TouchableOpacity
                                                style={[styles.itemParent, {backgroundColor:selectedItem==item ? 'lightblue':'white'}]}
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
      paddingVertical: StyleConfig.countFontSize(8),
      paddingHorizontal: StyleConfig.countFontSize(12),
      borderBottomWidth:0.5,
        borderColor: '#aaa'
    },
    labelText: {
        fontSize: StyleConfig.countFontSize(24),
        color: 'black',
        fontWeight: 'bold',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
    },
    titleText: {
        fontSize: StyleConfig.countFontSize(18),
        color: 'black',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
    },
    subTitleText: {
        fontSize: StyleConfig.countFontSize(18),
        color: 'darkgray',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
    },
    primaryText: {
        fontSize: StyleConfig.countFontSize(15),
        color: '#87cefa',
        fontWeight: 'normal',
        padding: StyleConfig.countFontSize(12)
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
    },
    secondaryText: {
        fontSize: StyleConfig.countFontSize(12),
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
    }
})

