// themeStyles.js
const lightTheme = {
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    navColor: '#6A6A6A',
    navBackground: '#F5F5F5',
    profileContainer: '#FFF',
    userBlock: "#000",
    input: "#F5F5F5",
    subText: "#FFF",
    inputLabel: "#0D0D0D",
    profileNick: "#E5E5E5",
    statsItem : "#D9D9D9",
    statsText: "#0D0D0D",
    searchButton: "#F5F5F5",
    league: "#000",
    leagueBlock: "#F5F5F5",
    hr: "#CDCDCD",
  };  
  
  const darkTheme = {
    backgroundColor: '#333333', 
    textColor: '#FFFFFF',
    navColor: '#B4B4B4',
    navBackground: '#222222',
    profileContainer: '#000',
    userBlock: "#F5F5F5",
    input: "#FFFFFF",
    inputLabel: "#FFF",
    subText: "#222222",
    profileNick: "#1A1A1A",
    statsItem : "#262626",
    statsText: "#FFFFFF",
    searchButton: "#242321",
    league: "#FFF",
    leagueBlock: "#262626",
    hr: "#262626",
  };
  
  export const getThemeStyles = (isDarkTheme) => {
    return isDarkTheme ? darkTheme : lightTheme;
  };