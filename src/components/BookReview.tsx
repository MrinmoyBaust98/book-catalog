import { ChangeEvent, FormEvent, useState } from "react";
import { FiSend } from "react-icons/fi";
import {
  useGetCommentQuery,
  usePostCommentMutation,
} from "../redux/api/apiSlice";

interface IProps {
  id: string;
}

export default function BookReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>("");

  // get comment
  const { data } = useGetCommentQuery(id);

  //   post comment
  const [postComment, {}] = usePostCommentMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // post comment
    const options = {
      id: id,
      data: { review: inputValue },
    };
    postComment(options);
    setInputValue("");
  };

  // when write comment it store every single letter
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <textarea
          className="min-h-[30px] border-2 border-teal-300 w-1/2   ml-64"
          onChange={handleChange}
          value={inputValue}
        />
        <button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </button>
      </form>
      <div className="mt-10">
        {data?.review?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
