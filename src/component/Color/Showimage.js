import React, { useState } from 'react';

function Showimage() {
    const [color, setColor] = useState("");
    
  
    return (
      <>
        <h1>Hii {color}!</h1>
        <button
          type="button"
          onClick={() => setColor(<img src="https://intomau.com/Content/upload/images/anime-nu-bieu-cam-cute.jpg" alt="description of image" />)}
        >Blue</button>
        <button
          type="button"
          onClick={() => setColor( <img src="https://inkythuatso.com/uploads/thumbnails/800/2022/03/hinh-anh-avatar-dep-cho-con-gai-dai-dien-30-14-16-51.jpg" alt="description of image" />)}
        >Red</button>
        <button
          type="button"
          onClick={() => setColor(<img src="https://antimatter.vn/wp-content/uploads/2022/11/hinh-anh-anime-nam.jpg" />)}
        >Pink</button>
        <button
          type="button"
          onClick={() => setColor(<img src="https://freenice.net/wp-content/uploads/2021/09/Nhung-hinh-anh-anime-cute-dep-lam-tan-chay-trai-tim-fan.jpg"/>)}
        >Green</button>
      </>
    );
  }

export default Showimage;