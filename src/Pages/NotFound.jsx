import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const [confirmClose, setConfirmClose] = useState(false);

  const goBack = () => {
    if (window.history.length === 1) {
      setConfirmClose(true);
    } else {
      navigate(-1);
    }
  };

  const toggleConfirmClose = () => {
    setConfirmClose(!confirmClose);
  };

  const closeTab = () => {
    window.close();
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center  text-3xl text-stone-200 bg-stone-800">
      <h1>Error: 404</h1>
      <h1 className="mb-5 border-b-2 border-green-400 pb-5">
        That page does not exist
      </h1>
      <Link onClick={goBack} className="text-xl underline hover:text-green-400">
        Go Back
      </Link>
      <div
        className={`absolute top-6 flex flex-col items-center gap-3 rounded-md bg-stone-800 p-3 text-xl transition duration-200 ${confirmClose ? "" : "-translate-y-[150%]"}`}
      >
        <p>Close the tab?</p>
        <div className="flex gap-10">
          <button
            onClick={closeTab}
            className="min-w-28 bg-stone-600 opacity-50 hover:opacity-100"
          >
            YES
          </button>
          <button
            onClick={() => setConfirmClose(false)}
            className="min-w-28 bg-red-500 opacity-50 hover:opacity-100"
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
