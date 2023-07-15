//type defination
type ShowModalProps = {
  closeModal: () => void;
};
export const ShowModal: React.FC<ShowModalProps> = ({ closeModal }) => {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <h2> Do you want to delete ?</h2>
        <p> Delete book can't be restore .It will parmanetly delete</p>
        <button onClick={closeModal} className="btn btn-outline btn-error">
          Ok?
        </button>
      </div>
    </>
  );
};
