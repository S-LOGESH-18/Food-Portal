import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const RoundedImageButton = ({ imageUrl, title, to }) => {
  const buttonStyle = {
    borderRadius: '50%',
    overflow: 'hidden',
    cursor: 'pointer',
    marginBottom: '10px',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
  };

  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'black' }}>
      <button style={buttonStyle}>
        <img src={imageUrl} alt={title} style={imageStyle} />
        <div>{title}</div>
      </button>
    </Link>
  );
};

const MyComponentButton = () => {
  return (
    <div id="ButoonCoontainer" style={{ justifyContent: 'space-around', height: '50%', flexDirection: 'column' }}>
     
      <>
        <h3 style={{ textAlign: 'left' }}>Food Varites</h3>
        <RoundedImageButton imageUrl="https://tse3.mm.bing.net/th?id=OIP.pA3QV9le3tWkxzb9gqli0gHaFj&pid=Api&P=0&h=180"
          title="Briyani"
          to="/Briyani"
        />
        <RoundedImageButton imageUrl="https://recipes.timesofindia.com/photo/53209574.cms"
          title={"Chicken"}
          to="/Chicken"
        />
        <RoundedImageButton imageUrl="https://tse2.mm.bing.net/th?id=OIP.WMa5JE8jpXfCZs13P-2t-wHaGc&pid=Api&P=0&h=180"
          title="Fried Rice"
          to="/FriedRice"
        />
        <RoundedImageButton imageUrl="https://tse3.mm.bing.net/th?id=OIP.6030g-J4k_thOtbrf76smwHaEr&pid=Api&P=0&h=180"
          title="Meals"
          to="/Meals"
        />
        <RoundedImageButton imageUrl="https://tse3.mm.bing.net/th?id=OIP.CvNom9d_LEoGAY_RXdWdXwHaE7&pid=Api&P=0&h=180"
          title={"Ice Cream"}
          to="/IceCream"
        />
      </>
      <>
        <h3 style={{ textAlign: 'left' }}>Best Restaurants</h3>
        <RoundedImageButton imageUrl="https://tse3.mm.bing.net/th?id=OIP.MxOTOt4OWfMwLghoxjebAAAAAA&pid=Api&P=0&h=180"
          to="/Restaurant1"
        />
        <RoundedImageButton imageUrl="https://tse4.mm.bing.net/th?id=OIP.8Ol_mIHROfIrDptXw5pEKgHaHa&pid=Api&P=0&h=180"
          to="/Restaurant2"
        />
        <RoundedImageButton imageUrl="https://thalappakatti.com/wp-content/uploads/2016/11/thalappakatti-logo.png"
          title="Dindigul thalappakatti"
          to="/Thalappakatti"
        />
        <RoundedImageButton imageUrl="https://tse2.mm.bing.net/th?id=OIP.ENVSiKMzkE09s5SJ8m2ugQHaHc&pid=Api&P=0&h=180"
          title="Domino's"
          to="/Dominos"
        />
        <RoundedImageButton imageUrl="https://tse4.mm.bing.net/th?id=OIP.r5YDp81DKs5tkvBpo1JwaAHaLb&pid=Api&P=0&h=180"
          to="/Restaurant3"
        />
      </>
    </div>
  );
};

export default MyComponentButton;
