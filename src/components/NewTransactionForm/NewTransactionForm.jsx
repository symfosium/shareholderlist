import React, { useState } from 'react'
import styles from './NewTransactionForm.module.css'
import api from '../../services/api'
import { toast } from 'react-toastify'

const NewTransactionForm = () => {
  const [formData, setFormData] = useState({
    buyer: '',
    seller: '',
    dateOfPurchase: '',
    shareQty: '',
    price: '',
    taxReported: true,
    shareNumberFrom: '',
    shareNumberTo: '',
    note: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleTaxChange = (e) => {
    const value = e.target.value === 'yes' ? true : false
    setFormData({
      ...formData,
      taxReported: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = {
      ...formData,
      taxReported: formData.taxReported,
      dateOfPurchase: formData.dateOfPurchase,
      shareQty: formData.shareQty,
      shareNumberFrom: formData.shareNumberFrom,
      shareNumberTo: formData.shareNumberTo,
    }

    api
      .post('/transactionHistory/add', payload)
      .then((response) => {
        console.log('Transaction added: ', response.data)
        toast.success('Transaction added successfully!', {
          theme: 'dark',
          position: 'bottom-right',
          autoClose: 4000,
        })
        setFormData({
          buyer: '',
          seller: '',
          dateOfPurchase: '',
          shareQty: '',
          price: '',
          taxReported: true,
          shareNumberFrom: '',
          shareNumberTo: '',
          note: '',
        })
      })
      .catch((e) => {
        console.error('Error adding transaction', e)
        toast.error('Error adding transaction!', {
          theme: 'dark',
          position: 'bottom-right',
          autoClose: 4000,
        })
      })
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.header}>Transaction Information</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Buyer:</label>
          <input
            type="text"
            name="buyer"
            className={styles.inputField}
            value={formData.buyer}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Seller:</label>
          <input
            type="text"
            name="seller"
            className={styles.inputField}
            value={formData.seller}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Date of Purchase:</label>
          <input
            type="date"
            name="dateOfPurchase"
            className={styles.inputField}
            value={formData.dateOfPurchase}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Shares Qty:</label>
          <input
            type="number"
            name="shareQty"
            className={styles.inputField}
            value={formData.shareQty}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            className={styles.inputField}
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Withholding Tax Reported?</label>
          <select
            name="withholdingTax"
            className={styles.inputField}
            value={formData.taxReported ? 'yes' : 'no'}
            onChange={handleTaxChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Share Numbers (From - To):</label>
          <div className={styles.shareRange}>
            <input
              type="text"
              name="shareNumberFrom"
              placeholder="From"
              className={styles.inputField}
              value={formData.shareNumberFrom}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="shareNumberTo"
              placeholder="To"
              className={styles.inputField}
              value={formData.shareNumberTo}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>Note:</label>
          <textarea
            name="note"
            className={styles.textareaField}
            value={formData.note}
            onChange={handleInputChange}
            rows={5}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add new transaction
        </button>
      </form>
    </div>
  )
}

export default NewTransactionForm
