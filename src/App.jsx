import { useState } from 'react'
import Header from './components/Header/Header'
import SearchSection from './components/SearchSection/SearchSection'
import NavButtons from './components/NavButtons/NavButtons'
import ShareholderList from './components/ShareholderList/ShareholderList'
import OwnerList from './components/OwnersList/OwnerList'
import TransactionHistoryTable from './components/TransactionHistoryTable'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('shareholders')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <>
      <div className="App">
        <Header activeTab={activeTab} onTabChange={handleTabChange} />
        <SearchSection />
        <NavButtons />
        {activeTab === 'shareholders' && <ShareholderList />}
        {activeTab === 'owners' && <OwnerList />}
        {activeTab === 'transactions' && <TransactionHistoryTable />}
        <Footer />
      </div>
    </>
  )
}

export default App
