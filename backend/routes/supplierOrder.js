const express = require('express');
const router = express.Router();
const SupplierOrder = require('../models/supplierOrder');
const Supplier = require('../models/supplier');
const Order = require('../models/order');

// POST route to place a supplier order
router.post('/', async (req, res) => {
  const { supplierId, itemId, notes } = req.body;

  try {
    const supplier = await Supplier.findById(supplierId);
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }

    const order = await Order.findById(itemId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    const newSupplierOrder = new SupplierOrder({
      supplierId,
      itemId,
      notes,
      status: 'placed',
    });

    const savedSupplierOrder = await newSupplierOrder.save();

    order.status = 'placed';
    await order.save();

    res.status(201).json({
      message: 'Order placed successfully',
      supplierOrder: savedSupplierOrder,
    });
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// GET route to fetch all supplier orders
router.get('/', async (req, res) => {
  try {
    const supplierOrders = await SupplierOrder.find().populate('supplierId').populate('itemId');
    res.status(200).json(supplierOrders);
  } catch (error) {
    console.error('Error fetching supplier orders:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// GET route to fetch a specific supplier order by ID
router.get('/:id', async (req, res) => {
  try {
    const supplierOrder = await SupplierOrder.findById(req.params.id).populate('supplierId').populate('itemId');
    if (!supplierOrder) {
      return res.status(404).json({ message: 'Supplier order not found' });
    }
    res.status(200).json(supplierOrder);
  } catch (error) {
    console.error('Error fetching supplier order:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// GET route to fetch all orders for a specific supplier
router.get('/supplier/:supplierId/orders', async (req, res) => {
  try {
    const supplierOrders = await SupplierOrder.find({ supplierId: req.params.supplierId }).populate('itemId');
    if (!supplierOrders.length) {
      return res.status(404).json({ message: 'No orders found for this supplier' });
    }
    res.status(200).json(supplierOrders);
  } catch (error) {
    console.error('Error fetching supplier orders:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// GET route to get total supplier orders count
router.get('/total', async (req, res) => {
  try {
    const totalOrders = await SupplierOrder.countDocuments();
    res.json({ total: totalOrders });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
