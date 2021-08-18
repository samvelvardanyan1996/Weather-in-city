import React, { Fragment } from "react";

const WeatherForTheNextDays = ({ items }) => {
  const listItems = items.map((item) => 
    <Fragment key={item.day.toString()}>
      <div className="weatherForOneOfTheNextDays">
        <div className="nameOfTheDayOfTheWeek">
          Day: {item === undefined ? "null" : item.day}
        </div>
        <div>
          {item === undefined ? "null" : item.wind} winds
        </div>
        <div>
          {item === undefined ? "null" : (item.temperature.slice(1, 3)) + "° / " + (item.temperature.slice(1, 3) - 1) + "°"}
        </div>
      </div>
    </Fragment>
  );
  return (
    <Fragment>
      {listItems}
    </Fragment>
  )
}

export default WeatherForTheNextDays;