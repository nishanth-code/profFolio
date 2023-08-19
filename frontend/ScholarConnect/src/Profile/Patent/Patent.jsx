import React, { useState } from "react";
import Professor from "../../assets/professor.jpg";
import { SlBadge } from "react-icons/sl";
import axios from "../../api/authApi";
import { formatDate } from "../../utils/dateFormater";

const Patent = () => {
  const [patentData, setPatentData] = useState({});

  const url =
    "https://psychic-sniffle-p5wqr79vvv6hrxrg-5000.app.github.dev/patent/addpatent";

  axios.get(url).then((res) => {
    console.log(res);
    setPatentData(res.data);
  });

  return (
    <div className="bg-[#fbf0ff] border absolute border-gray-200 mt-10 ml-20 pb-10 rounded-2xl h-auto w-[900px] shadow-lg">
      <div className="flex">
        <div className="flex ">
          <div className="p-7 ">
            <h1 className="text-3xl font-bold text-center">
              Patent "Internet of Medical Things"{patentData.title}
            </h1>
            <div className="flex mt-16">
              <div className="relative">
                <img
                  className="h-40 w-32 ml-20 rounded-xl cursor-pointer transition duration-300 ease-in-out transform hover:brightness-75"
                  src={Professor}
                  alt="profile"
                  // onClick={() =>
                  //   document.getElementById("imageInput").click()
                  // }
                />
              </div>
              <div className="ml-12 ">
                <h1 className="text-3xl">
                  Inventor: Mahee{patentData.inventors}{" "}
                </h1>
                <h1 className="text-3xl">
                  Application No: 23813{patentData.applicationNo}
                </h1>
                <h1 className="text-lg text-gray-400">
                  Publication Date: {formatDate(patentData.publicationDate)}
                </h1>
                <h1 className="text-md">
                  Status: Approved{patentData.status}{" "}
                </h1>

                <h1 className="text-lg">
                  FilingDate: 07/03/2021{formatDate(patentData.filingDate)}
                </h1>

                <h1 className="text-sm">Country: IN{patentData.country}</h1>
                <h1 className="text-sm">
                  Subject Category: IoT{patentData.subjectCategory}
                </h1>
              </div>
            </div>
            {/* <hr className="w-[800px] h-1 mx-24 my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
          </div>
        </div>
      </div>
      <div className="text-[200px] text-gray-500">
        <SlBadge />
      </div>
    </div>
  );
};

export default Patent;
