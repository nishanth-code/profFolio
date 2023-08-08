import Professor from "../assets/professor.jpg";

const PublicationCard = (props) => {
  return (
    <div className="text-white h-auto w-auto">
      <div className="bg-gradient-to-b pb-2 bg-[#550C6B]  h-auto w-72 z-10 rounded-xl my-10 mx-8">
        <div className="mx-4 mt-4 flex pt-2 ">
          <img
            className="rounded-full mr-4 h-12 w-auto opacity-75"
            src={Professor}
            alt="Prof"
          />
          <p className="my-3">{props.author}</p>
        </div>
        <p className="mx-4 my-2">{props.title}</p>
        <p className="mx-4 my-2 ">{props.content}</p>
      </div>
    </div>
  );
};

export default PublicationCard;
