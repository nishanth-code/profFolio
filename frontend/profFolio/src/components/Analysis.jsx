import { MdEdit, MdEditDocument, MdEvent, MdDescription } from "react-icons/md";

const Analysis = () => {
  return (
    <div className="-ml-96 flex flex-row">
      <div className=" mt-80 pr-10">
        <div className="flex ">
          <MdDescription className="text-3xl" />
          <p className="pl-2 text-2xl">11</p>
        </div>
        <h1>Publications</h1>
      </div>
      <div className="mt-80  pr-10">
        <div className="flex">
          <MdEditDocument className="text-3xl" />
          <p className="pl-2 text-2xl">16</p>
        </div>
        <h1>Articles</h1>
      </div>
      <div className=" mt-80">
        <div className="flex">
          <MdEvent className="text-3xl" />
          <p className="pl-2 text-2xl">5</p>
        </div>
        <h1>Workshops</h1>
      </div>
    </div>
  );
};

export default Analysis;
