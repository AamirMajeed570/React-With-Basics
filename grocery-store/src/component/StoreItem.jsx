import React, { useState } from 'react';
import styles from './StoreItem.module.css';

const StoreItem = () => {
    const [label, setLabel] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [items, setItems] = useState([]); // State to hold all added items

    const handleAdd = () => {
        // Add a new item to the inventory
        if (label && quantity && price) {
            setItems([...items, { label, quantity: parseInt(quantity), price: parseInt(price) }]);
            // Clear inputs after adding
            setLabel('');
            setQuantity('');
            setPrice('');
        }
    };
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h2 style={{ textAlign: 'center' }}>Grocery Inventory Store</h2>
                <input
                    type="text"
                    value={label}
                    placeholder="Label"
                    onChange={(e) => setLabel(e.target.value)}
                />
                <input
                    type="number"
                    value={quantity}
                    placeholder="Quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <input
                    type="text"
                    value={price}
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            {/* Display the Items in a Table */}
            <div className={styles.inventory}>
                <h3>Inventory</h3>
                {items.length === 0 ? (
                    <p>No items added yet.</p>
                ) : (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Label</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.label}</td>
                                    <td>{item.quantity}</td>
                                    <td>₹{item.price * item.quantity}</td>
                                </tr>
                            ))}
                            {/* Total Row */}
                            <tr className={styles.totalRow}>
                                <td colSpan="2"><strong>Total</strong></td>
                                <td><strong>₹{totalPrice}</strong></td>
                            </tr>
                            <tr className={styles.print}>
                                <td colSpan="3">
                                    <button onClick={()=> window.print()}>Print</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default StoreItem;
