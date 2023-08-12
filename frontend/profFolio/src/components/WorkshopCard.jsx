import { AiTwotoneFileWord } from "react-icons/ai";
import Professor from "../assets/professor.jpg";

const WorkshopCard = () => {
  return (
    <div className="text-white h-auto w-96">
      <div className="bg-gradient-to-b pb-2 bg-[#550C6B]  h-auto w-auto z-10 rounded-xl my-10 mx-8">
        <div className="mx-4 mt-4 flex pt-2 ">
          <img
            className="rounded-full  mr-4 h-12 w-auto opacity-75"
            src={Professor}
            alt="Workshop"
          />
          <p className="mx-4 my-2">Title</p>
        </div>
        <p className=" my-2 mx-4 text-slate-400">Attended On</p>
        <p className=" my-2 mx-4 text-slate-400">2 Days</p>
        <p className="mx-4 my-2 ">OrganisedBy</p>
        <p className="mx-4 my-2">subject</p>
        <p className="mx-4 my-2">
          Summary Lorem ipsum dolor sit amet consectetur adipisicing
          elit.Nesciunt natus assumenda dignissimos tempora.
        </p>
      </div>
    </div>
  );
};

export default WorkshopCard;

// title
// organisedBy
// summary
// subject
// attendedOn
// duration
