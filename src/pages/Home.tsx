import LandingPageCard from "../components/LandingPageCard";
import { useGetLandingPageBooksQuery } from "../redux/api/apiSlice";
import { IBooks } from "../types/globalTypes";

export default function Home() {
  //data fetch using RTK Query
  const { data } = useGetLandingPageBooksQuery(undefined);
  let bookData = data?.data;

  return (
    <div className="my-10">
      <h3 className="text-center text-xl font-semibold">
        Top 10 Recently Added Books
        <div className="col-span-9 grid grid-cols-3 gap-10 pb-20 mt-10">
          {bookData?.map((book: IBooks) => (
            <LandingPageCard book={book} key={book.title} />
          ))}
        </div>
      </h3>
    </div>
  );
}
