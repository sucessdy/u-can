import React from "react";
// import OutputScreenRow from "./OutputScreenRow";

export default function OutputScreen( {value} : {value: string | number}) {
  return (
    <div
      style={{
        height: "60px",
        backgroundColor: "#e0e0e0",
        textAlign: "right",
        fontSize: "24px",
        lineHeight: "60px",
        padding: "0 10px",
        borderRadius: "5px",
        marginBottom: "20px",
      }}
    
    
    className="bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4 max-w-md max-h-[20rem] h-full w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600">
      {value || "0"}
    </div>

  );
}
