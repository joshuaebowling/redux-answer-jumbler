import React from "react";

const Export = ({ exportData: string }) => {
  console.log("export");
  return (
    <div>
      <textarea>{exportData}</textarea>
    </div>
  );
};

export default Export;
