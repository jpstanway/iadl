import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          scrollBehavior: "smooth"
        },
        body: {
          backgroundColor: "#fff",
          color: "#1f1f1f",
          fontFamily: "Roboto, sans-serif",
          fontSize: "16px",
        },
        'h1, h2, h3, h4': {
          fontFamily: "Lora, serif"
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