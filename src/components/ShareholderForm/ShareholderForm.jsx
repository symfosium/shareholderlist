import React, { useState } from 'react'
import styles from './ShareholderForm.module.css'
import api from '../../services/api'

const ShareholderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    encryptedSsn: '',
    email: '',
    address: '',
    shares: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    api
      .post('/shareholder/add', formData)
      .then((response) => {
        console.log('Shareholder added: ', response.data)
        setFormData({
          name: '',
          encryptedSsn: '',
          email: '',
          address: '',
          shares: '',
        })
      })
      .catch((e) => {
        console.error('Error adding shareholder', e)
      })
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.header}>New shareholder's information</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className={styles.inputField}
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Social security number:</label>
          <input
            type="text"
            name="encryptedSsn"
            className={styles.inputField}
            value={formData.encryptedSsn}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className={styles.inputField}
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            className={styles.inputField}
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Number of Shares:</label>
          <input
            type="number"
            name="shares"
            className={styles.inputField}
            value={formData.shares}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add Shareholder
        </button>
      </form>
    </div>
  )
}

export default ShareholderForm
