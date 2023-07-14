import LandingPageCard from "../components/LandingPageCard";
import Footer from "../layouts/Footer";
import { useGetLandingPageBooksQuery } from "../redux/api/apiSlice";
import { IBooks } from "../types/globalTypes";

export default function Home() {
  //data fetch using RTK Query
  const { data } = useGetLandingPageBooksQuery(undefined);
  let bookData = data?.data;

  return (
    <div className="my-10">
      <h3 className="text-center text-3xl font-bold">
        Top <span className="text-red-400">10 </span>Recently Added Books
      </h3>

      <div className="w-[73%] my-4 ">
        <hr className="ml-80" />
      </div>
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20 mt-10">
        {bookData?.map((book: IBooks) => (
          <LandingPageCard book={book} key={book.title} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
