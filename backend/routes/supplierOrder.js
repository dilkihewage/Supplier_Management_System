const express = require('express');
const router = express.Router();
const SupplierOrder = require('../models/supplierOrder');
const Supplier = require('../models/supplier');
const Order = require('../models/order');

// POST route to place a supplier order
router.post('/', async (req, res) => {
  const { supplierId, itemId, notes } = req.body; // Include notes if necessary

  try {
    // Check if supplier exists
    const supplier = await Supplier.findById(supplierId);
    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }

    // Check if order exists
    const order = await Order.findById(itemId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Create a new supplier order
    const newSupplierOrder = new SupplierOrder({
      supplierId: supplierId, // Correctly set supplierId
      itemId: itemId, // Correctly set itemId
      notes: notes, // Include notes
      status: 'placed',
    });

    const savedSupplierOrder = await newSupplierOrder.save();
    // GET route to fetch all orders for a specific supplier
router.get('/:supplierId/orders', async (req, res) => {
  const { supplierId } = req.params;

  try {
    const orders = await SupplierOrder.find({ supplierId }).populate('itemId');
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching supplier orders:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});
// GET route to fetch all orders for a specific supplier by supplierId
router.get('/supplier/:supplierId/orders', async (req, res) => {
  const { supplierId } = req.params; // Extract supplierId from the URL

  try {
    // Find all orders with the given supplierId
    const supplierOrders = await SupplierOrder.find({ supplierId }).populate('itemId'); // Populate item details if needed
    if (!supplierOrders || supplierOrders.length === 0) {
      return res.status(404).json({ message: 'No orders found for this supplier' });
    }

    res.status(200).json(supplierOrders); // Return the orders to the client
  } catch (error) {
    console.error('Error fetching supplier orders:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});


    // Update the order status to 'placed'
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

// GET route to fetch all supplier orders or a specific order by ID
router.get('/', async (req, res) => {
  try {
    const supplierOrders = await SupplierOrder.find().populate('supplierId').populate('itemId'); // Adjust as needed to include referenced documents
    res.status(200).json(supplierOrders);
  } catch (error) {
    console.error('Error fetching supplier orders:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// GET route to fetch a specific supplier order by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params; // Get the ID from the URL parameters

  try {
    const supplierOrder = await SupplierOrder.findById(id).populate('supplierId').populate('itemId'); // Adjust as needed
    if (!supplierOrder) {
      return res.status(404).json({ message: 'Supplier order not found' });
    }
    res.status(200).json(supplierOrder);
  } catch (error) {
    console.error('Error fetching supplier order:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
