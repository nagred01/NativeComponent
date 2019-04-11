import React from 'react';
import { TouchableOpacity, Text, View, FlatList, StyleSheet } from 'react-native';
import NativeControl from "../Interfaces/NativeControl";
import StyleConfig from '../assets/StyleConfig/index';

interface ItemDetailProps extends NativeControl {
    onClick: (e: any) => void,
    itemDetail:{}
}
export default class NativeItemDetail extends React.Component<ItemDetailProps> {
    constructor(props) {
        super(props)

    }
    render() {
        const { titleText, detailText } = styles
        const {itemDetail} = this.props;
        let data = [];
        for( let ind in itemDetail){
            // data['title'] = ind ;
            // data['detail']=itemDetail[ind];
            data.push({"title":ind, "detail":itemDetail[ind]})
        }
        return (
           <View style={{flex:1}}>
               {data.map((item, index)=>{
                    return(
                        <View style={{flexDirection:'row'}}>
                            <Text style={titleText}>{item.title}</Text>
                            <Text style={detailText}>{item.detail}</Text>
                        </View>
                    )
               })}
           </View>


        );
    }
}

const styles = StyleSheet.create({
    itemParent:{ backgroundColor: '#E8E8E8', padding: StyleConfig.countFontSize(8) },
    subItemParent:{
        padding:  StyleConfig.countFontSize(12),
        backgroundColor: 'white',
        borderColor:'#ccc',
        borderBottomWidth: 1
    },
    titleText:{
        fontSize: StyleConfig.countFontSize(20),
        color: '#222',
        fontWeight:'bold',
        flex:1,
        backgroundColor:'#eee',
        padding: StyleConfig.countFontSize(6),
        marginTop:StyleConfig.countFontSize(4),
        marginLeft:StyleConfig.countFontSize(4),
        marginRight:StyleConfig.countFontSize(2),
    },
    detailText:{
        fontSize: StyleConfig.countFontSize(20),
        color:'#333',
        flex:1,
        backgroundColor:'#eee',
        padding: StyleConfig.countFontSize(6),
        marginTop:StyleConfig.countFontSize(4),
        marginLeft:StyleConfig.countFontSize(2),
        marginRight:StyleConfig.countFontSize(4),
    },

});
