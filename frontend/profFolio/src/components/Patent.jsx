import { useState } from "react";
import { useFormik } from "formik";

const Patent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      inventors: "",
      applicationNo: "",
      country: "",
      subjectCategory: "",
      filingDate: "",
      publicationDate: "",
      status: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>This is the patent section</h1>

          <input type="file" onChange={handleFileChange} />
          {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </div>
      ) : (
        <div className="bg-red-400 w-max">
          <h1>Input the details</h1>
          <form onSubmit={formik.handleSubmit} method="post">
            <div>
              <input
                className="h-10 w-3/4 focus:outline-none bg-[rgb(217,217,217)]/30 text-center mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="title"
                type="text"
                name="title"
                placeholder="Title of the Patent"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="inventors"
                type="text"
                name="inventors"
                placeholder="Patent Creator(s)"
                onChange={formik.handleChange}
                value={formik.values.inventors}
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="applicationNo"
                type="number"
                name="applicationNo"
                placeholder="Application Number"
                onChange={formik.handleChange}
                value={formik.values.applicationNo}
              />
            </div>
            <div>
              {/* Make it dropDown set few countries */}
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="country"
                type="text"
                name="country"
                placeholder="Year"
                onChange={formik.handleChange}
                value={formik.values.country}
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="subjectCategory"
                type="text"
                name="subjectCategory"
                placeholder="Enter Category"
                onChange={formik.handleChange}
                value={formik.values.subjectCategory}
              />
            </div>

            <div className="">
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="filingDate"
                type="number"
                name="filingDate"
                placeholder="Filing Date"
                onChange={formik.handleChange}
                value={formik.values.filingDate}
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="publicationDate"
                type="text"
                name="publicationDate"
                placeholder="Enter Volume"
                onChange={formik.handleChange}
                value={formik.values.publicationDate}
              />
            </div>
            <div>
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="status"
                type="text"
                name="status"
                placeholder="Enter Page No"
                onChange={formik.handleChange}
                value={formik.values.status}
              />
            </div>

            <div className="text-white text-center ">
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] justify-center"
                type="button"
                // onClick={() => redirect("/")}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Patent;
