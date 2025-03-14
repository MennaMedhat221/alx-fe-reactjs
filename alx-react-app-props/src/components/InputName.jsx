import { useState, useEffect } from "react"


function InputName() {
    const [details, setDetails] = useState({ name: "" });
  
    return (
      <div>
        <input
          type="text"
          value={details.name}
          onChange={(e) =>
            setDetails((prev) => ({
              ...prev,
              name: e.target.value,
             
            }))
          }
        />
        <h1>{details.name}</h1>
      </div>
    );
  }
  
  export default InputName;