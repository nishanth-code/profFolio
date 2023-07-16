const PublicationCard = () => {
  return (
    <div className="text-white">
      <div className="bg-gradient-to-b pb-2 from-[#550C6B] to-[#341649] h-auto w-72 z-10 rounded-xl my-10 mx-10">
        <div className="mx-4 mt-4 flex ">
          {/* <img className="rounded-full mr-4 " src="" alt="Prof" /> */}
          <svg
            className="my-2"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
          </svg>
          <p className="mx-3 my-3">Faculty_Name_1</p>
        </div>
        <p className="mx-4">Publication Name</p>
        <p className="mx-4 my-2 ">Publication_type international Jornal</p>
      </div>
    </div>
  );
};

export default PublicationCard;
