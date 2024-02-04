import React, { useState } from 'react';
import './css/AnotherPage.css'; // Import CSS for AnotherPage styling
import logoImage from '../images/logo.svg'; // Import your logo image
import dashboardIcon from '../images/dashboard.svg'; // Import dashboard icon image
import uploadIcon from '../images/upload.svg'; // Import upload icon image
import invoiceIcon from '../images/invoice.svg'; // Import invoice icon image
import scheduleIcon from '../images/schedule.svg'; // Import schedule icon image
import calendarIcon from '../images/calendar.svg'; // Import calendar icon image
import notificationIcon from '../images/notification.svg'; // Import notification icon image
import settingsIcon from '../images/settings.svg'; // Import settings icon image 
import dashboardlogo from '../images/dashboard-logo.svg'; // Import settings icon image 
import filelogo from '../images/fileicon.svg'; // Import file icon image 
import updatelogo from '../images/uploadicon.svg'; // Import file icon image 

const AnotherPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileData, setFileData] = useState(null); // Changed to null
    const [selectedTag, setSelectedTag] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleTagChange = (event) => {
        setSelectedTag(event.target.value); // Update selected tag
    };

    const handleUpload = () => {
        // Assume you have logic to process the file and extract data
        // For simplicity, I'm just using the file name as data for the table
        if (selectedFile) {
            setFileData({
                fileName: selectedFile.name,
                tags: [], // Initialize tags as an empty array
                selectedTag: selectedTag, // Update selected tag
            });
        }
    };

    return (
        <div className="another-page-container">
            {/* Sidebar */}
            <div className="sidebar">
                <img src={logoImage} alt="Logo" className="logo" />
                <ul className="sidebar-menu">
                    <li className='list-items'>
                        <img src={dashboardlogo} alt="Dashboard Icon" className="dashboardlogo" />
                        <img src={dashboardIcon} alt="Dashboard Icon" className="sidebar-icon" />
                    </li >
                    <li className='list-items'>
                        <img src={uploadIcon} alt="Upload Icon" className="sidebar-icon" />
                    </li>
                    <li className='list-items'>
                        <img src={invoiceIcon} alt="Invoice Icon" className="sidebar-icon" />
                    </li>
                    <li className='list-items'>
                        <img src={scheduleIcon} alt="Schedule Icon" className="sidebar-icon" />
                    </li>
                    <li className='list-items'>
                        <img src={calendarIcon} alt="Calendar Icon" className="sidebar-icon" />
                    </li>
                    <li className='list-items'>
                        <img src={notificationIcon} alt="Notification Icon" className="sidebar-icon" />
                    </li>
                    <li className='list-items'>
                        <img src={settingsIcon} alt="Settings Icon" className="sidebar-icon" />
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <div className="card">
                    <label htmlFor="file-upload" className="file-upload-label">
                        <img src={filelogo} alt="File Icon" className="file-icon" />
                        {selectedFile ? (
                            <div>
                                <span className="browse-text">{selectedFile.name}</span>
                                <span className="remove-text" onClick={() => setSelectedFile(null)}>Remove</span>
                            </div>
                        ) : (
                            <span className="browse-text">Drop your excel sheet or <span className='browse'>Browse</span></span>
                        )}
                        <input type="file" id="file-upload" onChange={handleFileChange} />
                    </label>
                    <button onClick={handleUpload} className="upload-button">
                        <img src={updatelogo} alt="Upload Icon" className="upload-icon" />
                        Upload
                    </button>
                </div>

                {/* Display table if file data is available */}
                {fileData && (
                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>SI No</th>
                                    <th>Link</th>
                                    <th>Prefix</th>
                                    <th>Add Tag</th>
                                    <th>Selected Tag</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><a href="https://www.google.com/">WWW.Google.com</a></td>
                                    <td>{fileData.fileName}</td>
                                    <td>
                                        {/* Dropdown for tags */}
                                        <select onChange={handleTagChange} value={selectedTag}>
                                            <option value="">Select Tag</option>
                                            <option value="tag1">Tag 1</option>
                                            <option value="tag2">Tag 2</option>
                                            <option value="tag3">Tag 3</option>
                                            <option value="tag4">Tag 4</option>
                                            <option value="tag5">Tag 5</option>
                                        </select>
                                    </td>
                                    <td>{selectedTag}</td> {/* Display selected tag */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </div>
    );
};

export default AnotherPage;
