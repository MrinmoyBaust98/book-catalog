import AllBooksCard from "../components/AllBooksCard";
import { useGetAllBooksQuery } from "../redux/api/apiSlice";
import { IBooks } from "../types/globalTypes";

export default function Books() {
  //data fetch using RTK Query
  const { data } = useGetAllBooksQuery(undefined);
  let allBookData = data?.data;

  return (
    <div className="mt-16">
      <h3 className="text-center text-3xl font-bold">
        ALL<span className="text-red-400">Books </span>
      </h3>

      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20 mt-10">
        {allBookData?.map((book: IBooks) => (
          <AllBooksCard book={book} key={book.title} />
        ))}
      </div>
    </div>
  );
}
