import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
function App() {
  const versions = [
    { id: "1", name: "v1.1.0" },
    { id: "2", name: "v1.1.1" },
    { id: "3", name: "v2.1.1" },
  ]
  const [version, setVersion] = useState("");
  const [responseData, setResponseData] = useState("");
  const [selectedVersion, setSelectedVersion] = useState("");
  const handleVersion = async (versionname) => {
    console.log("11111111", versionname);
    setSelectedVersion(versionname);
    try {
      console.log("22222222")
      const response = await axios.get(`http://localhost:8000/api/${versionname}/resource`);
      console.log("Response----", response.data);
      setVersion(response.version || versionname);
      setResponseData(response.data);
    } catch (error) {
      console.log('Error', error)
    }
  }
  return (
    <>
      <h1>Hello Learning API Versioning</h1>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedVersion ? selectedVersion : "Select Version"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {versions.map((version) => {
            return <Dropdown.Item onClick={() => handleVersion(version.name)} key={version.id} value={selectedVersion} href={`#/version/${version.name}`}>{version.name}</Dropdown.Item>
          })}
        </Dropdown.Menu>
      </Dropdown>
      {
        responseData.version ? `You are using Version ${responseData.version} with data: ${responseData.data}` : "Select a Version to view Detail"

      }
    </>
  );
}

export default App;
