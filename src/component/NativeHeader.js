import * as React from "react";
import { View, Text, StyleSheet, Platform} from 'react-native';
import NativeControl from "../Interfaces/NativeControl";
import StyleConfig from '../assets/StyleConfig/index'
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
        height:StyleConfig.countFontSize( Platform.OS === 'android' ? 76 : StyleConfig.iPhoneX ? 80 : 72 ),
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
