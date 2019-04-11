import {Dimensions, Platform,StatusBar, PixelRatio} from 'react-native';

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
        if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
            return true;
        } else if (pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)) {
            return true;
        } else {
            return false;
        }
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
