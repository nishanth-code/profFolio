import SideBar from "./SideBar";

const ProfileDetails = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Profile Page</h1>
        <div className="flex ">
          <div>
            <img className="h-20 w-12" src="" alt="profile" />
          </div>
          <h1>user_name</h1>
          <h1>type_Professor</h1>
        </div>
      </div>
      <div>
        <h1>Analysis</h1>
      </div>
    </div>
  );
};
export default ProfileDetails;
