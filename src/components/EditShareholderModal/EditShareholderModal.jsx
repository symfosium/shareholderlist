import React, { useState } from 'react'
import api from '../../services/api'

function EditShareholderModal({ shareholder, onClose, onSave }) {
  const [name, setName] = useState(shareholder.name)
  const [email, setEmail] = useState(shareholder.email)
  const [address, setAddress] = useState(shareholder.address)

  const handleSave = async () => {
    console.log('Saving shareholder with ID:', shareholder.id)
    const updatedShareholder = { ...shareholder, name, email, address }

    try {
      const response = await api.put(
        `/shareholders/${shareholder.id}`,
        updatedShareholder
      )
      onSave(response.data)
      onClose()
    } catch (error) {
      console.error('Shareholder update error', error)
    }
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
