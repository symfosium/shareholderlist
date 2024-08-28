import React from 'react';


const NewTransactionForm = () => {
    return (
        <div className={styles.formContainer}>
            <h1 className={styles.header}>Transaction Information</h1>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Buyer:</label>
                    <input type="text" name="buyer" className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                    <label>Seller:</label>
                    <input type="text" name="seller" className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                    <label>Date of Purchase:</label>
                    <input type="date" name="date" className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                    <label>Price:</label>
                    <input type="number" name="price" className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                    <label>Number of Shares:</label>
                    <input type="number" name="shares" className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                    <label>Withholding Tax Reported?</label>
                    <select name="withholdingTax" className={styles.inputField}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label>Share Numbers (From - To):</label>
                    <div className={styles.shareRange}>
                        <input type="text" name="shareFrom" placeholder="From" className={styles.inputField} />
                        <input type="text" name="shareTo" placeholder="To" className={styles.inputField} />
                    </div>
                </div>
                <button type="submit" className={styles.submitButton}>Add new transaction</button>
            </form>
        </div>
    );
};

export default NewTransactionForm;