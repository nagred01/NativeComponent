import React from 'react'
import Home from '../screen/HomeScreen';
import ListDataScreen from '../screen/ListDataScreen';
import ItemDetailScreen from '../screen/ItemDetailScreen';
// import Friends from './Friends';
import { Scene, Router, Stack } from 'react-native-router-flux';

const AppRouter = () => (
    <Router>
        <Stack key="root">
            <Scene key="home" component={Home} initial hideNavBar/>
            <Scene key="list_data" component={ListDataScreen}  hideNavBar/>
            <Scene key="item_detail" component={ItemDetailScreen}  hideNavBar/>
        </Stack>
    </Router>
);

export default AppRouter;
