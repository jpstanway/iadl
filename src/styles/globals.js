import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: "#fff",
          fontFamily: "Roboto, sans-serif",
          fontSize: "16px"
        }
      }
    },
    MuiListItem: {
      root :{
        justifyContent: "center",
        paddingTop: "4px",
        paddingBottom: "4px"
      }
    }
  }
});

export default theme;