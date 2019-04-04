
import React, {Component} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import NativeText from '../component/NativeText'
import NativeTextBox from '../component/NativeTextBox'
import NativeImage from '../component/NativeImage'
import NativeDataList from '../component/NativeDataList'

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
    render() {
        return (
            <View style={styles.container}>

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

                <NativeDataList
                    itemsSource={this.state.dataListItems}
                    onClick={(item) => alert(JSON.stringify(item))}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 24 : 0,
        backgroundColor: 'white',
        justifyContent:'center',

        paddingHorizontal: 16
    },

});
