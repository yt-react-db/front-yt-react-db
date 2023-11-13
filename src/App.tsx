import './App.css'
import AboutHomePage from './components/AboutHomePage';
import Header from './components/Header';
import PermissionsTable from './components/PermissionsTable/PermissionsTable';

function App() {

  return (
    <>
      <Header />
      <PermissionsTable />
      <AboutHomePage />
    </>
  )
}

export default App
