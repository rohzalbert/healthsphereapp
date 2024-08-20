


// // // client/src/components/HealthData/WorkoutPlan.js
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useAuth } from '../../context/AuthContext';

// // const WorkoutPlan = () => {
// //   const { token } = useAuth(); // Get the token from context
// //   const [workoutPlan, setWorkoutPlan] = useState([]);

// //   useEffect(() => {
// //     const fetchWorkoutPlan = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:5000/api/health-data/workout-plan', {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setWorkoutPlan(response.data.recommendations);
// //       } catch (error) {
// //         console.error('Error fetching workout plan:', error);
// //       }
// //     };

// //     fetchWorkoutPlan();
// //   }, [token]);

// //   return (
// //     <div>
// //       <h2>Workout Plan</h2>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Date</th>
// //             <th>Movement</th>
// //             <th>Variation</th>
// //             <th>Sets</th>
// //             <th>Reps</th>
// //             <th>Intensity</th>
// //             <th>Coach's Comment</th>
// //             <th>User's Comment</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {workoutPlan.length > 0 ? (
// //             workoutPlan.map((rec, index) => (
// //               <tr key={index}>
// //                 <td>{rec.date}</td>
// //                 <td>{rec.movement}</td>
// //                 <td>{rec.variation}</td>
// //                 <td>{rec.sets}</td>
// //                 <td>{rec.reps}</td>
// //                 <td>{rec.intensity}</td>
// //                 <td>{rec.coachComment}</td>
// //                 <td>{rec.userComment}</td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan="8">No recommendations available</td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default WorkoutPlan;






// // client/src/components/HealthData/WorkoutPlan.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const WorkoutPlan = () => {
//   const [workoutPlan, setWorkoutPlan] = useState('');

//   useEffect(() => {
//     const fetchWorkoutPlan = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('/api/health-data/workout-plan', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setWorkoutPlan(response.data.workoutPlan);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchWorkoutPlan();
//   }, []);

//   return (
//     <div className="workout-plan">
//       <h2>Workout Plan</h2>
//       {workoutPlan ? <p>{workoutPlan}</p> : <p>Loading...</p>}
//     </div>
//   );
// };

// export default WorkoutPlan;




// client/src/components/HealthData/WorkoutPlan.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WorkoutPlan = () => {
  const [workoutPlan, setWorkoutPlan] = useState('');

  useEffect(() => {
    const fetchWorkoutPlan = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/health-data/workout-plan', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setWorkoutPlan(response.data.workoutPlan);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWorkoutPlan();
  }, []);

  return (
    <div className="workout-plan">
      <h2>Workout Plan</h2>
      {workoutPlan ? <p>{workoutPlan}</p> : <p>Loading...</p>}
    </div>
  );
};

export default WorkoutPlan;
