import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const { cond, eq, add, set, Value, event, interpolate, Extrapolate } = Animated;

export default class TestGestureHandler extends React.Component {
    dragX = new Value(0);
    dragY = new Value(0);
    offsetX = new Value(width / 2);
    offsetY = new Value(height / 2);
    gestureState = new Value(-1);
    onGestureEvent = event([
        {
            nativeEvent: {
                translationX: this.dragX,
                translationY: this.dragY,
                state: this.gestureState,
            },
        },
    ]);
    transX = cond(
        eq(this.gestureState, State.ACTIVE),
        add(this.offsetX, this.dragX),
        set(this.offsetX, add(this.offsetX, this.dragX)),
    );
    transY = cond(
        eq(this.gestureState, State.ACTIVE),
        add(this.offsetY, 0),
        set(this.offsetY, add(this.offsetY, 0)),
    );
    borderWidth = interpolate(this.transX, {
        inputRange: [0, width],
        outputRange: [0, 5],
        extrapolate: Extrapolate.CLAMP
    });
    opacity = interpolate(this.transY, {
        inputRange: [0, height],
        outputRange: [0.1, 1],
    });
    render() {
        console.log({X:this.transX})
        return (
            <View style={styles.container}>
                <PanGestureHandler
                    maxPointers={1}
                    onGestureEvent={this.onGestureEvent}
                    onHandlerStateChange={this.onGestureEvent}
                >
                    <Animated.View
                        style={[
                            styles.box,
                            {
                                width:this.transX
                            },
                        ]}
                    />
                </PanGestureHandler>
            </View>
        );
    }
}

const CIRCLE_SIZE = 70;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        marginTop:150,
        backgroundColor: "tomato",
        width: CIRCLE_SIZE,
        height: 20,
    },
});
