import LandingPage from "../components/ui/LandingPage";
import { IBooks } from "../types/globalTypes";

export default function Home() {
  const datacollection = [
    {
      title: "Baiser Bonna",
      author: "Tasrif Khan",
      genre: "Contemporary Stories",
      status: true,
      publicationDate: "22 Feb 2023",
      review: [],
    },
    {
      title: "Pyara Hin 2",
      author: "Antiq Mahmud",
      genre: "Comic Book",
      status: true,
      publicationDate: "02 Aug 2022",
      review: [],
    },
  ];
  return (
    <div className="my-10">
      <h3 className="text-center text-xl font-semibold">
        Recently Added Books
        <div className="col-span-9 grid grid-cols-3 gap-10 pb-20 mt-10">
          {datacollection?.map((book: IBooks) => (
            <LandingPage book={book} />
          ))}
        </div>
      </h3>
    </div>
  );
}
