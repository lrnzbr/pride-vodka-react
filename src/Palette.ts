
const textPurple = '#321470';
const buttonPurple = '#9143C5';
const navLinkOrange = '#FF7577';
const offSetGrey = '#C4C4C4';
const logoPurple = '#9D216D';
const logoBlue = '#21B0E6';
const logoGreen = '#277B3D';
const logoOrange = '#EA7524';
const logoRed = '#D32027';
const darkModeTextPurple = '#722EFD';
const darkModeButtonPurple = '#BF60FF';
const darkModeGray = '#E4E3E3';
const black = '#000000';
const white = '#FFFFFF';

export default {
    header1 : {
    textLightMode: textPurple,
    textDarkMode: darkModeTextPurple,
    },
    text : {
        dark: white,
        light: black
    },
    link : {
        highlighted: navLinkOrange
    },
    rainbow: {
        red: logoRed,
        blue: logoBlue,
        orange: logoOrange,
        green: logoGreen,
        purple: logoPurple
    },
    button: {
        normal : buttonPurple,
        hovered: white,
        disabled: offSetGrey,
        darkModeNormal: darkModeButtonPurple,
        darkModeDisabled: darkModeGray
    }


}
