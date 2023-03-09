import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, HashRouter } from 'react-router-dom'
import Favicon from 'react-favicon'

import { CardSearch02Page } from './card_search/CardSearch02'
import { CardSearch05Page } from './card_search/CardSearch02'
import { Header } from './header'

import IconImage from './img/icon2.png'

const container = document.getElementById('app')
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container)

root.render(
  <>
    <Favicon url={IconImage} />

    <Header/>

    <HashRouter>
      <Routes>
        <Route path="/" element={<CardSearch02Page/>} />
        <Route path="/02" element={<CardSearch02Page/>} />
        <Route path="/05" element={<CardSearch05Page/>} />
      </Routes>
    </HashRouter>
  </>
)
