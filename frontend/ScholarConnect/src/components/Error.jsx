// import { useRouteError } from "react-router-dom";

const Error = () => {
  // const err = useRouteError();
  // console.log(err);
  return (
    <div className="text-center mt-72 text-4xl align-bottom">
      <h1>Oops!</h1>
      <h2>Something went wrong, Bad URL!! 😢</h2>

      {/* <h2>{err.status + " : " + err.statusText}</h2> */}
    </div>
  );
};
export default Error;
