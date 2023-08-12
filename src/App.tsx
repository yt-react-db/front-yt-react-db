import './App.css'
import AuthorizationCodeFlow from './AuthorizationCode';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ModeToggle />
      <AuthorizationCodeFlow />
    </ThemeProvider>
  )
}

export default App
