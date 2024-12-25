import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VersionManager />} />
        <Route path="/version/v1.1.0" element={<Login />} />
        <Route path="/version/v2.1.0" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function VersionManager() {
  // Static list of versions
  const versions = [
    { id: 1, name: 'v1.1.0' },
    { id: 2, name: 'v2.1.0' },
  ];

  const [selectedVersion, setSelectedVersion] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleVersion = (versionName) => {
    setSelectedVersion(versionName);
    setLoading(true);
    setResponseData(null);
    setTimeout(() => {
      const data = { version: versionName, data: `Details for ${versionName}` };
      setResponseData(data);
      handleClick();
      navigate(`/version/${versionName}`); 
      setLoading(false);
    }, 1000); 
  };

  return (
    <div>
      <h1>Frontend Version Management</h1>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedVersion || 'Select Version'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {versions.map((version) => (
            <Dropdown.Item
              onClick={() => handleVersion(version.name)}
              key={version.id}
            >
              {version.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {loading ? (
        <div style={{ marginTop: '20px' }}>
          <CircularProgress />
          <p>Loading version data...</p>
        </div>
      ) : responseData ? (
        <p style={{ marginTop: '20px' }}>
          You are using <strong>Version {responseData.version}</strong> with data:{" "}
          <code>{responseData.data}</code>
        </p>
      ) : (
        <p style={{ marginTop: '20px' }}>Select a Version to view details.</p>
      )}

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={`You have selected ${selectedVersion}`}
      />
    </div>
  );
}

export default App;
