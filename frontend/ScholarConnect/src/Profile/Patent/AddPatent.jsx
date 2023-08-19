import React, { useState, useMemo } from "react";
import { useFormik } from "formik";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "../../api/authApi";

const Patent = () => {
  const [value, setValue] = useState("Select Country");
  const options = useMemo(() => countryList().getData(), []);
  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-10 my-4 rounded-2xl  border-solid border pointer-events-auto";

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
      axios.post("/patent/addpatent", { values }).then((res) => {
        console.log(res.data.msg);
      });
      console.log(values);
    },
  });

  // const changeHandler = (value) => {
  //   setValue(value);
  // };
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const changeHandler = (selectedOption) => {
    // Update the selected country value in formik values
    formik.setFieldValue("country", selectedOption.value);
    setValue(selectedOption);
  };

  return (
    <div className="flex flex-col justify-center items-center  relative h-screen">
      {/* bg-red-400 */}
      <h1 className="text-2xl font-semibold mr-10">Enter Patent details</h1>
      <div className="content-center ml-80">
        <form onSubmit={formik.handleSubmit} method="post">
          <input
            className={style}
            id="title"
            type="text"
            name="patent[title]"
            placeholder="Title of the Patent"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <input
            className={style}
            id="inventors"
            type="text"
            name="patent[inventors]"
            placeholder="Patent Creator(s)"
            onChange={formik.handleChange}
            value={formik.values.inventors}
          />
          <input
            className={style}
            id="applicationNo"
            type="number"
            name="patent[applicationNo]"
            placeholder="Application Number"
            onChange={formik.handleChange}
            value={formik.values.applicationNo}
          />
          <Select
            className="w-1/2 mx-10 my-4 "
            options={options}
            value={value}
            onChange={changeHandler}
            // value={formik.values.value}
          />
          <input
            className={style}
            id="subjectCategory"
            type="text"
            name="patent[subjectCategory]"
            placeholder="Enter Category"
            onChange={formik.handleChange}
            value={formik.values.subjectCategory}
          />

          <label className="flex justify-center mr-80 font-semibold">
            Filing Date:
          </label>
          <input
            className={style}
            id="filingDate"
            type="date"
            name="patent[filingDate]"
            placeholder="Filing Date"
            onChange={formik.handleChange}
            value={formik.values.filingDate}
          />
          {/* <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            Filing Date
          </span> */}
          <label className="flex justify-center mr-80 font-semibold">
            Publication Date:
          </label>
          <input
            className={style}
            id="publicationDate"
            type="date"
            name="patent[publicationDate]"
            placeholder="Publication Date"
            onChange={formik.handleChange}
            value={formik.values.publicationDate}
          />
          {/* <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            Publication Date
          </span> */}
          <input
            className={style}
            id="status"
            type="text"
            name="patent[status]"
            placeholder="Enter Status"
            onChange={formik.handleChange}
            value={formik.values.status}
          />
          <div className="flex">
            <div className="text-white ml-40">
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785]"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
            <div className="text-white ">
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785]"
                type="reset"
              >
                RESET
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Patent;
