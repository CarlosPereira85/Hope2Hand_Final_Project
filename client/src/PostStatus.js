// // import axios from "axios";
// // import { useState } from "react";

// const PostStatus = () => {
//     const [lastActive, setLastActive] = useState([Date.now()]);
//     const [numbers, setNumbers] = useState("");
//     const [message, setMessage] = useState(false);

// localStorage.setItem(token)

    
// //     const config = {
// //       headers: { Authorization: `Bearer ${token}` }
// //   };
  
// //   const bodyParameters = {
// //      key: "value"
// //   };
  
// //   axios.post( 
// //     'https://hopetohands-wais.herokuapp.com/poststatus/token',
// //     bodyParameters,
// //     config
// //   ).then(console.log).catch(console.log);

//   //   const config = {
//   //     headers: { Authorization: `Bearer ${token}` }
//   // };
  
//   // const bodyParameters = {
//   //    key: "value"
//   // };
  
//   // Axios.post( 
//   //   'https://hopetohands-wais.herokuapp.com/poststatus',
//   //   bodyParameters,
//   //   config
//   // ).then(console.log).catch(console.log);

//     const postRequestHandler = async (id) => {
//       const data = { lastActive, numbers };
//       const response = await axios.post(
//         `https://hopetohands-wais.herokuapp.com/poststatus/${id}` ,
//         data,
//       );
//       console.log(response.data.data, id);
//       setMessage(true);
//       setLastActive("");
//       setNumbers("");
     
//     };
  
// //     // const removeStatus = async (id) => {
// //     //   try {
// //     //     await axios.delete(`https://hopetohands-wais.herokuapp.com/deletestatus/${id}`);
// //     //     console.log("USer deleted! ", id);
// //     //     postRequestHandler();
// //     //   } catch (error) {
// //     //     alert(error);
// //     //   }
// //     // };
  
// //     return (
// //       <>
      
// //       <div>
// //       <input
// //         onChange={(e) => setLastActive(e.target.value)}
// //         value={lastActive}
// //         type="data"
// //         placeholder="lastActive"
// //       />
// //       <input
// //         onChange={(e) => setNumbers(e.target.value)}
// //         value={numbers}
// //         type="number"
// //         placeholder="number"
// //       />
// //       <button onClick={postRequestHandler}>Insert</button>
// //       <hr />
// //       {message ? (
// //         <h3 style={{ color: "green" }}>Data inserted successfully!</h3>
// //       ) : (
// //         ""
// //       )}
// //       </div>
   
// //       </>
// //     );
// //   };
  
//   export default PostStatus;