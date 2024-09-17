import { useState, useEffect } from 'react'
import api from './services/api'

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
  const [shareholders, setShareholders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get('/shareholders.json')
      .then((response) => {
        setShareholders(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error loading shareholders data:', error)
        setLoading(false)
      })
  }, [activeTab])

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setShareholderForm(false)
    setShowTransactionForm(false)
    setActiveButton('')
  }

  const handleShowShareholderForm = () => {
    setShareholderForm(true)
    setShowTransactionForm(false)
    setActiveTab('')
    setActiveButton('shareholder')
  }

  const handleShowTransactionForm = () => {
    setShowTransactionForm(true)
    setShareholderForm(false)
    setActiveTab('')
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
        <SearchSection activeTab={activeTab} isMobile={isMobile} />
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
            {activeTab === 'shareholders' && (
              <ShareholderList loading={loading} shareholders={shareholders} />
            )}
            {activeTab === 'owners' && <OwnerList />}
            {activeTab === 'transactions' && <TransactionHistoryTable />}
          </>
        )}

        <Footer isMobile={isMobile} />
      </div>
    </>
  )
}

export default App
