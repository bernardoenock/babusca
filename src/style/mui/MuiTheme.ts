import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          color: grey;
        }
      `,
    },
  },
});

export default theme