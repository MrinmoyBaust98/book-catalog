import { useState } from "react";
import { ShowModal } from "./ShowModal";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    return setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-outline btn-error"
      >
        Delete Book
      </button>
      {showModal && <ShowModal closeModal={closeModal} />}
    </>
  );
}
