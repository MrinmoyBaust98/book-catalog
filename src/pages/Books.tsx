import AllBooksCard from "../components/AllBooksCard";
import { useGetAllBooksQuery } from "../redux/api/apiSlice";
import { setSearchtext } from "../redux/features/books/bookSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { IBooks } from "../types/globalTypes";

export default function Books() {
  //data fetch using RTK Query
  const { data } = useGetAllBooksQuery(undefined);

  // redux toolkit
  const { status, searchtext } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();

  //Search handle
  const handleSearchField = (event: any) => {
    const searchTextValue = event.target.value;
    dispatch(setSearchtext(searchTextValue));
  };
  let allBookData;
  if (status) {
    allBookData = data?.data?.filter(
      (book: { title: string; author: string; genre: string }) =>
        book.title.toLowerCase().includes(searchtext!.toLowerCase()) ||
        book.author.toLowerCase().includes(searchtext!.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchtext!.toLowerCase())
    );
  } else {
    allBookData = data?.data;
  }

  return (
    <div className="flex">
      <div className="w-[25%]">
        <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
          <div>
            <h1 className="text-2xl uppercase">Availability</h1>
            <div className="flex items-center  mt-3">
              <div>
                <input
                  className="input input-bordered input-secondary"
                  onChange={handleSearchField}
                  type="text"
                  placeholder="Searh Here"
                />
                <button className="border ">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-16">
          <h3 className="text-center text-3xl font-bold">
            ALL<span className="text-red-400">Books </span>
          </h3>

          <div className=" grid grid-cols-3 gap-10 pb-20 mt-10">
            {allBookData?.map((book: IBooks) => (
              <AllBooksCard book={book} key={book.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
