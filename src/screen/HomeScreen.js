import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, ScrollView} from 'react-native';
import NativeText from '../component/NativeText'
import NativeTextBox from '../component/NativeTextBox'
import NativeImage from '../component/NativeImage'
import NativeDataList from '../component/NativeDataList'
import NativeHeader from '../component/NativeHeader';
import NativeDatePicker from '../component/NativeDatePicker';
import NativeDateTimePicker from '../component/NativeDateTimePicker';
import StyleConfig from '../assets/StyleConfig/index';
import AppImages from '../assets/icons'
const LIST_DATA = require('../helper/ListDataJson');
type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            dataListItems:LIST_DATA,
            date: '',
            time: '20:00',
            datetime: '2016-05-05 20:00',
            datetime1: '2016-05-05 20:00'
        }

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

                    <View style={styles.viewStyle2}>
                        <Text style={styles.textStyle}>Responsive</Text>
                    </View>
                    <View style={styles.viewStyle3} onPress={()=> alert('test')}>
                        <Text style={styles.textStyle}>Percentage</Text>
                    </View>

                    <TouchableOpacity style={{backgroundColor:'grey', padding:StyleConfig.countFontSize(8)}}
                                      onPress={()=> {this.props.navigation.navigate('ListData')}}>
                        <Text style={styles.textStyle}>DataList Screen</Text>
                    </TouchableOpacity>
                    <NativeDatePicker
                        style={styles.dateContainer}
                        renderDate={({ year, month, day, date }) => {
                            if (!date) {
                                return <Text style={ styles.text}>Select Date</Text>
                            }

                            const dateStr = `${month}-${day}-${year}`
                            return <Text style={styles.text}>{dateStr}</Text>
                        }}

                    />


                    <NativeDataList
                        itemsSource={this.state.dataListItems}
                        onClick={(item) => alert(JSON.stringify(item))}
                    />


                    <NativeDateTimePicker
                        style={{width: StyleConfig.responsiveWidth(90), marginTop: StyleConfig.countFontSize(10)}}
                        date={this.state.date}
                        mode="date"
                        placeholder="placeholder"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        iconSource={AppImages.ic_google_calendar}
                        onDateChange={(date) => {this.setState({date: date});}}
                    />
                    <NativeDateTimePicker
                        style={{width: StyleConfig.responsiveWidth(90), marginTop: StyleConfig.countFontSize(10)}}
                        date={this.state.time}
                        mode="time"
                        format="HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minuteInterval={10}
                        onDateChange={(time) => {this.setState({time: time});}}
                    />
                    <NativeDateTimePicker
                        style={{width: StyleConfig.responsiveWidth(90), marginTop: StyleConfig.countFontSize(10)}}
                        date={this.state.datetime}
                        mode="datetime"
                        format="YYYY-MM-DD HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        onDateChange={(datetime) => {this.setState({datetime: datetime});}}
                    />
                    <NativeDateTimePicker
                        style={{width: StyleConfig.responsiveWidth(90), marginTop: StyleConfig.countFontSize(10)}}
                        date={this.state.datetime1}
                        mode="datetime"
                        format="YYYY-MM-DD HH:mm"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        minuteInterval={10}
                        onDateChange={(datetime) => {this.setState({datetime1: datetime});}}
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

    textStyle: {fontSize: StyleConfig.countFontSize(20), color: 'white'},
    dateContainer: {
        backgroundColor: '#fff',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        justifyContent: 'center',
        borderRadius: 2,
        height: 50
    },
    placeholderText: {
        color: '#ddd'
    },
    text: {
        width: '100%',
        paddingHorizontal: StyleConfig.countFontSize(12),
        paddingVertical: StyleConfig.countFontSize(4),
        fontSize: StyleConfig.countFontSize(15),

    }
});
