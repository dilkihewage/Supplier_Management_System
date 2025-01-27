import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";

function UpdateSupplier() {
    const [supplier, setSupplier] = useState({
        supplierName: "",
        uniqueSupplierID: "",
        email: "",
        phoneNumber: "",
        address: "",
        typeOfGoods: "",
        supplyCapacity: "",
        bankAccountDetails: "",
        paymentTerms: "",
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/supplier/${id}`)
            .then((res) => {
                setSupplier({
                    supplierName: res.data.supplierName,
                    uniqueSupplierID: res.data.uniqueSupplierID,
                    email: res.data.email,
                    phoneNumber: res.data.phoneNumber,
                    address: res.data.address,
                    typeOfGoods: res.data.typeOfGoods,
                    supplyCapacity: res.data.supplyCapacity,
                    bankAccountDetails: res.data.bankAccountDetails,
                    paymentTerms: res.data.paymentTerms,
                });
            })
            .catch((err) => {
                console.log("Error from update Supplier", err);
            });
    }, [id]);

    const onChange = (e) => {
        setSupplier({ ...supplier, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            supplierName: supplier.supplierName,
            uniqueSupplierID: supplier.uniqueSupplierID,
            email: supplier.email,
            phoneNumber: supplier.phoneNumber,
            address: supplier.address,
            typeOfGoods: supplier.typeOfGoods,
            supplyCapacity: supplier.supplyCapacity,
            bankAccountDetails: supplier.bankAccountDetails,
            paymentTerms: supplier.paymentTerms,
        };

        axios
            .put(`http://localhost:5000/api/supplier/${id}`, data)
            .then((res) => {
                navigate(`/showdetails/${id}`);
            })
            .catch((err) => {
                console.log("Error in update", err);
            });
    };

    return (
        <div className="UpdateSupplier" style={containerStyle}>
            <div style={innerContainerStyle}>
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <Link to="/" style={backButtonStyle}>
                            Show Supplier List
                        </Link>
                    </div>
                </div>
                <div className="col-md-12">
                    <h2 style={headerStyle}>Update Supplier</h2>
                    <form noValidate onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='supplierName'>Supplier Name</label>
                            <input
                                type="text"
                                placeholder="Name of Supplier"
                                name="supplierName"
                                className="form-control"
                                value={supplier.supplierName}
                                onChange={onChange}
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <label htmlFor='uniqueSupplierID'>Supplier ID</label>
                            <input
                                type="text"
                                placeholder="Unique Supplier ID"
                                name="uniqueSupplierID"
                                className="form-control"
                                value={supplier.uniqueSupplierID}
                                onChange={onChange}
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type="email"
                                placeholder="Email of Supplier"
                                name="email"
                                className="form-control"
                                value={supplier.email}
                                onChange={onChange}
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <label htmlFor='phoneNumber'>Phone Number</label>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                name="phoneNumber"
                                className="form-control"
                                value={supplier.phoneNumber}
                                onChange={onChange}
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <label htmlFor='address'>Address</label>
                            <input
                                type="text"
                                placeholder="Address"
                                name="address"
                                className="form-control"
                                value={supplier.address}
                                onChange={onChange}
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <label htmlFor='typeOfGoods'>Type of Goods</label>
                            <input
                                type="text"
                                placeholder="Type of Goods"
                                name="typeOfGoods"
                                className="form-control"
                                value={supplier.typeOfGoods}
                                onChange={onChange}
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <label htmlFor='supplyCapacity'>Supply Capacity</label>
                            <input
                                type="text"
                                placeholder="Supply Capacity"
                                name="supplyCapacity"
                                className="form-control"
                                value={supplier.supplyCapacity}
                                onChange={onChange}
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <label htmlFor='bankAccountDetails'>Bank Account Details</label>
                            <input
                                type="text"
                                placeholder="Bank Account Details"
                                name="bankAccountDetails"
                                className="form-control"
                                value={supplier.bankAccountDetails}
                                onChange={onChange}
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <label htmlFor='paymentTerms'>Payment Terms</label>
                            <input
                                type="text"
                                placeholder="Payment Terms"
                                name="paymentTerms"
                                className="form-control"
                                value={supplier.paymentTerms}
                                onChange={onChange}
                            />
                        </div>
                        <br />
                        <button
                            type="submit"
                            style={submitButtonStyle}>
                            Update Supplier
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateSupplier;

// Custom Styles
const containerStyle = {
    padding: '20px',
    backgroundColor: '#F5F5F5',
    minHeight: '100vh',
    width:'400hv',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const innerContainerStyle = {
    backgroundColor: '#E3F2FD',
    borderRadius: '8px',
    padding: '30px',
    width: '200hv',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const headerStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '24px',
    color: '#1565C0',
    fontWeight: 'bold',
};

const backButtonStyle = {
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: '#1565C0',
    color: 'white',
    borderRadius: '5px',
    marginBottom: '20px',
    display: 'inline-block',
};

const submitButtonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#1E88E5',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
};

submitButtonStyle[':hover'] = {
    backgroundColor: '#0D47A1',
};
