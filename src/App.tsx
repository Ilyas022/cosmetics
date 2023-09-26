import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ResultPage from './pages/ResultPage'

const App: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  )
}

export default App
