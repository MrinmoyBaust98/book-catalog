import { IBooks } from "../../types/globalTypes";
interface IProps {
  book: IBooks;
}
export default function LandingPage({ book }: IProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{book?.title}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button> */}
      </div>
    </div>
  );
}
