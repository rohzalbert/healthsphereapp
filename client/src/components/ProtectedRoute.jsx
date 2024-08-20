// // src/components/ProtectedRoute.jsx
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = localStorage.getItem('token');
//   const user = JSON.parse(localStorage.getItem('user'));

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated && user && user.role === 'admin' ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;




//client/components/protectedroute 

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && user && user.role === 'admin' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
