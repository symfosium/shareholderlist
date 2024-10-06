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
    shareQty: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/
    return emailRegex.test(email)
  }

  const checkEmailExists = async (email) => {
    try {
      const response = await api.get(
        `/shareholder/check-email/${encodeURIComponent(email)}`
      )
      return response.data.exists
    } catch (error) {
      console.error('Error checking email:', error)
      toast.error('Error checking email!', {
        theme: 'dark',
        position: 'bottom-right',
        autoClose: 4000,
      })
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

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

    const emailExists = await checkEmailExists(formData.email)
    if (emailExists) {
      toast.error('This email already exists!', {
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
    if (!formData.shareQty) {
      toast.error('Number of shares field is required!', {
        theme: 'dark',
        position: 'bottom-right',
        autoClose: 4000,
      })
      return
    }

    try {
      const response = await api.post('/shareholder/add', formData)
      console.log('Shareholder added:', response.data)
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
        shareQty: '',
      })
    } catch (error) {
      console.error('Error adding shareholder:', error)
      toast.error('Error adding shareholder!', {
        theme: 'dark',
        position: 'bottom-right',
        autoClose: 4000,
      })
    }
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.header}>New Shareholder's Information</h1>
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
          <label>Social Security Number:</label>
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
            name="shareQty"
            className={styles.inputField}
            value={formData.shareQty}
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