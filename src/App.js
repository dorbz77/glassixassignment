import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [ipData, setIpData] = useState({});

  useEffect(() => {
    (async () => {
        // Get IP data
        let userIpDataObj = await axios.get('https://api.ipdata.co/?api-key=dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e');
        userIpDataObj = userIpDataObj.data;
        setIpData(userIpDataObj);
    })();
  }, [])


  return (
    <div className="App">
      <div className="locationDetails">
        City: {ipData.city}, Country: {ipData.country_name}
      </div>
      <iframe
      width="600"
      height="450"
      frameBorder="0" style={{ border: 0 }}
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk
        &q=${ipData.city},${ipData.country_name}`} allowFullScreen>
      </iframe>
    </div>
  );
}

export default App;
