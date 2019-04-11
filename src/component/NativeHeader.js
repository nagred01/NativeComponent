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
        const {showBack, headerText, onBackPress} = this.props
        return(
            <View style={styles.header}>
                {showBack && <Text onPress={onBackPress} style={styles.backText}>{'back'}</Text>}
                <Text style={styles.text}>{headerText}</Text>
                {showBack && <View style={styles.backText}></View>}
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
        alignItems: 'center',
        flexDirection:'row'
    },
    text:{
        flex:1,
        textAlign:'center',
        fontSize: StyleConfig.countFontSize(24),
        color:'#fff'
    },
    backText:{
        width:StyleConfig.responsiveWidth(15),
        fontSize: StyleConfig.countFontSize(16),
        color:'#fff',
        textAlign:'center',
    }
})
