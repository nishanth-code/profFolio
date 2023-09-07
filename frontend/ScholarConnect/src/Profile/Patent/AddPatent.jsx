import React, { useState, useMemo } from "react";
import { useFormik } from "formik";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "../../api/authApi";
import { useNavigate } from "react-router-dom";

const Patent = () => {
  const [value, setValue] = useState("Select Country");
  const options = useMemo(() => countryList().getData(), []);
  const navigate = useNavigate();
  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-10 my-4 rounded-2xl  border-solid border pointer-events-auto";
  const authToken = localStorage.getItem("token");

  const formik = useFormik({
    initialValues: {
      title: "",
      inventors: "",
      applicationNumber: "",
      filingCountry: "",
      subjectCategory: "",
      filingDate: "",
      publicationDate: "",
      status: "",
    },

    onSubmit: (values) => {
      axios
        .post("/patent/addpatent", values, {
          headers: {
            // "Content-type": "application/json",
            Authorization: `${authToken}`,
          },
        })
        .then((res) => {
          if (res.status == 200) {
            navigate("/profile/patent");
          }
        });
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
    const selectedCountryName = selectedOption.label;
    formik.setFieldValue("filingCountry", selectedCountryName);
    setValue(selectedOption);
  };
  const changeStatusHandler = (selectedStatusOption) => {
    // Update the selected country value in formik values
    formik.setFieldValue("status", selectedStatusOption.value);
    setValue(selectedStatusOption);
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
            name="title"
            placeholder="Title of the Patent"
            required={true}
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <input
            className={style}
            id="inventors"
            type="text"
            name="inventors"
            placeholder="Patent Creator(s)"
            required={true}
            onChange={formik.handleChange}
            value={formik.values.inventors}
          />
          <input
            className={style}
            id="applicationNumber"
            type="text"
            name="applicationNumber"
            placeholder="Application Number"
            required={true}
            onChange={formik.handleChange}
            value={formik.values.applicationNumber}
          />
          <Select
            className="w-1/2 mx-10 my-4 "
            name="filingCountry"
            options={options}
            value={value}
            required={true}
            onChange={changeHandler}
            // value={formik.values.value}
          />
          <input
            className={style}
            id="subjectCategory"
            type="text"
            name="subjectCategory"
            placeholder="Enter Category"
            required={true}
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
            name="filingDate"
            placeholder="Filing Date"
            required={true}
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
            name="publicationDate"
            placeholder="Publication Date"
            required={true}
            onChange={formik.handleChange}
            value={formik.values.publicationDate}
          />

          <select
            className="h-10 border-solid border text-center w-1/2 mx-10 my-4" // Replace 'style' with the appropriate class
            id="status"
            name="status"
            required={true}
            onChange={formik.handleChange}
            // options={options}
            value={formik.values.status}
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
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
