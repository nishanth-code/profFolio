import LoginBackground from "../../assets/LoginBackground.png";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import axios from "../../api/authApi";
import * as Yup from "yup";

const ChangePassword = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      newPassword: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match"), // Validate against newpassword field
    }),

    onSubmit: (values) => {
      axios.put(`/profile/changePassword/${id}`, values).then((res) => {
        console.log(res.data.msg);
        if (res.status == 200) {
          navigate("/login");
        }
      });
    },
  });

  return (
    <>
      <div className="flex max-h-fit items-center font-Roboto relative justify-center text-center text-white bg-auto bg-no-repeat">
        <div className="">
          <img className="h-screen w-screen" src={LoginBackground} />
        </div>
        <div className="justify-center rounded-xl absolute w-2/5 h-auto backdrop-blur-sm bg-white/20 pt-8 text-[calc(10px + 2vmin)]">
          <p className="text-4xl relative  my-1">CHANGE PASSWORD</p>
          <p className="text-gray-400">Password recovery</p>
          <form onSubmit={formik.handleSubmit} method="put">
            <div className="">
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border pointer-events-auto"
                id="newPassword"
                type="password"
                name="newPassword"
                placeholder="Enter new Password"
                onChange={formik.handleChange}
                value={formik.values.newPassword}
              />
            </div>
            <div className="">
              <input
                className="h-10 focus:outline-none bg-[rgb(217,217,217)]/30 text-center w-1/2 mx-40 my-4 rounded-2xl justify-center items-center border-solid border pointer-events-auto"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm new Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-red-500">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <div>
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] justify-center"
                type="submit"
              >
                Submit
              </button>
              <button
                className="w-24 rounded-md my-2 mx-1 px-1 py-1 bg-[#0C2785] justify-center"
                type="submit"
                onClick={() => navigate("/login")}
              >
                back
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
