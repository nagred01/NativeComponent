import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import HomeScreen from '../screen/HomeScreen'
import ListDataScreen from '../screen/ListDataScreen';
import ItemDetailScreen from '../screen/ItemDetailScreen';
import TestGestureHandler from "../screen/TestGestureHandler";

type Props = {};
const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    ListData: {screen: ListDataScreen},
    ItemDetail:{ screen: ItemDetailScreen},
    TestGestureHandler:{ screen : TestGestureHandler}

}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const App = createAppContainer(MainNavigator);

export default App;

