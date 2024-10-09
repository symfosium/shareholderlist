import React, { useState, useEffect } from "react";
import styles from "./NewTransactionForm.module.css";
import api from "../../services/api";
import { toast } from "react-toastify";

const NewTransactionForm = () => {
  const [formData, setFormData] = useState({
    buyer: "",
    buyerId: "",
    seller: "",
    sellerId: "",
    dateOfPurchase: "",
    shareQty: "",
    price: "",
    taxReported: true,
    shareNumberFrom: "",
    shareNumberTo: "",
    note: "",
  });
  const [persons, setPersons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [personType, setPersonType] = useState("");
  const [selectedButton, setSelectedButton] = useState("");

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    try {
      const [ownersResponse, shareholdersResponse] = await Promise.all([
        api.get("/owner/all"),
        api.get("/shareholder/all"),
      ]);

      const combinedPersons = [
        ...ownersResponse.data.map((owner) => ({ ...owner, type: "Owner" })),
        ...shareholdersResponse.data.map((shareholder) => ({
          ...shareholder,
          type: "Shareholder",
        })),
      ];

      const uniquePersons = [];
      const seenNames = new Set();

      combinedPersons.forEach((person) => {
        if (!seenNames.has(person.name)) {
          seenNames.add(person.name);
          uniquePersons.push(person);
        }
      });

      setPersons(uniquePersons);
    } catch (error) {
      console.error("Error fetching persons:", error);
    }
  };

  const handlePersonSelect = (person) => {
    setFormData({
      ...formData,
      [personType]: person.name,
      [`${personType}Id`]: person.id,
      [`${personType}Type`]: person.type,
    });
    setShowModal(false);
  };

  const openModal = (type) => {
    setPersonType(type);
    setShowModal(true);
    setSelectedButton(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTaxChange = (e) => {
    const value = e.target.value === "yes" ? true : false;
    setFormData({
      ...formData,
      taxReported: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Payload being sent: ", formData);

    const payload = {
      ...formData,
      buyerId: Number(formData.buyerId),
      sellerId: Number(formData.sellerId),
      price: Number(formData.price),
      shareQty: Number(formData.shareQty),
      shareNumberFrom: Number(formData.shareNumberFrom),
      shareNumberTo: Number(formData.shareNumberTo),
    };

    api
      .post("/transactionHistory/add", payload)
      .then((response) => {
        toast.success("Transaction added successfully!", {
          theme: "dark",
          position: "bottom-right",
          autoClose: 4000,
        });
        setFormData({
          buyer: "",
          seller: "",
          dateOfPurchase: "",
          shareQty: "",
          price: "",
          taxReported: true,
          shareNumberFrom: "",
          shareNumberTo: "",
          note: "",
        });
      })
      .catch((e) => {
        console.error("Error adding transaction", e);
        toast.error("Error adding transaction!", {
          theme: "dark",
          position: "bottom-right",
          autoClose: 4000,
        });
      });
  };

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
            readOnly
          />
          <button
            type="button"
            onClick={() => openModal("buyer")}
            className={`${styles.selectButton} ${
              selectedButton === "buyer" ? styles.selected : ""
            }`}
          >
            Select Buyer
          </button>
        </div>

        <div className={styles.formGroup}>
          <label>Seller:</label>
          <input
            type="text"
            name="seller"
            className={styles.inputField}
            value={formData.seller}
            readOnly
          />
          <button
            type="button"
            onClick={() => openModal("seller")}
            className={`${styles.selectButton} ${
              selectedButton === "seller" ? styles.selected : ""
            }`}
          >
            Select Seller
          </button>
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
            value={formData.taxReported ? "yes" : "no"}
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

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Select {personType === "buyer" ? "Buyer" : "Seller"}</h3>
            <ul>
              {persons.map((person, index) => (
                <li
                  key={`${person.name}-${index}`}
                  onClick={() => handlePersonSelect(person)}
                >
                  {person.name} ({person.type})
                </li>
              ))}
            </ul>

            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewTransactionForm;
