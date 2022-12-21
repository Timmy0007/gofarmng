import React, { useState } from 'react';

const Product = (props) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(true);
  };

  const handleUnlikeClick = () => {
    setLiked(false);
  };

  return (
    <div>
      {liked ? (
        <button onClick={handleUnlikeClick}>🤍</button>
      ) : (
        <button onClick={handleLikeClick}>🧡</button>
      )}
    </div>
  );
};

export default Product;