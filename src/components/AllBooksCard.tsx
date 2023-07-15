import { Link } from "react-router-dom";
import { IBooks } from "../types/globalTypes";

interface IProps {
  book: IBooks;
}
export default function AllBooksCard({ book }: IProps) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl text-blue-600">{book?.title}</h2>
          <div className="text-base font-normal">
            <p className="text-lg">
              <span className=" text-xl ">Author : </span> {book?.author}
            </p>
            <p className="text-lg">
              <span className=" text-xl ">Genre: </span> {book?.genre}
            </p>
            <p className="text-lg">
              <span className=" text-xl ">PublicationDate: </span>
              {book?.publicationDate}
            </p>
          </div>
          <Link to={`/books/${book._id}`}>
            <button className="rounded-full border-2 btn btn-outline btn-info">
              SeeDetails
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
