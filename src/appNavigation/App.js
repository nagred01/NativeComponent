
import React, {Component} from 'react';
import HomeScreen from '../screen/HomeScreen'
import AppRouter from './AppRouter'
type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <AppRouter />
        );
    }
}
