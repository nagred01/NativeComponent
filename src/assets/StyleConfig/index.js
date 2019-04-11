import {Dimensions, Platform, NativeModules, PixelRatio} from 'react-native';
var RNDeviceInfo = NativeModules.RNDeviceInfo;
const {width,height} = Dimensions.get('window');
const widthPer = width /100 ;
const heightPer = height /100 ;
const ratioCount = Math.sqrt(height * height + width * width) /1000 ;
const pixelDensity = PixelRatio.get();
const adjustedWidth = width * pixelDensity ;
const adjustedHeight = height * pixelDensity ;
const isTablet=()=> {
    if ( Platform.OS === 'ios' ){
        return Platform.isPad ;
    }else {
        return (height/width) <= 1.6
    }
}
export default {
    countFontSize:(size) => size * ratioCount ,
    responsiveHeight: (size) => size * heightPer ,
    responsiveWidth: (size) => size * widthPer ,
    width,
    height,
    isPhone: !isTablet(),
    isTab: isTablet(),
}
