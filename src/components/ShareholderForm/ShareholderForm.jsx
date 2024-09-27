import React, { useState } from 'react'
import styles from './ShareholderForm.module.css'
import api from '../../services/api'
import { toast } from 'react-toastify'

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
    setFormData({ ...formData, [name]: value })
  }

  // Helper function to validate email
  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/
    return emailRegex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Check for empty fields
    if (!formData.name) {
      toast.error('Name field is required!', {
        theme: 'dark',
        position: 'bottom-right',
        autoClose: 4000,
      })
      return
    }
    if (!formData.encryptedSsn) {
      toast.error('Social security number field is required!', {
        theme: 'dark',
        position: 'bottom-right',
        autoClose: 4000,
      })
      return
    }
    if (!formData.email) {
      toast.error('Email field is required!', {
        theme: 'dark',
        position: 'bottom-right',
        autoClose: 4000,
      })
      return
    }
    if (!validateEmail(formData.email)) {
      toast.error('Invalid email address!', {
        theme: 'dark',
        position: 'bottom-right',
        autoClose: 4000,
      })
      return
    }
    if (!formData.address) {
      toast.error('Address field is required!', {
        theme: 'dark',
        position: 'bottom-right',
        autoClose: 4000,
      })
      return
    }
    if (!formData.shares) {
      toast.error('Number of shares field is required!', {
        theme: 'dark',
        position: 'bottom-right',
        autoClose: 4000,
      })
      return
    }

    // Proceed if all validations pass
    console.log(formData)
    api
      .post('/shareholder/add', formData)
      .then((response) => {
        console.log('Shareholder added: ', response.data)
        toast.success('Shareholder added successfully!', {
          theme: 'dark',
          position: 'bottom-right',
          autoClose: 4000,
        })
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
        toast.error('Error adding shareholder!', {
          theme: 'dark',
          position: 'bottom-right',
          autoClose: 4000,
        })
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
            type="text" // Changed from type="email" to type="text"
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