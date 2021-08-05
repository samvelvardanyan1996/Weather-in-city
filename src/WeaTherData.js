import React, { Fragment } from "react";
import ListItems from "./ListItems";

const WeaTherData = ({ data }) => {
  return (
    <Fragment>
      <div>
        {data?.temperature !== undefined && `temperature: ${data.temperature}`}
      </div>
      <div>
        {data?.wind !== undefined && `wind: ${data.wind}`}
      </div>
      <div>
        {data?.description !== undefined && `description: ${data.description}`}
      </div>
      <div>
        {data?.forecast !== undefined && `forecast length ${data.forecast.length}`}
      </div>

      {data?.forecast !== undefined && <ListItems items={data.forecast} /> }
    </Fragment>
  )
}

export default WeaTherData;