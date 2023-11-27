import React, { useState } from 'react';
import { Button } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const BriyaniMenu = () => {
    const [selectedFood, setSelectedFood] = useState(null);

    const menuItems = [
        { id: 1, name: 'Hari Bhavanam', price: 350, image: 'https://haribhavanam.com/wp-content/uploads/2021/06/HB-LOGO-LIGHT.svg' },
        { id: 2, name: 'Chicken Curry', price: 320, image: 'https://i.pinimg.com/1200x/a0/f4/dd/a0f4dd049252924c0512b9a3a6d25e88.jpg' },
        { id: 3, name: 'Mutton Chukka', price: 380, image: 'https://i.ytimg.com/vi/3Qq8mwiInA8/maxresdefault.jpg' },
        { id: 4, name: 'Mutton Biryani', price: 400, image: 'https://www.kannammacooks.com/wp-content/uploads/thalapakatti-mutton-biryani-recipe-1-7.jpg' },
        { id: 5, name: 'Paneer Tikka', price: 250, image: 'https://static.toiimg.com/thumb/75553436.cms?width=1200&height=900' },
        { id: 6, name: 'Chicken Biriyani', price: 350, image: 'https://thalappakatti.com/wp-content/uploads/2016/11/three-col-1-2048x0.jpg' },
        { id: 7, name: 'Chicken Curry', price: 320, image: 'https://i.pinimg.com/1200x/a0/f4/dd/a0f4dd049252924c0512b9a3a6d25e88.jpg' },
        { id: 8, name: 'Mutton Chukka', price: 380, image: 'https://i.ytimg.com/vi/3Qq8mwiInA8/maxresdefault.jpg' },
        { id: 9, name: 'Mutton Biryani', price: 400, image: 'https://www.kannammacooks.com/wp-content/uploads/thalapakatti-mutton-biryani-recipe-1-7.jpg' },
        { id: 10, name: 'Paneer Tikka', price: 250, image: 'https://static.toiimg.com/thumb/75553436.cms?width=1200&height=900' },
    ];

    const handleFoodClick = (food) => {
        setSelectedFood(food);
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: 1, padding: '20px', backgroundColor: '#F9F9F9', border: '1px solid #DDD', borderRadius: '8px', overflowY: 'auto' }}>
                <div style={{ backgroundColor: 'brown', padding: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                        src="https://thalappakatti.com/wp-content/uploads/2018/01/thalappakatti-logo-anim.gif"
                        alt="Restaurant Logo"
                        style={{ maxWidth: '20px', borderRadius: '8px' }}
                    />
                    <h1 style={{ color: 'white', margin: 0 }}>Restaurant</h1>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {menuItems.map((item) => (
                        <li key={item.id} onClick={() => handleFoodClick(item)} style={{ cursor: 'pointer', marginBottom: '10px', borderBottom: '1px solid #DDD', padding: '10px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img src={item.image} alt={item.name} style={{ maxWidth: '100%', borderRadius: '8px' }} />
                                <h2>{item.name}</h2>
                                <p>Rs.{item.price.toFixed(2)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div style={{ flex: 1, padding: '20px', background:blueGrey,border: '1px solid #DDD', borderRadius: '10px', position: 'relative' }}>
                {selectedFood && (
                    <div>
                        <h1>{selectedFood.name}</h1>
                        <img src={selectedFood.image} alt={selectedFood.name} style={{ maxWidth: '100%', borderRadius: '8px' }} />
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <h2>Rs.{selectedFood.price.toFixed(2)}</h2>
                            <Button variant="contained">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BriyaniMenu;