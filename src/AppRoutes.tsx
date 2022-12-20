import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { routes } from './config/routes'
import { HomePage } from './views/HomPage/HomPage';

export const AppRoutes: FC = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={routes.homePage} element={<HomePage />} />
        </Routes>
      </Layout>
    </>
  )
}
