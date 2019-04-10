import * as React from "react";
import ReactNative from "react-native";
import NativeField from "../Interfaces/NativeField";
import {TextInput, StyleSheet} from 'react-native';
import StyleConfig from '../assets/StyleConfig/index'

interface TextBoxProps extends NativeField {

    placeholder?: string;
    placeholderTextColor?: string;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    autoCorrect?: boolean;
    autoFocus?: boolean;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "ascii-capable" | "numbers-and-punctuation" | "url" | "number-pad" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search";
    allowFontScaling?: boolean;
    maxLength?: number;
    multiline?: boolean;
    secureTextEntry?: boolean;
    style: {};
    inputAccessoryViewID?: string;
    textContentType?: string;
    returnKeyLabel?: string;
    editable?: boolean;
    defaultValue?: string;
}

interface TextBoxState {
    changed: boolean;
}

export default class NativeTextBox extends React.PureComponent<TextBoxProps, TextBoxState> {

    constructor(props: Readonly<TextBoxProps>) {
        super(props);
        this.state = { changed: false };
    }

    private handleTextChange = (value: any): void => {
        if(this.props.onChangeText){
            this.props.onChangeText(value);
            this.setState({ changed: true });
        }
    };


    private handleBlur = (): void => {

        if (this.state.changed) {
            this.setState({ changed: false });
        }
    };


    private handleClearClick = (): void => {
        if(this.props.onChange){
            this.props.onChange("");
        }
    };


    render(): React.ReactNode {

        const {
            value,
            textContentType,
            returnKeyLabel,
            editable,
            defaultValue,
            autoCapitalize,
            keyboardType,
            multiline,
            placeholder,
            secureTextEntry,
            autoCorrect
        }
            = this.props;

        return (
            <TextInput style={styles.primaryTextBox}
                onChangeText={this.handleTextChange}
                onBlur={this.handleBlur}
                placeholder={placeholder}
                autoCorrect={autoCorrect}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                multiline={multiline}
                returnKeyLabel={returnKeyLabel}
                secureTextEntry={secureTextEntry}
                value={value}
                defaultValue={defaultValue}
                textContentType={textContentType}
                editable={editable}
            >
            </TextInput>
        );
    }
}


const styles = StyleSheet.create({
    primaryTextBox:{
        fontSize: StyleConfig.countFontSize(12),
        color: 'black',
        fontWeight: 'normal',
        fontFamily: 'Cochin',
        fontStyle: 'normal',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: StyleConfig.countFontSize(6),
        padding : StyleConfig.countFontSize(8),
        margin: StyleConfig.countFontSize(12),
    },
    secondaryTextBox:{
        fontSize: StyleConfig.countFontSize(12),
        color: 'blue',
        fontWeight: 'normal',
        fontFamily: 'Cochin',
        fontStyle: 'normal',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: StyleConfig.countFontSize(6),
        padding : StyleConfig.countFontSize(8),
        margin: StyleConfig.countFontSize(12),
    },
    emailTextBox: {
        fontSize: StyleConfig.countFontSize(15),
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        height: StyleConfig.countFontSize(40),
        borderColor: 'black',
        padding : StyleConfig.countFontSize(8),
        borderWidth: 1,
    },
    userNameTextBox:{
        fontSize: StyleConfig.countFontSize(15),
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        height: StyleConfig.countFontSize(40),
        borderColor: 'black',
        padding : StyleConfig.countFontSize(8),
        borderWidth: 1,
    },
    passwordTextBox: {
        fontSize: StyleConfig.countFontSize(15),
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        padding : StyleConfig.countFontSize(8),
        height: StyleConfig.countFontSize(50),
        borderColor: 'black',
        borderWidth: 1,
    },
    telephoneNumberTextBox: {
        fontSize: StyleConfig.countFontSize(15),
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        height: StyleConfig.countFontSize(50),
        borderColor: 'black',
        padding : StyleConfig.countFontSize(8),
        borderWidth: 1,
    },
    numberTextBox: {
        fontSize: StyleConfig.countFontSize(15),
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal',
        height: StyleConfig.countFontSize(50),
        borderColor: 'black',
        padding : StyleConfig.countFontSize(8),
        borderWidth: 1,
    },


});
