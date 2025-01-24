import React, { useState } from 'react';
import './InsertSupplier.css';
import axios from 'axios';

const InsertSupplier = () => {
  const [supplierData, setSupplierData] = useState({
    supplierName: '',
    uniqueSupplierID: '',
    email: '',
    phoneNumber: '',
    address: '',
    typeOfGoods: '',
    supplyCapacity: '',
    bankAccountDetails: '',
    paymentTerms: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplierData({
      ...supplierData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    
    if (!/^[A-Za-z\s]+$/.test(supplierData.supplierName)) {
      formErrors.supplierName = 'Supplier name must contain only letters.';
    }

    
    if (!/^SUP\d+$/.test(supplierData.uniqueSupplierID)) {
      formErrors.uniqueSupplierID = 'Supplier ID must start with "SUP" followed by numbers.';
    }

    
    if (!/\S+@\S+\.\S+/.test(supplierData.email)) {
      formErrors.email = 'Please enter a valid email address.';
    }

    
    if (!/^07\d{8}$/.test(supplierData.phoneNumber)) {
      formErrors.phoneNumber = 'Phone number must be exactly 10 digits.';
    }

    
    if (!/^[A-Za-z\s]+$/.test(supplierData.address)) {
      formErrors.address = 'Address must contain only letters.';
    }

    
    if (!/^[A-Za-z\s]+$/.test(supplierData.typeOfGoods)) {
      formErrors.typeOfGoods = 'Type of goods must contain only letters.';
    }

    
    if (!/^\d+$/.test(supplierData.supplyCapacity)) {
      formErrors.supplyCapacity = 'Supply capacity must contain only numbers.';
    }

    
    if (!/^[A-Za-z0-9\s\-\/\._]+$/.test(supplierData.bankAccountDetails)) {
  formErrors.bankAccountDetails = 'Bank details must contain only letters, numbers, and the following special characters: - / . _';
}

    
    if (!/^[A-Za-z\s]+$/.test(supplierData.paymentTerms)) {
      formErrors.paymentTerms = 'Payment terms must contain only letters.';
    }

    setErrors(formErrors);

    
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios.post('http://localhost:5000/api/supplier', supplierData).then(() => {
        setSupplierData({
          supplierName: '',
          uniqueSupplierID: '',
          email: '',
          phoneNumber: '',
          address: '',
          typeOfGoods: '',
          supplyCapacity: '',
          bankAccountDetails: '',
          paymentTerms: '',
        });
      });
    }
  };

  return (
    <div className="form-container">
      <h2>Supplier Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="supplierName">Supplier Name</label>
          <input
            type="text"
            id="supplierName"
            name="supplierName"
            onChange={handleChange}
            value={supplierData.supplierName}
          />
          {errors.supplierName && <span className="error">{errors.supplierName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="uniqueSupplierID">Unique Supplier ID</label>
          <input
            type="text"
            id="uniqueSupplierID"
            name="uniqueSupplierID"
            onChange={handleChange}
            value={supplierData.uniqueSupplierID}
          />
          {errors.uniqueSupplierID && <span className="error">{errors.uniqueSupplierID}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={supplierData.email}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            onChange={handleChange}
            value={supplierData.phoneNumber}
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleChange}
            value={supplierData.address}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="typeOfGoods">Type of Goods</label>
          <input
            type="text"
            id="typeOfGoods"
            name="typeOfGoods"
            onChange={handleChange}
            value={supplierData.typeOfGoods}
          />
          {errors.typeOfGoods && <span className="error">{errors.typeOfGoods}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="supplyCapacity">Supply Capacity</label>
          <input
            type="text"
            id="supplyCapacity"
            name="supplyCapacity"
            onChange={handleChange}
            value={supplierData.supplyCapacity}
          />
          {errors.supplyCapacity && <span className="error">{errors.supplyCapacity}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="bankAccountDetails">Bank Details</label>
          <input
            type="text"
            id="bankAccountDetails"
            name="bankAccountDetails"
            onChange={handleChange}
            value={supplierData.bankAccountDetails}
          />
          {errors.bankAccountDetails && <span className="error">{errors.bankAccountDetails}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="paymentTerms">Payment Terms</label>
          <input
            type="text"
            id="paymentTerms"
            name="paymentTerms"
            onChange={handleChange}
            value={supplierData.paymentTerms}
          />
          {errors.paymentTerms && <span className="error">{errors.paymentTerms}</span>}
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>

        
      </form>
    </div>
  );
};

export default InsertSupplier;
