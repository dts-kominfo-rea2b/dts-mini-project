import { createTheme } from '@mui/material/styles';
import "@fontsource/inter"

const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#141414',
      },
      secondary: {
        main: '#B9090B',
      },
    },
    typography:{
      fontFamily: 'inter',
    }
  });

export default theme;