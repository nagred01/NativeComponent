import {Dimensions, Platform,StatusBar} from 'react-native';

const {width,height} = Dimensions.get('window');
const widthPer = width /100 ;
const heightPer = height /100 ;
const ratioCount = Math.sqrt(height * height + width * width) /1000 ;

export default {
    countFontSize:(size) => size * ratioCount ,
    responsiveHeight: (size) => size * heightPer ,
    responsiveWidth: (size) => size * widthPer ,
    width,
    height,
}
