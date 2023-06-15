import { Dimensions, Platform } from 'react-native';

const colors = {
    white: '#ffffff',
    inputbg: '#FBFBFB',
    btnBlue: '#2D6BEE',
    btnGreen: '#3FB575',
    blue100: '#0088FF',
    blue60: '#0090FF',
    black80: '#211F1F',
    fadeBlack: '#898D88',
    black90: '#101828',
    gray70: '#98A2B3',
    gray80: '#898D88',
    gray30: '#858585',
    gray40: '#D9D9D9',
    gray50: '#667085',
    grey100: '#E8E8E8',
    pureWhite: '#fff',
    gray100: '#F1F5FF',
    gray60: '#F5F5F5',
    darkGray: '#898D88',
    dullwhite: '#E5E5E5',
    lightBlue: '#92B5FF',
    red100: '#FFE9E9',
    red200: '#FF0000',
    blackish: '#171717',
    btnGray: '#EFEFEF',
    GrayBtnTitle: '#121212',
    orange50: '#FF5D50',
    pink50: '#FF796F'
};

const spacesFrom1 = Array.from({ length: 64 }, (_, i) => i + 1);
const spaces = [0.5, ...spacesFrom1];
const spacesMultiplier = spaces.map(space => space * 4);

const fontWeights = {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
};

const fontSize = {
    inputTitle: 12,
    xxxSmallText: 8,
    xxSmallText: 10,
    xSmallText: 14,
    smallText: 16,
    smallTitle: 18,
    titleMedium: 20,
    titleNormal: 24,
    xNormal: 26,
    titleBig: 28,
    xTitle: 30,
    yTitle: 20,
};

const paddings = {
    top: spacesMultiplier[5],
    horizontal: spacesMultiplier[5],
};

const X_WIDTH = 375;
const X_HEIGHT = 812;
const SE_HEIGHT = 667;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const XII_WIDTH = 390;
const XII_HEIGHT = 844;
const XIII_WIDTH = 428;
const XIII_HEIGHT = 926;

const { height, width } = Dimensions.get('window');

const barHeight = () => {
    if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
        if (width === X_WIDTH && height === X_HEIGHT) return 40;
        if (width === X_WIDTH && height === SE_HEIGHT) return 17;
        if (width === XSMAX_WIDTH && height === XSMAX_HEIGHT) return 41;
        if (width === XII_WIDTH && height === XII_HEIGHT) return 44;
        if (width === XIII_WIDTH && height === XIII_HEIGHT) return 44;
        return 20;
    }
    return 0;
};

const StatusBarHeight = Platform.select({
    ios: barHeight(),
    android: 0,
    default: 0,
});

const dimensions = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    statusBar: StatusBarHeight,
    bottomTabs: {
        height: 80,
        paddingBottom: spaces[5],
    },
    headerHeight: Platform.OS === 'ios' ? 64 : 50,
    artworkSummary: 140,
};

const animations = {
    bottomTabBar: {
        duration: 500,
    },
    discoverOverlay: {
        duration: 500,
    },
    discoverSwipe: {
        duration: 500,
    },
};

export const theme = {
    fontFamilies: {
        bold: 'JosefinSans-Bold',
        text: 'JosefinSans-Regular',
        semibold: 'JosefinSans-SemiBold',
        light: 'JosefinSans-Light',
        thin: 'JosefinSans-Thin',
    },
    colors: {
        text: colors.black,
        buttonBorders: colors.primery100,
        background: colors.white,
        error: colors.red100,
        ...colors,
    },
    space: spacesMultiplier,
    fontWeights,
    paddings,
    dimensions,
    animations,
    fontSize,
};
