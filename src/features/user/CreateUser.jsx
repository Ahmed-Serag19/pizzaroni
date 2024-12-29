import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.username);

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      {currentUser ? (
        <div>
          <p className="mb-4 text-sm text-stone-600 md:text-base">
            👋 Welcome {currentUser}, Continue ordering!
          </p>
          <Button to="/menu" type="small">
            Menu
          </Button>
        </div>
      ) : (
        <p className="mb-4 text-sm text-stone-600 md:text-base">
          👋 Welcome! Please start by telling us your name:
        </p>
      )}

      {!currentUser && (
        <input
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input mb-8 w-72"
        />
      )}

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
