import { onAuthStateChanged } from "firebase/auth";
import MainLayout from "./layouts/MainLayout";
import { setLoading, setuser } from "./redux/features/user/userSlice";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { auth } from "./lib/firebase";

function App() {
  //dispatch
  const dispatch = useAppDispatch();

  // parsistency maintain
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setuser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <div className="">
      <MainLayout />
    </div>
  );
}

export default App;
