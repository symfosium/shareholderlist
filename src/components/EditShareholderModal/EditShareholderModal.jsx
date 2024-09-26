import React, { useState } from 'react'
import api from '../../services/api'

import { toast } from 'react-toastify'

function EditShareholderModal({ shareholder, onClose, onSave }) {
  const [name, setName] = useState(shareholder.name)
  const [email, setEmail] = useState(shareholder.email)
  const [address, setAddress] = useState(shareholder.address)

  const handleSave = () => {
    console.log('Saving shareholder with ID:', shareholder.id)

    const updatedShareholder = { ...shareholder, name, email, address }
    onSave(updatedShareholder)
    onClose()

    api
      .put(`/shareholder/update/${shareholder.id}`, updatedShareholder)
      .then((response) => {
        console.log('Shareholder updated successfully:', response.data)
        toast.success('Shareholder updated successfully!', {
          theme: 'dark',
          position: 'bottom-right',
          autoClose: 4000,
        })
      })
      .catch((error) => {
        console.error('Error updating shareholder', error)
        toast.error('Error updating shareholder!', {
          theme: 'dark',
          position: 'bottom-right',
          autoClose: 4000,
        })
      })
  }

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-content">
          <h2>Edit Shareholder</h2>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <label>Email:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Address:</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} />
          <div className="button-group">
            <button onClick={handleSave} className="modal-content_save">
              Save
            </button>
            <button onClick={onClose} className="modal-content_cancel">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditShareholderModal
