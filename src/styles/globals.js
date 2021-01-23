import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: "#fff",
          fontFamily: "Roboto, sans-serif"
        }
      }
    },
    MuiListItem: {
      textAlign: "center"
    }
  }
});

export default theme;