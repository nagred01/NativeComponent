import ReactNative from 'react-native';
import NativeControl from '../Interfaces/NativeControl';

export default interface NativeField extends NativeControl {
    style: {};
    onLayout?: (event: ReactNative.LayoutChangeEvent) => void;
};