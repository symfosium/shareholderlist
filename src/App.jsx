import { useState } from 'react'
import Header from './components/Header/Header'
import SearchSection from './components/SearchSection/SearchSection'
import NavButtons from './components/NavButtons/NavButtons'
import ShareholderList from './components/ShareholderList/ShareholderList'
import OwnerList from './components/OwnersList/OwnerList'
import TransactionHistoryTable from './components/TransactionHistoryTable/TransactionHistoryTable'
import ShareholderForm from './components/ShareholderForm/ShareholderForm'
import NewTransactionForm from './components/NewTransactionForm/NewTransactionForm'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('shareholders')
  const [activeButton, setActiveButton] = useState('')
  const [showShareholderForm, setShareholderForm] = useState(false)
  const [showTransactionForm, setShowTransactionForm] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setShareholderForm(false)
    setShowTransactionForm(false)
    setActiveButton('')
  }

  const handleShowShareholderForm = () => {
    setShareholderForm(true)
    setShowTransactionForm(false)
    setActiveButton('shareholder')
  }

  const handleShowTransactionForm = () => {
    setShowTransactionForm(true)
    setShareholderForm(false)
    setActiveButton('transaction')
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  useState(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className="App">
        <Header
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onAddShareholderClick={handleShowShareholderForm}
          onAddTransactionClick={handleShowTransactionForm}
        />
        <SearchSection activeTab={activeTab} />
        {!isMobile && (
          <NavButtons
            onAddShareholderClick={handleShowShareholderForm}
            onAddTransactionClick={handleShowTransactionForm}
            activeButton={activeButton}
          />
        )}
        {showShareholderForm ? (
          <ShareholderForm />
        ) : showTransactionForm ? (
          <NewTransactionForm />
        ) : (
          <>
            {activeTab === 'shareholders' && <ShareholderList />}
            {activeTab === 'owners' && <OwnerList />}
            {activeTab === 'transactions' && <TransactionHistoryTable />}
          </>
        )}
        <Footer />
      </div>
    </>
  )
}

export default App
