import Toast from "../components/Toast";

export default function EditBook() {
  return (
    <>
      <div className="text-center my-6">
        <h3 className="text-3xl font-bold my-8">
          Add new books By Submit Essential Informatin
        </h3>
        <div className="">
          {/* <form onSubmit={handleSubmitToast}> */}
          <input
            type="text"
            placeholder="Type Title"
            className=" mb-3 input input-bordered input-accent w-full max-w-xs"
          />
          <br />
          <input
            type="text"
            placeholder="Type Author"
            className=" mb-3 input input-bordered input-accent w-full max-w-xs"
          />
          <br />
          <input
            type="text"
            placeholder="Type Genre"
            className=" mb-3 input input-bordered input-accent w-full max-w-xs"
          />
          <br />
          <input
            type="text"
            placeholder="Type Publication Date"
            className="mb-3 input input-bordered input-accent w-full max-w-xs"
          />
          <br />
          <Toast />
          {/* </form> */}
        </div>
      </div>
    </>
  );
}
