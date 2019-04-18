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
        add(this.offsetY, this.dragY),
        set(this.offsetY, add(this.offsetY, this.dragY)),
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
                                opacity: this.opacity,
                                borderWidth: this.borderWidth,
                                transform: [
                                    {
                                        translateX: this.transX,
                                    },
                                    {
                                        translateY: this.transY,
                                    },
                                ],
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
        backgroundColor: "tomato",
        marginLeft: -(CIRCLE_SIZE / 2),
        marginTop: -(CIRCLE_SIZE / 2),
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        borderColor: "#000"
    },
});
//TODO **********************************************
// import React, { Component } from "react";
// import {
//     StyleSheet,
//     View,
//     PanResponder,
//     Animated
// } from "react-native";
// let X=50;
// export default class TestGestureHandler extends Component {
//     constructor() {
//         super();
//         this.state = {
//             pan: new Animated.ValueXY(),
//             x: 0,
//         };
//     }
//
//     componentWillMount() {
//         // Add a listener for the delta value change
//         this.state.pan.addListener((_val) => {this.setState(_val)});
//         // Initialize PanResponder with move handling
//         this.panResponder = PanResponder.create({
//             onStartShouldSetPanResponder: (e, gesture) => true,
//             onPanResponderMove: Animated.event([
//                 null, { dx: this.state.pan.x, dy: 100 }
//             ])
//
//
//             });
//         // adjusting delta value
//         this.state.pan.setValue({ x:0, y:100})
//     }
//
//     render() {
//
//         const dx = this.state.pan.x._value ;
//         X= X+dx ;
//         // console.log({pan:this.state._val,
//         //              values: this.state.pan.x.value,
//         // value2: this.state.pan.x._value,})
//         const panStyle = {
//             transform: this.state.pan.getTranslateTransform()
//         }
//         return (
//             <Animated.View
//                 {...this.panResponder.panHandlers}
//                 style={[ styles.circle,{width:X}]}
//             />
//         );
//     }
// }
//
// let CIRCLE_RADIUS = 50;
// let styles = StyleSheet.create({
//     circle: {
//         backgroundColor: "blue",
//         height: CIRCLE_RADIUS,
//         width: CIRCLE_RADIUS,
//     }
// });


//TODO//////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import { StyleSheet, Text, View, Dimensions } from "react-native";
// import Animated from "react-native-reanimated";
// import { PanGestureHandler, State } from "react-native-gesture-handler";
// const { width, height } = Dimensions.get("window");
//
// const { cond, eq, add, set, Value, event, interpolate, Extrapolate } = Animated;
//
// export default class TestGestureHandler extends React.Component {
//     dragX = new Value(0);
//     dragY = new Value(0);
//     offsetX = new Value(width / 2);
//     offsetY = new Value(height / 2);
//     gestureState = new Value(-1);
//     onGestureEvent = event([
//         {
//             nativeEvent: {
//                 translationX: this.dragX,
//                 translationY: this.dragY,
//                 state: this.gestureState,
//             },
//         },
//     ]);
//     transX = cond(
//         eq(this.gestureState, State.ACTIVE),
//         add(this.offsetX, this.dragX),
//         set(this.offsetX, add(this.offsetX, this.dragX)),
//     );
//     transY = cond(
//         eq(this.gestureState, State.ACTIVE),
//         add(this.offsetY, 0),
//         set(this.offsetY, add(this.offsetY, 0)),
//     );
//     borderWidth = interpolate(this.transX, {
//         inputRange: [0, width],
//         outputRange: [0, 5],
//         extrapolate: Extrapolate.CLAMP
//     });
//     opacity = interpolate(this.transY, {
//         inputRange: [0, height],
//         outputRange: [0.1, 1],
//     });
//     render() {
//         console.log({X:this.transX})
//         return (
//             <View style={styles.container}>
//                 <PanGestureHandler
//                     maxPointers={1}
//                     onGestureEvent={this.onGestureEvent}
//                     onHandlerStateChange={this.onGestureEvent}
//                 >
//                     <Animated.View
//                         style={[
//                             styles.box,
//                             {
//                                 width:this.transX
//                             },
//                         ]}
//                     />
//                 </PanGestureHandler>
//             </View>
//         );
//     }
// }
//
// const CIRCLE_SIZE = 70;
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     box: {
//         marginTop:150,
//         backgroundColor: "tomato",
//         width: CIRCLE_SIZE,
//         height: 20,
//     },
// });
