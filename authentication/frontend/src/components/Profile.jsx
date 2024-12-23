import React from "react";

const Profile = ({user}) => {
  return (
    <div style={styles.container}>
      <div style={styles.profileImageContainer}>
        <img
          src={user.profilePicture || "https://via.placeholder.com/150"}
          alt={`${user.name}'s Profile`}
          style={styles.profileImage}
        />
      </div>
      <h2 style={styles.name}>{user.name}</h2>
      <p style={styles.email}>{user.email}</p>
      <p style={styles.bio}>{user.bio || "No bio available"}</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f9f9f9",
  },
  profileImageContainer: {
    marginBottom: "15px",
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #007BFF",
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  email: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "10px",
  },
  bio: {
    fontSize: "14px",
    color: "#666",
  },
};

export default Profile;
