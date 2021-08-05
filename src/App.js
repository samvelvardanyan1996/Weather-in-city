import React, { useState, Fragment } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WeaTherData from "./WeaTherData";

const App = () => {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState({});

  const getWeather = () => {
    if(cityName !== ""){
      fetch("https://goweather.herokuapp.com/weather/" + cityName)
        .then(response => response.json())
        .then(result => setData(result))
        .catch(err => console.error(err));

        return () => {
        // clearEffect
      };
    }
  }

  const handleInputChange = (e) => {
    setCityName(e.target.value)
  }

  return (
    <Fragment>
      <TextField
        id="standard-helperText"
        label="City Name"
        defaultValue=""
        helperText="Some important text"
        onChange={handleInputChange}
      />
      <div>
        <Button style={{textTransform: "none"}} variant="outlined"  color="primary" onClick={getWeather}>Get Weather</Button>
      </div>
      <WeaTherData data={data} />
    </Fragment>
  );
}

export default App;