import { useState } from 'react'
import Header from './components/Header/Header'
import SearchSection from './components/SearchSection/SearchSection'
import NavButtons from './components/NavButtons/NavButtons'
import ShareholderList from './components/ShareholderList/ShareholderList'
import OwnerList from './components/OwnersList/OwnerList'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <SearchSection />
        <NavButtons />
        <ShareholderList />
        <Footer />
      </div>
    </>
  )
}

export default App
