import { useFormik } from "formik";
import axios from "../../api/authApi";
import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDateForForms } from "../../utils/dateFormateForms";
import Select from "react-select";
import countryList from "react-select-country-list";

const EditUserPatent = (props) => {
  const { id } = useParams();
  const [value, setValue] = useState("Select Country");
  const options = useMemo(() => countryList().getData(), []);
  const [userPatentData, setUserPatentData] = useState("");
  const navigate = useNavigate();

  const style =
    "h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-10 my-4 rounded-2xl  border-solid border pointer-events-auto";
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`/patent/render/${id}`, {
        headers: {
          // "Content-type": "application/json",
          Authorization: `${authToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        setUserPatentData(res.data);
      });
  }, []);
  //Put ID here in dep Array
  const filingDate = formatDateForForms(userPatentData.filingDate);
  const publicationDate = formatDateForForms(userPatentData.publicationDate);

  const formik = useFormik({
    initialValues: {
      title: userPatentData.title,
      inventors: userPatentData.inventors,
      applicationNumber: userPatentData.applicationNumber,
      filingCountry: userPatentData.filingCountry,
      subjectCategory: userPatentData.subjectCategory,
      filingDate: filingDate,
      publicationDate: publicationDate,
      status: userPatentData.status,
    },

    enableReinitialize: true,
    onSubmit: (values) => {
      axios
        .put(`/patent/edit/${id}`, values, {
          headers: {
            // "Content-type": "application/json",
            Authorization: `${authToken}`,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            navigate("/profile/patent");
          }
        });
      console.log(values);
    },
  });

  const getCountry = () => {
    const valueOf = options.find(
      (option) => option.label === formik.values.filingCountry
    );
    console.log(valueOf);
  };

  const changeHandler = (selectedOption) => {
    const selectedCountryName = selectedOption.label;
    formik.setFieldValue("filingCountry", selectedCountryName);
    setValue(selectedOption);
  };
  // console.log(formik.initialValues);

  return (
    <div className="flex flex-col justify-center items-center relative h-full ml-64">
      <div className=" flex  items-center justify-center">
        <h1 className="text-2xl font-semibold mr-56">
          Edit your Patent Details
        </h1>
      </div>
      <div className="content-center">
        <form className=" ml-20" onSubmit={formik.handleSubmit} method="put">
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
            value={getCountry()}
            required={true}
            onChange={changeHandler}
            // value={options.find(
            //   (option) => option.label === formik.values.filingCountry
            // )}
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
          <div className="ml-36">
            <button
              className="w-24 text-white rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] "
              type="submit"
            >
              EDIT
            </button>
            <button
              className="w-24 text-white rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] "
              type="reset"
            >
              RESET
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserPatent;
