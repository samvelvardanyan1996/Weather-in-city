import React, { Fragment } from "react";

const ListItems = ({ items }) => {
  const listItems = items.map((item) => 
    <Fragment key={item.day.toString()}>
      <div>
        {item !== undefined && `forecast day: ${item.day}`}
      </div>
      <div>
        {item !== undefined && `forecast temperature: ${item.temperature}`}
      </div>
      <div>
        {item !== undefined && `forecast wind: ${item.wind}`}
      </div>
    </Fragment>
  );
  return (
    <Fragment>
      {listItems}
    </Fragment>
  )
}

export default ListItems;