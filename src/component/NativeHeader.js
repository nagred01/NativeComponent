import * as React from "react";
import {View, Text, StyleSheet, Platform, Dimensions} from 'react-native';
import NativeControl from "../Interfaces/NativeControl";
import StyleConfig from '../assets/StyleConfig/index'
const {height} = Dimensions.get('window');
const iPhoneX = (Platform.OS === 'ios' && height === 812) || (Platform.OS === 'ios' && height === 896);
// 812 for iphoneX, iPhoneXS,
// 896 for iPhoneXR,iphoneXS Max
export default class NativeHeader extends React.Component {
    render(){
        return(
            <View style={styles.header}>
                <Text style={styles.text}>i am Header</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        height:StyleConfig.countFontSize( Platform.OS === 'android' ? 76 : iPhoneX ? 80 : 72 ),
        marginTop:0,
        ...Platform.select({
            ios:{
                backgroundColor: '#f44',
                paddingTop: StyleConfig.countFontSize(24),
            },
           android: {
                backgroundColor:'#44f'
           },
        }),
        justifyContent:'center',
        alignItems: 'center'
    },
    text:{
        fontSize: StyleConfig.countFontSize(24),
        color:'#fff'
    }
})
