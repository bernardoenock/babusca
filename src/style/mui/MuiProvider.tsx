import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './MuiTheme';

interface MuiProviderProps {
  children: React.ReactNode
}

export default function MuiProvider(props: MuiProviderProps) {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        {children}
    </ThemeProvider>
  );
}