import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';
import { useState } from 'react';
import "./FoodPageContent.css";
const FoodList = () => {

  const [clickedCard, setClickedCard] = useState(null);

  const handleOnClick=(id)=>{
    console.log("Clicked",id);
    setClickedCard(id);
  }

  const foodItems = [

    { id: 2, foodName: 'Kosha Mangsho',Cuisine:'Cuisine : West Bengal' ,imageUrl: 'https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/devshri-chatterji20180128134028494.jpeg' },
    { id: 3, foodName: 'Misal Pav',Cuisine:'Cuisine : Maharastra' ,imageUrl: 'https://www.secondrecipe.com/wp-content/uploads/2021/05/misal-pav-2021.jpg' },
    { id: 4, foodName: 'Bamboo shoots fry',Cuisine:'Cuisine : Assam' ,imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKItkJn9cYWUWsUxAgsOs7XB6jCk3eFzpLQ&usqp=CAU' },
    { id: 5, foodName: 'Veg Thali',Cuisine:'Cuisine : Tamil Nadu' ,imageUrl: 'https://media.istockphoto.com/id/483405040/photo/south-indian-meals-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=WUFvAWQgxT44QW1JHS5c_QiB_RDf2hkR2hf4Kpk_lzA=' },
    { id: 6, foodName: 'Kodi Pulao',Cuisine:'Cuisine : Andhra Pradesh ' ,imageUrl: 'https://b.zmtcdn.com/data/pictures/chains/5/19439485/6a73ae991b5996015c9bc3153ddef084.jpg?fit=around|960:500&crop=960:500;*,*' },
    { id: 7, foodName: 'Hyderabadi Biryani',Cuisine:'Cuisine : Telangana' ,imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwG6hELXSeWHEQzcoeDGmWz0Z1v0Z_HdLkQ&usqp=CAU' },
    { id: 8, foodName: 'Poha',Cuisine:'Cuisine : Madhya Pradesh ' ,imageUrl: 'https://www.theloveofspice.com/wp-content/uploads/2019/01/kanda-poha-recipe.jpg' },
    { id: 9, foodName: 'Bisi Bele Bath',Cuisine:'Cuisine : Karnataka' ,imageUrl: 'https://maayeka.com/wp-content/uploads/2019/12/bisi-bele-bhath.jpg' },
    { id: 1, foodName: 'Makke di Roti and Sarso da Saag',Cuisine:'Cuisine : Punjab' ,imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBvlDO8zSlhkoVqeASRvFt-lEXl3WqQxDwg&usqp=CAU' }
  ];

  const fastFoods = [
    { id: 3, Restaurant: "Pizza Hut",imageUrl: 'https://wl3-cdn.landsec.com/sites/default/files/images/shops/logos/pizza_hut_logo.png' },
    { id: 4, Restaurant: "KFC",imageUrl: 'https://b.zmtcdn.com/data/pictures/2/3700002/9410759d611db9c62c3acc23c1f27e06.jpg?fit=around|750:500&crop=750:500;*,*' },
    { id: 5, Restaurant: "Taco Bell",imageUrl: 'https://pbs.twimg.com/profile_images/1719239843887353856/tna25awf_400x400.jpg' },
    { id: 6, Restaurant: "Subway",imageUrl: 'https://www.allrecipes.com/thmb/Sb7Xjv5oJJuovAoZCg1IO4Bt3vg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-subway-4x3-6e1f8bb7150647bbbc16a0605a394b86.jpg' },
    { id: 2, Restaurant: " Domino’s Pizza",imageUrl: 'https://play-lh.googleusercontent.com/_lq2HX0YJNDrr0EeUebLAB2JsGbRGyoFY-XOnuUFTPfeEqaHNIyMOGqLx-oq4mUWPpn0' },
    { id: 7, Restaurant: "Burger King",imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png' },
    { id: 1, Restaurant: "McDonald’s",imageUrl: 'https://toxicfreefuture.org/wp-content/uploads/2021/01/AdobeStock_279207035_Editorial_Use_Only-scaled.jpeg' },
    { id: 8, Restaurant: "Starbucks",imageUrl: 'https://lh3.googleusercontent.com/aM15blq-mRDV_fwCuXsHOC--r1WS1CCGQ2vO23Wa0qJq7t0vBx3axxwffFslUcoaWm3TLDvHY4b1MBGUybbtIgyrmNqe1CdxRR_9dfXo' },
  ];

  return (
    <div className='food-page-content-container' style={{paddingLeft:'50px'}}>
      <h1>Traditional Foods in India</h1>
      <Grid container spacing={3}>
        {foodItems.map((food, index) => (
          <Grid item key={foodItems.id} xs={12} sm={6} md={3}>
            <Card
              className={`card-container ${clickedCard === index ? 'enlarged-card' : ''}`}
              onClick={() => handleOnClick(index)}
            >
              <CardMedia
                component="img"
                height="240"
                image={food.imageUrl}
                alt={food.foodName}
              />
              <CardContent>
                {/* <Typography variant="h6">{food.foodName}</Typography> */}
                <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
                  <h3>{food.foodName}<br />{food.Cuisine}</h3>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <h1>Fast Foods Restaurant</h1>
      <Grid container spacing={3}>
        {fastFoods.map((fast, index) => (
          <Grid item key={fastFoods.id} xs={12} sm={6} md={3}>
            <Card
              className={`card-container ${clickedCard === index + foodItems.length ? 'enlarged-card' : ''}`}
              onClick={() => handleOnClick(index + foodItems.length)}
            >
              <CardMedia
                component="img"
                height="240"
                image={fast.imageUrl}
                alt={fast.foodName}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
                  <h3>{fast.Restaurant}</h3>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FoodList;
