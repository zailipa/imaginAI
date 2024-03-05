import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Submit from "./Submit";
import Styleimg from "./Styleimg";

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './submitstyle.css'; // Tell webpack that Button.js uses these styles


function FileUpload2() {
    const [selectedFiles, setSelectedFiles] = useState([]);
  
    const handleFileChange = (event) => {
      // Convert the FileList to an array and filter out non-jpg files
      const filesArray = Array.from(event.target.files).filter((file) =>
        file.type === 'image/jpeg'
      );
  
      setSelectedFiles(filesArray);
    };
  
    const handleUpload = () => {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append('files', file);
      });
  
      // Perform the upload request here
      // You might use fetch or a library like axios
      console.log('Files to upload:', selectedFiles);
      // Placeholder for actual upload code
    };
  
    return (
      <div className="file-upload-wrapper">
        <div className="instructions">
          <p>Please upload 15 different photos of yourself with the following requirements.</p>
          <strong>Requirements</strong>
          <ul>
            <li>Selfies of yourself from the front</li>
            <li>Photos of yourself from a distance</li>
            <li>A photo of yourself from the left side</li>
            <li>A photo of yourself from the right side</li>
            <li>No blurred images. Only clear photos are allowed</li>
            <li>Please only upload in jpg format</li>
          </ul>
        </div>
        <h3>Upload your Photos</h3>
        <div className="file-upload-container">
          <input
            type="file"
            onChange={handleFileChange}
            multiple
            accept="image/jpeg"
            className="file-input"
          />

            <Link to="/styleimg">
              <a onClick={handleUpload} className="btn btn-secondary btn-xl text-uppercase">
                Continue
              </a>
            </Link>
          
        </div>
        {selectedFiles.length > 0 && (
          <p>{selectedFiles.length} file(s) selected</p>
        )}


      </div>

     
    );
  }
  
  export default FileUpload2;