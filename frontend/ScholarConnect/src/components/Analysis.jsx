import { MdEdit, MdEditDocument, MdEvent, MdDescription } from "react-icons/md";

const Analysis = () => {
  return (
    <div className="flex flex-row  pl-10 ml-64">
      <div className=" pr-10">
        <div className="flex ">
          <MdDescription className="text-3xl text-[#550C6B]" size={70} />
          <p className="pl-2 text-3xl">11</p>
        </div>
        <h1>Publications</h1>
      </div>
      <div className=" pr-10">
        <div className="flex">
          <MdEditDocument className="text-3xl text-[#550C6B]" size={70} />
          <p className="pl-2 text-3xl">16</p>
        </div>
        <h1>Articles</h1>
      </div>
      <div className=" ">
        <div className="flex">
          <MdEvent className="text-3xl text-[#550C6B]" size={70} />
          <p className="pl-2 text-3xl">5</p>
        </div>
        <h1>Workshops</h1>
      </div>
    </div>
  );
};

export default Analysis;
