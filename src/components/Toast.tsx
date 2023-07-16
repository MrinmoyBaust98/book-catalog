import { ShowToast } from "./ShowToast";
import { useState } from "react";

export default function Toast() {
  //
  const [showToast, setShowToast] = useState(false);
  const closeToast = () => {
    return setShowToast(false);
  };

  return (
    <>
      <button onClick={() => setShowToast(true)} className=" btn btn-success">
        Submit
      </button>
      {showToast && <ShowToast closeToast={closeToast} />}
    </>
  );
}
