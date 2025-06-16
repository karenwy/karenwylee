/**
 * @copyright 2025 Karen Lee
 * @license Apache-2.0
 */

/**
 * Components
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Cake from './Pages/CaseStudy/Cake'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/cake" element={<Cake />} />
      </Routes>
    </Router>
  )
}

export default App
