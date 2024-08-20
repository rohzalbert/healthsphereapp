


// // // client/src/components/HealthData/DietPlan.js
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useAuth } from '../../context/AuthContext';

// // const DietPlan = () => {
// //   const { token } = useAuth(); // Get the token from context
// //   const [dietPlan, setDietPlan] = useState([]);

// //   useEffect(() => {
// //     const fetchDietPlan = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/health-data/diet-plan', {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setDietPlan(response.data.recommendations);
// //       } catch (error) {
// //         console.error('Error fetching diet plan:', error);
// //       }
// //     };

// //     fetchDietPlan();
// //   }, [token]);

// //   return (
// //     <div>
// //       <h2>Diet Plan</h2>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Date</th>
// //             <th>Breakfast</th>
// //             <th>Lunch</th>
// //             <th>Dinner</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {dietPlan.length > 0 ? (
// //             dietPlan.map((rec, index) => (
// //               <tr key={index}>
// //                 <td>{rec.date}</td>
// //                 <td>{rec.breakfast}</td>
// //                 <td>{rec.lunch}</td>
// //                 <td>{rec.dinner}</td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan="4">No recommendations available</td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default DietPlan;





// // // client/src/components/HealthData/DietPlan.js
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const DietPlan = () => {
// //   const [dietPlan, setDietPlan] = useState('');

// //   useEffect(() => {
// //     const fetchDietPlan = async () => {
// //       try {
// //         const token = localStorage.getItem('token');
// //         const response = await axios.get('/api/health-data/diet-plan', {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setDietPlan(response.data.dietPlan);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchDietPlan();
// //   }, []);

// //   return (
// //     <div className="diet-plan">
// //       <h2>Diet Plan</h2>
// //       {dietPlan ? <p>{dietPlan}</p> : <p>Loading...</p>}
// //     </div>
// //   );
// // };

// // export default DietPlan;




// import React, { useEffect, useState } from 'react';
// import { getDietPlan } from '../../api/healthData';

// const DietPlan = () => {
//   const [dietPlan, setDietPlan] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDietPlan = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await getDietPlan(token);
//         setDietPlan(response.dietPlan);
//       } catch (error) {
//         setError('Failed to fetch diet plan');
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDietPlan();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="diet-plan">
//       <h2>Diet Plan</h2>
//       {dietPlan ? <p>{dietPlan}</p> : <p>No diet plan available</p>}
//     </div>
//   );
// };

// export default DietPlan;




// client/src/components/HealthData/DietPlan.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DietPlan = () => {
  const [dietPlan, setDietPlan] = useState('');

  useEffect(() => {
    const fetchDietPlan = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/health-data/diet-plan', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDietPlan(response.data.dietPlan);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDietPlan();
  }, []);

  return (
    <div className="diet-plan">
      <h2>Diet Plan</h2>
      {dietPlan ? <p>{dietPlan}</p> : <p>Loading...</p>}
    </div>
  );
};

export default DietPlan;
