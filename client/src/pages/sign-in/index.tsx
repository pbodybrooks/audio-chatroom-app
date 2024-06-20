import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const SignIn = () => {
  return (
    <div className="sign-in">
      {" "}
      <h1> Welcome to Parker's Audio Chat Room </h1>{" "}
      <form>
        <div>
            <label> Username: </label>
            <input type="text" />
        </div>
        <div>
            <label> Name: </label>
            <input type="text" />
        </div>
        <button type="submit"> Sign In </button>
      </form>
    </div>
  );
};
