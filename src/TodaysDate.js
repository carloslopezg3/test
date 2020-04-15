import React from "react";
import { Input } from "antd";

const TodaysDate = () => (
  <div>
    {`Today's date is ${Date()}`}
    <Input />
  </div>
);
export default TodaysDate;
