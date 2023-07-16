//type defination
type ShowToastProps = {
  closeToast: () => void;
};
export const ShowToast: React.FC<ShowToastProps> = ({ closeToast }) => {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <p> ! SuccessFully ! </p>
        <button onClick={closeToast} className="btn btn-outline btn-succsess">
          close
        </button>
      </div>
    </>
  );
};
