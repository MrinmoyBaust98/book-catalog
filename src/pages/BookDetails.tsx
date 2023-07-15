import { useParams } from "react-router-dom";
import { useGetsingleBooksQuery } from "../redux/api/apiSlice";
import BookReview from "../components/BookReview";

export default function BookDetails() {
  const { id } = useParams();
  console.log(id);

  const { data } = useGetsingleBooksQuery(id);
  let book = data?.data;

  return (
    <>
      <div className="my-10">
        <h1 className="text-center text-4xl font-bold mt-16">
          Book<span className="text-red-500">Details</span>
        </h1>
        <div className="text-center my-6">
          <h3 className="text-red-900 text-3xl font-bold ">{book?.title}</h3>
          <div>
            <p className=" font-semibold text-xl mt-3">
              <span className="text-xl font-bold mr-1 my-3">Author :</span>
              {book?.author}
            </p>
            <p className=" font-semibold text-xl">
              <span className="text-xl font-bold mr-1 my-3">Genre :</span>
              {book?.genre}
            </p>
            <p className="mt-3 font-semibold text-xl">
              <span className="text-xl font-bold mr-2">Publication Date :</span>
              {book?.publicationDate}
            </p>

            <div className="mt-6 mb-32">
              <button className="btn btn-outline btn-success mr-3">
                Edit Book
              </button>
              <button className="btn btn-outline btn-error">Delete Book</button>
            </div>
          </div>
        </div>
      </div>
      {/* leave reviews for books */}
      <BookReview id={id!} />
    </>
  );
}
