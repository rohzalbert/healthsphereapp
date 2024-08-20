// // client/src/components/Profile.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [profile, setProfile] = useState({ name: '', email: '' });

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('/api/users/profile', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProfile(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       await axios.put('/api/users/profile', profile, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert('Profile updated successfully');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="profile">
//       <h1>Profile</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={profile.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={profile.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <button type="submit">Update Profile</button>
//       </form>
//     </div>
//   );
// };

// export default Profile;




// client/src/components/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put('/api/users/profile', profile, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Profile updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
