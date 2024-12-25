import React, { useEffect, useState } from 'react';
import styles from './ProfileComponent.module.css';
import axios from 'axios';

const ProfileComponent = () => {
  const [data, setData] = useState([]);
  const getUserDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/user`);
      setData(response.data.data);

      console.log(response.data.data);
    } catch (error) {
      console.log("Error", error)
    }
  }
  useEffect(() => {
    getUserDetails();
  }, [])
  return (
    <div className={styles.container}>
      {
        data.map((item, index) => {
          return <div className={styles.profileContainer}>
            <div className={styles.pictureContainer}>
              <img src="data:image/jpeg;base64,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" alt={`${{}}'s profile`} className={styles.profilePicture} />
            </div>
            <div className={styles.detailsContainer}>
              <h2 className={styles.name}>{item.username}</h2>
              <p className={styles.email}>{item.email}</p>
              <p className={styles.email}>
                Date: {new Date(item.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>

            </div>
          </div>
        })
      }
    </div>
  );
};

export default ProfileComponent;
