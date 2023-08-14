import './App.css'
import AuthorizationCodeFlow from './AuthorizationCode';
import PermissionsTable from './PermissionsTable/PermissionsTable';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ModeToggle />
      <PermissionsTable />
      <AuthorizationCodeFlow />
    </ThemeProvider>
  )
}

export default App
