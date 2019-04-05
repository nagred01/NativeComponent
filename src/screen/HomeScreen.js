
import React, {Component} from 'react';
import {View, StyleSheet, Platform, NativeModules, Dimensions,Text} from 'react-native';
import NativeText from '../component/NativeText'
import NativeTextBox from '../component/NativeTextBox'
import NativeImage from '../component/NativeImage'
import NativeDataList from '../component/NativeDataList'
import NativeHeader from '../component/NativeHeader';

import StyleConfig from '../assets/StyleConfig/index'
const { PlatformConstants } = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;
const {width,height} = Dimensions.get('window');
type Props = {};
export default class App extends Component<Props> {

    constructor(props){
        super(props);
        this.state={
            dataListItems: [
                {
                    acType: 'Checking',
                    items: [
                        {
                            name: 'Free Checking',
                            type: 'Current',
                            balance: '$2,341.39',
                            LBalance: '$2,341.39',
                            availableType: 'Available',
                            xType: 'x456-90',
                            iconType: 'star',
                            outStanding: ''
                        }
                    ]
                },
                {
                    acType: 'Saving',
                    items: [
                        {
                            name: 'Super Saving',
                            type: 'Current',
                            balance: '$3.27',
                            LBalance: '$781.63',
                            availableType: 'Available',
                            xType: 'x456-90',
                            outStanding: ''
                        }
                    ]
                },
                {
                    acType: 'Loan',
                    items: [
                        {
                            name: 'Home morgage',
                            type: '',
                            balance: '$183,399.01',
                            LBalance: '',
                            availableType: '',
                            xType: 'x456-02',
                            outStanding: 'Outstanding Balance'
                        },
                        {
                            name: '2015 Tesla Loan',
                            type: '',
                            balance: '$2,466.34',
                            LBalance: '',
                            availableType: '',
                            xType: 'x456-48',
                            outStanding: 'Outstanding Balance'
                        }
                    ]
                },
                {
                    acType:'Test',
                    items:[]
                }
            ]
        }

    }
    componentDidMount(){
        console.log('NativeModules',deviceType, JSON.stringify(Platform))
        console.log('NativeModules 2', JSON.stringify(PlatformConstants))

            console.log('12',StyleConfig.countFontSize(12))

        console.log({height , width, hybrid:Math.sqrt(height * height + width * width)})
    }
    render() {
        return (
            <View style={styles.container}>
                <NativeHeader headerText={'Header'}/>
                <View style={styles.content}>
                <NativeText  value={'this is native text'} />
                <NativeTextBox
                    placeholder={"Enter your Password"}
                    textContentType="password"
                    secureTextEntry={true}>
                </NativeTextBox>


                <NativeImage
                    imageUrl={'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'}
                    imageAlt={'https://images.pexels.com/photos/532168/pexels-photo-532168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                />
                <View style={styles.viewStyle} >
                    <Text style={styles.textStyle}>Hiren</Text>
                </View>
                <View style={styles.viewStyle1} >
                    <Text style={styles.textStyle}>Hiren</Text>
                </View>
                <View style={styles.viewStyle2} >
                    <Text style={styles.textStyle}>Hiren</Text>
                </View>
                <NativeDataList
                    itemsSource={this.state.dataListItems}
                    onClick={(item) => alert(JSON.stringify(item))}
                />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    content:{
      flex:1,
      marginHorizontal: 16
    },
    viewStyle:{
        height: 100,
        width: 200,
        backgroundColor: 'red',
        alignItems:'center',
        justifyContent: 'center'
    },
    viewStyle1:{
        height: StyleConfig.countPixelRatio(100),
        width: StyleConfig.countPixelRatio(200),
        backgroundColor: 'green',
        alignItems:'center',
        justifyContent: 'center'
    },

    viewStyle2:{
        height: StyleConfig.countFontSize(100),
        width: StyleConfig.countFontSize(200),
        backgroundColor: 'blue',
        alignItems:'center',
        justifyContent: 'center'
    },
    textStyle:{fontSize: StyleConfig.countFontSize(15), color:'white'}

});
