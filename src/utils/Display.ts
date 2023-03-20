import { Dimensions, PixelRatio, Platform } from "react-native";
import DeviceInfo from "react-native-device-info";


const { height, width } = Dimensions.get('window');
export const isTablet = DeviceInfo.isTablet();
export const isAndroid = Platform.OS === 'android' ? true : false;
export const WIDTH = width < height ? width : height;
const HEIGHT1 = width > height ? width : height;
export const HEIGHT = isAndroid ? HEIGHT1 : DeviceInfo.hasNotch() ? HEIGHT1 - 70 : HEIGHT1 - 36;


// will define the screen sizes via Figma design
const guidelineBaseWidthForMobile = isTablet ? 1024 : 428;
const guidelineBaseHeightForMobile = isTablet ? 1316 : 832;

const WidthForTabLandscape = 1366;
const HeightForTabLandscape = 940;

export const scale = (size: number) =>
  ((WIDTH < HEIGHT ? WIDTH : HEIGHT) / guidelineBaseWidthForMobile) * size;

export const verticalScale = (size: number) =>
  ((HEIGHT > WIDTH ? HEIGHT : WIDTH) / guidelineBaseHeightForMobile) * size;

export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

// scaling based on standard size
const scaling = (WIDTH < HEIGHT ? WIDTH : HEIGHT) / guidelineBaseWidthForMobile;

export const normalize = (size: number) => {
  const newSize = size * scaling;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// use these for landscape design
export const percentWidth = (size: number) => {
  const percentValue: number = (size / WidthForTabLandscape) * 100;
  return `${percentValue.toString()}+%`;
};
export const percentHeight = (size: number) => {
  const percentValue: number = (size / HeightForTabLandscape) * 100;
  return `${percentValue.toString()}+%`;
};


const setHeight=(h: number) =>(height/100)* h
const setWidth = (w:number) => (width/100)*w

export default {setHeight,setWidth};