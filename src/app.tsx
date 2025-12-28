import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import StartPage from './components/StartPage'
import SetupPage from './components/setupPage'
import 'bootstrap/dist/css/bootstrap.css';
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root')!)
root.render(<App/>)

 function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/setup" element={<SetupPage />} />
      </Routes>
    </Router>
  )
}