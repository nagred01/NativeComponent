import * as React from "react";
import NativeField from "../Interfaces/NativeField";
import {Text, StyleSheet} from 'react-native';
import  ReactNative from 'react-native';
import StyleConfig from '../assets/StyleConfig/index'

export interface TextProps extends NativeField {
    keyboardAppearance?: string;
    spellCheck?: boolean;
    textContentType?: string;
    scrollEnabled?: boolean;
    enablesReturnKeyAutomatically?: boolean;
    clearTextOnFocus?: boolean;
    clearButtonMode?: string;
    numberOfLines?: string;
    underlineColorAndroid?: string;
    lineBreakMode?: "head" | "middle" | "tail" | "clip";
    ellipsizeMode?: "head" | "middle" | "tail" | "clip";
    allowFontScaling?: boolean;
    disabled?: boolean;
    value?: string;
    onPress?: (event: ReactNative.GestureResponderEvent) => void;
    onLongPress?: (event: ReactNative.GestureResponderEvent) => void;
}

interface TextState {
    changed: boolean;
}

export default class NativeText extends React.PureComponent<TextProps, TextState> {

    constructor(props: Readonly<TextProps>) {
        super(props);
        this.state = { changed: false };
    }

    private onPress = (e: ReactNative.GestureResponderEvent): void => {
        if(this.props.onPress){
            this.props.onPress(e);
            this.setState({ changed: true });
        }
    };

    render(): React.ReactNode {

        const {
            keyboardAppearance,
            spellCheck,
            textContentType,
            scrollEnabled,
            enablesReturnKeyAutomatically,
            clearTextOnFocus,
            clearButtonMode,
            numberOfLines,
            underlineColorAndroid,
            lineBreakMode,
            ellipsizeMode,
            allowFontScaling,
            disabled,
            value,

        }
            = this.props;

        return (
            <Text style={styles.labelText}
                keyboardAppearance={keyboardAppearance}
                spellCheck={spellCheck}
                textContentType={textContentType}
                scrollEnabled={scrollEnabled}
                onPress={this.onPress}
                enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
                clearTextOnFocus={clearTextOnFocus}
                clearButtonMode={clearButtonMode}
                numberOfLines={numberOfLines}
                underlineColorAndroid={underlineColorAndroid}
                lineBreakMode={lineBreakMode}
                ellipsizeMode={ellipsizeMode}
                allowFontScaling={allowFontScaling}
                disabled={disabled}
            >
                {value}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    labelText:{
        fontSize: StyleConfig.countFontSize(24),
        color: 'black',
        fontWeight: 'bold',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
    },
    titleText:{
        fontSize: StyleConfig.countFontSize(21),
        color: 'darkgray',
        fontWeight: 'bold',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
    },
    subTitleText: {
        fontSize: StyleConfig.countFontSize(18),
        color: 'darkgray',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
    },
    primaryText:{
        fontSize: StyleConfig.countFontSize(15),
        color: '#87cefa',
        fontWeight: 'normal',
        padding: StyleConfig.countPixelRatio(12)
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
    },
    secondaryText: {
        fontSize: StyleConfig.countFontSize(12),
        color: 'black',
        fontWeight: 'normal',
        //fontFamily: 'Cochin',
        //fontStyle: 'normal'
    }
})

