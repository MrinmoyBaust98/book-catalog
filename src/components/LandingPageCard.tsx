import { IBooks } from "../types/globalTypes";

interface IProps {
  book: IBooks;
}
export default function LandingPageCard({ book }: IProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl text-yellow-700">{book?.title}</h2>
        <div className="text-base font-normal">
          <p className="text-lg">
            <span className=" text-xl ">Author : </span> {book?.author}
          </p>
          {/* <p>
            <span className=" text-lg ">Genre: </span> {book?.genre}
          </p> */}
          {/* <p>
            <span className=" text-lg ">PublicationDate: </span>
            {book?.publicationDate}
          </p> */}
        </div>
      </div>
    </div>
  );
}
