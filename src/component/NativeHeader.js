import * as React from "react";
import { View, Text, StyleSheet, Platform} from 'react-native';
import NativeControl from "../Interfaces/NativeControl";

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
        height: Platform.OS === 'android' ? 76 :100 ,
        marginTop:0,
        ...Platform.select({
            ios:{
                backgroundColor: '#f44',
                paddingTop: 24,
            },
           android: {
                backgroundColor:'#44f'
           },
        }),
        justifyContent:'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 24,
        color:'#fff'
    }
})
