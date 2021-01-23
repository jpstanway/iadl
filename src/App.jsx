import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './styles/globals';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Header />
      <About />
      <Services />
    </ThemeProvider>
  );
}

export default App;