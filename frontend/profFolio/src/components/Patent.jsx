import { useState } from "react";

const Patent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

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
        <h1>Input the details</h1>
      )}
    </div>
  );
};

export default Patent;
