// themeStyles.js
const lightTheme = {
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    navColor: '#6A6A6A',
    navBackground: '#F5F5F5',
    profileContainer: '#FFF',
    userBlock: "#1A1A1A"
  };
  
  const darkTheme = {
    backgroundColor: '#333333',
    color: '#FFFFFF',
    navColor: '#B4B4B4',
    navBackground: '#222222',
    profileContainer: '#000',
    userBlock: "#F5F5F5"
  };
  
  export const getThemeStyles = (isDarkTheme) => {
    return isDarkTheme ? darkTheme : lightTheme;
  };