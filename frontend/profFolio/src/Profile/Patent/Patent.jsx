import { useState, useMemo } from "react";
import { useFormik } from "formik";
import Select from "react-select";
import countryList from "react-select-country-list";

const Patent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [value, setValue] = useState("Select Country");
  const options = useMemo(() => countryList().getData(), []);
  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-10 my-4 rounded-2xl  border-solid border";
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

  const changeHandler = (value) => {
    setValue(value);
  };
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1 className="text-3xl">This is the patent section</h1>

          <input type="file" onChange={handleFileChange} />
          {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center  relative h-screen">
          {/* bg-red-400 */}
          <h1 className="text-2xl font-semibold text-[#550C6B] mr-10">
            Input the details
          </h1>
          <div className="content-center ml-80">
            <form onSubmit={formik.handleSubmit} method="post">
              <input
                className={style}
                id="title"
                type="text"
                name="title"
                placeholder="Title of the Patent"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              <input
                className={style}
                id="inventors"
                type="text"
                name="inventors"
                placeholder="Patent Creator(s)"
                onChange={formik.handleChange}
                value={formik.values.inventors}
              />
              <input
                className={style}
                id="applicationNo"
                type="number"
                name="applicationNo"
                placeholder="Application Number"
                onChange={formik.handleChange}
                value={formik.values.applicationNo}
              />
              {/* Make it dropDown set few countries */}
              {/* <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border"
                id="country"
                type="text"
                name="country"
                placeholder="Year"
                onChange={formik.handleChange}
                value={formik.values.country}
              /> */}
              <Select
                className="w-1/2 mx-10 my-4 "
                options={options}
                value={value}
                onChange={changeHandler}
              />
              <input
                className={style}
                id="subjectCategory"
                type="text"
                name="subjectCategory"
                placeholder="Enter Category"
                onChange={formik.handleChange}
                value={formik.values.subjectCategory}
              />

              <input
                className={style}
                id="filingDate"
                type="number"
                name="filingDate"
                placeholder="Filing Date"
                onChange={formik.handleChange}
                value={formik.values.filingDate}
              />
              <input
                className={style}
                id="publicationDate"
                type="text"
                name="publicationDate"
                placeholder="Enter Volume"
                onChange={formik.handleChange}
                value={formik.values.publicationDate}
              />
              <input
                className={style}
                id="status"
                type="text"
                name="status"
                placeholder="Enter Page No"
                onChange={formik.handleChange}
                value={formik.values.status}
              />
              <div className="text-white ml-56">
                <button
                  className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785]"
                  type="button"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patent;
