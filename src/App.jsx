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
import TripMakes from './Pages/CaseStudy/TripMates'
import Alertr from './Pages/CaseStudy/Alertr'
import CobaltHealth from './Pages/CaseStudy/CobaltHealth'
import OluOluFoods from './Pages/CaseStudy/OluOluFoods'
import HotOffTheWok from './Pages/CaseStudy/HotOffTheWok'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/cake" element={<Cake />} />
        <Route path="/case-study/trip-mates" element={<TripMakes />} />
        <Route path="/case-study/alertr" element={<Alertr />} />
        <Route path="/case-study/cobalt-health" element={<CobaltHealth />} />
        <Route path="/case-study/olu-olu-foods" element={<OluOluFoods />} />
        <Route path="/case-study/hot-of-the-wok" element={<HotOffTheWok />} />
      </Routes>
    </Router>
  )
}

export default App
