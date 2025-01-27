import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

function ShowDetails() {
    const [supplier, setSupplier] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/supplier/${id}`)
            .then((res) => {
                setSupplier(res.data);
            })
            .catch(() => {
                console.log("Error from ShowDetails");
            });
    }, [id]);

    if (!supplier) {
        return <div>Loading...</div>; // Loading state
    }

    const TableItem = (
        <div>
            <table style={tableStyle}>
                <tbody>
                    <tr>
                        <th style={thStyle}>1</th>
                        <td style={tdStyle}>Supplier Name</td>
                        <td style={tdStyle}>{supplier.supplierName || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>2</th>
                        <td style={tdStyle}>ID</td>
                        <td style={tdStyle}>{supplier.uniqueSupplierID || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>3</th>
                        <td style={tdStyle}>Email</td>
                        <td style={tdStyle}>{supplier.email || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>4</th>
                        <td style={tdStyle}>Phone Number</td>
                        <td style={tdStyle}>{supplier.phoneNumber || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>5</th>
                        <td style={tdStyle}>Address</td>
                        <td style={tdStyle}>{supplier.address || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>6</th>
                        <td style={tdStyle}>Type of Goods</td>
                        <td style={tdStyle}>{supplier.typeOfGoods || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>7</th>
                        <td style={tdStyle}>Supply Capacity</td>
                        <td style={tdStyle}>{supplier.supplyCapacity || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>8</th>
                        <td style={tdStyle}>Bank Account Details</td>
                        <td style={tdStyle}>{supplier.bankAccountDetails || 'N/A'}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>9</th>
                        <td style={tdStyle}>Payment Terms</td>
                        <td style={tdStyle}>{supplier.paymentTerms || 'N/A'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="showDetails">
            <div className="col-md-10 m-auto">
                <br />
                <Link to={"/"} style={buttonStyle}>Back to Main</Link>
            </div>
            <br />
            <div className='col-md-8 m-auto'>
                <h1 className='display-6-bold text-center'>Supplier Detail</h1>
                <p className='text-center'>This is the full detail of the supplier</p>
                <hr />
                <br />
            </div>
            
            <div className="col-md-10 m-auto">{TableItem}</div>
            
            <div className="col-md-6 m-auto">
                <Link to={`/updatedetails/${supplier._id || supplier.uniqueSupplierID}`} 
                    className="btn btn-outline-info btn-lg btn-block d-flex justify-content-center">Edit Supplier</Link>
            </div>
            <br />
        </div>
    );
}

export default ShowDetails;

// Custom Styles
const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#E3F2FD', // Light blue background color
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    overflow: 'hidden',
    marginTop: '20px',
};

const thStyle = {
    backgroundColor: '#1565C0', // Dark blue for table header
    color: 'white',
    padding: '12px',
    textAlign: 'center',
};

const tdStyle = {
    padding: '12px',
    border: '1px solid #ddd',
    textAlign: 'left',
};

const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#1565C0', // Dark blue background
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    marginBottom: '20px',
};

// Hover Effect
buttonStyle[':hover'] = {
    backgroundColor: '#0D47A1', // Darker shade on hover
};
