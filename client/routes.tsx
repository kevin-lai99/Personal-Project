/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router'

import Layout from './pages/Layout'
import CharacterList from './pages/CharacterList'
import Character from './pages/Character'

const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<CharacterList />} />
    <Route path="/character/:id" element={<Character />} />
  </Route>,
)

export default routes
