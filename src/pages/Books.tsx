import AllBooksCard from "../components/AllBooksCard";
import { useGetAllBooksQuery } from "../redux/api/apiSlice";
import { IBooks } from "../types/globalTypes";

export default function Books() {
  //data fetch using RTK Query
  const { data } = useGetAllBooksQuery(undefined);
  let allBookData = data?.data;

  return (
    <div className="mt-16">
      <h2 className="text-center">See All books</h2>
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20 mt-10">
        {allBookData?.map((book: IBooks) => (
          <AllBooksCard book={book} key={book.title} />
        ))}
      </div>
    </div>
  );
}
