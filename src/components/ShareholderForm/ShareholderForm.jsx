import React from 'react';
import styles from './ShareholderForm.module.css'

const ShareholderForm = () => {
    return (
        <div className={styles.formContainer}>
            <h1 className={styles.header}>New shareholder's information</h1>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label>Name:</label>
                    <input type="text" name="name" className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                    <label>Social security number:</label>
                    <input type="text" name="number" className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                    <label>Email:</label>
                    <input type="email" name="email" className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                    <label>Address:</label>
                    <input type="text" name="address" className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                    <label>Number of Shares:</label>
                    <input type="number" name="shares" className={styles.inputField} />
                </div>
                <button type="submit" className={styles.submitButton}>Add Shareholder</button>
            </form>
        </div>
    );
};

export default ShareholderForm;