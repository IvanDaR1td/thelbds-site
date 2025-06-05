import { createHashRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import App from './App'
import Home from './pages/Home'
import Loading from './components/Loading'

const Game = lazy(() => import('./pages/Game'))
const Devlog = lazy(() => import('./pages/Devlog'))
const Team = lazy(() => import('./pages/Team'))

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'game',
        element: (
          <Suspense fallback={<Loading />}>
            <Game />
          </Suspense>
        ),
      },
      {
        path: 'devlog',
        element: (
          <Suspense fallback={<Loading />}>
            <Devlog />
          </Suspense>
        ),
      },
      {
        path: 'team',
        element: (
          <Suspense fallback={<Loading />}>
            <Team />
          </Suspense>
        ),
      },
    ],
  },
])
