import { Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'

function PublicRoutes() {
  return (
    <Routes>
        <Route
          path={'/'}
          element={<Home />}
          index
        />
    </Routes>
  )
}

export default PublicRoutes