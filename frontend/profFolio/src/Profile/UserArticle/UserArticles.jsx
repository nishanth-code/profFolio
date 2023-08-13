import professor from "../../assets/professor.jpg";

const UserArticles = () => {
  return (
    <div className="bg-[#fbf0ff] border absolute border-gray-200 mt-20 ml-20 pb-10 rounded-2xl h-auto shadow-lg">
      <div className="flex">
        <div className="flex ">
          <div className="p-7 ">
            <h1 className="text-2xl font-semibold ml text-center">Patent</h1>
            <div className="flex mt-16">
              <div className="relative">
                <img
                  className="h-40 w-32 ml-20 rounded-xl cursor-pointer transition duration-300 ease-in-out transform hover:brightness-75"
                  src={professor}
                  alt="profile"
                  // onClick={() =>
                  //   document.getElementById("imageInput").click()
                  // }
                />
              </div>
              <div className="mt-12 ml-12 font-In ">
                <h1 className="text-3xl">user_name</h1>
                <h1 className="text-sm">type_Professor</h1>
              </div>
            </div>
            <hr className="w-[800px] h-1 mx-24 my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserArticles;
