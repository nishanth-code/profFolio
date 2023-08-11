import LoginBackground from "../assets/LoginBackground.png";

const ForgotPassword = () => {


  




  return (
    <>
      <div className="flex max-h-fit items-center font-Roboto relative justify-center text-center text-white bg-auto bg-no-repeat">
        <div className="">
          <img className="h-screen w-screen" src={LoginBackground} />
        </div>
        <div className="justify-center rounded-xl absolute w-2/5 h-auto backdrop-blur-sm bg-white/20 pt-8 text-[calc(10px + 2vmin)]">
          <p className="text-4xl relative  my-1">FORGOT PASSWORD</p>
          <p className="text-gray-400">Password recovery</p>
          <form onSubmit="" method="post">
            <div className="">
              <input
                className="h-10 bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div>
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] justify-center"
                type="submit"
              >
                Submit
              </button>
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] justify-center"
                type="submit"
              >
                back
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
