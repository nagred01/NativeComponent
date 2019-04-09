import {Dimensions, Platform,StatusBar} from 'react-native';

const {width,height} = Dimensions.get('window');
const widthPer = width /100 ;
const heightPer = height /100 ;
const deviceType = width < 480 ? 'phone' : 'tablet';
const iPhoneX = (Platform.OS === 'ios' && height === 812) || (Platform.OS === 'ios' && height === 896);
const iPhone5 = (Platform.OS === 'ios' && height === 568);
const ratioCount = Math.sqrt(height * height + width * width) ;


const smartScale = (value) => {
    const customHeight = Platform.OS === 'ios' ? iPhoneX ? height - 78 : height : height - 24
    return (value * customHeight) / ratioCount;
    // return (value * height) / 667;

}

const responsiveFontSize=(size)=>{
    return ratioCount * (size / 1000) ;
}


const perWidthToSize = (perVal) => widthPer * perVal ;
const perHeighToSize = (perVal) => heightPer * perVal ;

export default {
    countPixelRatio: (defaultValue) => {
        return smartScale(defaultValue);
    },
    countFontSize:(size) => { return responsiveFontSize(size) },
    responsiveHeight: (size) => perHeighToSize(size),
    responsiveWidth: (size) => perWidthToSize(size),
    width,
    height,
    isIphone: Platform.OS === 'ios',
    iPhoneX,
}
