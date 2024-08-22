import React, { useEffect, useState } from 'react'
import "../Pages/CSS/P_AddNews.css"
import "../../index.css"
import axios from 'axios'
import Cookies from 'js-cookie'
import POPUP from '../Components/POPUP'
const P_AddNews = () => {
  const publisherName = Cookies.get("publisher_credentials")
  const [disableBtn, setDisableBtn] = useState(true)
  const [displayPopup, setDisplayPopup] = useState("none");
  const [opacity, setOpacity] = useState(1);
  const [newsData, setNewsData] = useState({
    title: "",
    content: "",
    publisherName: publisherName,
    image: "",
    date: new Date().toISOString().split('T')[0]
  });
  useEffect(() => {
    if (newsData.title && newsData.content) {
      setDisableBtn(false)
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const submitNews = async () => {
    axios.post(import.meta.env.VITE_PUBLISHER_NEWSPUBLISHED_URL, newsData)
      .then((response) => {
        console.log(response);
        setDisplayPopup("flex")
        setOpacity(0.4)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <>
      <div className="addnews-area" style={{ opacity: opacity }}>
        <h1>Make some crazy News Here</h1>
        <div className="form-area-under-news-area">
          <input
            type="text"
            name="title"
            autoFocus={true}
            placeholder="Enter the title Here..."
            id='name'
            onChange={handleInputChange}
            value={newsData.title}
          />
          <textarea
            name="content"
            placeholder="Enter the content here..."
            id='description'
            onChange={handleInputChange}
            value={newsData.content}
          />
          <div>
            <input
              type="url"
              name='image'
              id='image'
              placeholder='Enter the image link here...'
              onChange={handleInputChange}
              value={newsData.image}
            />
          </div>
        </div>
        <div className='publish-news-btn-area '>
          <button id='publish-news-btn' className='def-btn' onClick={submitNews}
            style={{
              opacity: newsData.title && newsData.content ? 1 : 0.5,
            }} disabled={disableBtn}> submit</button>
        </div>
      </div>
      <POPUP message="News Published Successfully" buttonText="close" />
    </>
  );
};

export default P_AddNews
