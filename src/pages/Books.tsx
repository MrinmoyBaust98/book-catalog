import AllBooksCard from "../components/AllBooksCard";
import { useGetAllBooksQuery } from "../redux/api/apiSlice";
import { IBooks } from "../types/globalTypes";

export default function Books() {
  //data fetch using RTK Query
  const { data } = useGetAllBooksQuery(undefined);
  let allBookData = data?.data;

  return (
    <div className="flex">
      <div className="w-[25%]">
        <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
          <div>
            <h1 className="text-2xl uppercase">Availability</h1>
            <div
              // onClick={() => dispatch(toggleState())}
              className="flex items-center space-x-2 mt-3"
            >
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>
          <div className="space-y-3 ">
            <h1 className="text-2xl uppercase">Filter BY</h1>
            <div className="max-w-xl">
              <select className="select w-full max-w-xs">
                <option disabled selected>
                  Filter By
                </option>
                <option>Genre</option>
                <option>Publication year</option>
              </select>
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
