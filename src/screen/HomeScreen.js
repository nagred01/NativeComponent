import React, {Component} from 'react';
import {View, StyleSheet, Platform, NativeModules, Dimensions, Text, ScrollView,PixelRatio} from 'react-native';
import NativeText from '../component/NativeText'
import NativeTextBox from '../component/NativeTextBox'
import NativeImage from '../component/NativeImage'
import NativeDataList from '../component/NativeDataList'
import NativeHeader from '../component/NativeHeader';

import StyleConfig from '../assets/StyleConfig/index'

const {PlatformConstants} = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;
const {width, height} = Dimensions.get('window');
type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
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
                    acType: 'Test',
                    items: []
                }
            ]
        }

    }

    componentDidMount() {
        console.log('NativeModules', deviceType, JSON.stringify(Platform))
        console.log('NativeModules 2', JSON.stringify(PlatformConstants))
        console.log('PixelRatio=',JSON.stringify(PixelRatio))

        console.log('12', StyleConfig.countFontSize(12))

        console.log({height, width, hybrid: Math.sqrt(height * height + width * width)})
        //Math.sqrt(height * height + width * width)
    }

    render() {
        return (
            <View style={styles.container}>
                <NativeHeader headerText={'Header'}/>
                <ScrollView style={styles.content}>
                    <NativeText value={'this is native text'}/>
                    <NativeTextBox
                        placeholder={"Enter your Password"}
                        textContentType="password"
                        secureTextEntry={true}>
                    </NativeTextBox>


                    <NativeImage
                        imageUrl={'https://images.all-free-download.com/images/graphiclarge/sunrise_515561.jpg'}
                        imageAlt={'https://images.pexels.com/photos/532168/pexels-photo-532168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                    />
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>viewStyle</Text>
                    </View>
                    <View style={styles.viewStyle1}>
                        <Text style={styles.textStyle}>viewStyle1</Text>
                    </View>
                    <View style={styles.viewStyle2}>
                        <Text style={styles.textStyle}>viewStyle2</Text>
                    </View>
                    <View style={styles.viewStyle3}>
                        <Text style={styles.textStyle}>viewStyle3</Text>
                    </View>

                    <NativeDataList
                        itemsSource={this.state.dataListItems}
                        onClick={(item) => alert(JSON.stringify(item))}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    content: {
        flex: 1,
        marginHorizontal: StyleConfig.countFontSize(16)
    },
    viewStyle: {
        height: 100,
        width: 200,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewStyle1: {
        height: StyleConfig.countPixelRatio(100),
        width: StyleConfig.countPixelRatio(200),
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewStyle2: {
        height: StyleConfig.countFontSize(100),
        width: StyleConfig.countFontSize(200),
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewStyle3: {
        // https://github.com/DaniAkash/react-native-responsive-dimensions
        // https://medium.com/building-with-react-native/how-to-develop-responsive-uis-with-react-native-1x03-a448097c9503
        height: StyleConfig.responsiveHeight(20),
        width: StyleConfig.responsiveWidth(40),
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textStyle: {fontSize: StyleConfig.countFontSize(20), color: 'white'}

});
