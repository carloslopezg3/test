import React from "react";
import { Input } from "antd";
import "antd/dist/antd.css";

const TodaysDate = () => (
  <div>
    {`Today's date is ${Date()}`}
    <Input.Password />
  </div>
);
export default TodaysDate;
