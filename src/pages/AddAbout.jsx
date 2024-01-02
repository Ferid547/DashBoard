// import Sidenav from "../components/SideNav";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Box from "@mui/material/Box";
// import Navbar from "../components/NavBar";
// import Button from "@mui/material/Button";

// const About = () => {
//   const [selectedOption, setSelectedOption] = useState(0);
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     setSelectedOption(parseInt(event.target.value));
//     setOpen(!open);
//   };

//   const renderOptionInput = (labelText) => (
//     <Box style={{ borderBottom: "none" }}>
//       <label className="label" htmlFor="grid-first-name">
//         {labelText}
//       </label>
//       <input className="input" id="grid-first-name" type="text" />
//     </Box>
//   );

//   return (
//     <>
//       <Navbar />
//       <Box sx={{ display: "flex", height: "100vh" }}>
//         <Sidenav />
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <Box>
//             <h1>Məlumat daxil edin</h1>
//             <Box className="form">
//               <Box>
//                 <label className="label" htmlFor="category-select">
//                   Təsnifatı seçin
//                 </label>
//                 <select
//                   className="input"
//                   id="category-select"
//                   onChange={handleChange}
//                   value={selectedOption}
//                 >
//                   <option value={0}>------------ Seçin ------------</option>
//                   <option value={1}>Gəlir</option>
//                   <option value={2}>Xərc</option>
//                   <option value={3}>Borc</option>
//                 </select>
//                 {selectedOption === 1 && renderOptionInput("Gəlir")}
//                 {selectedOption === 2 && renderOptionInput("Xərc")}
//                 {selectedOption === 3 && renderOptionInput("Borc")}
//               </Box>
//               <Box>
//                 <label className="label" htmlFor="description-input">
//                   Təsvir
//                 </label>
//                 <input className="input" id="description-input" type="text" />
//               </Box>
//               <Box>
//                 <label className="label" htmlFor="amount-input">
//                   Məbləğ
//                 </label>
//                 <input className="input" id="amount-input" type="number" />
//               </Box>
//               <Box>
//                 <label className="label" htmlFor="date-input">
//                   Tarix
//                 </label>
//                 <input
//                   defaultValue={new Date().toISOString().substring(0, 10)}
//                   style={{ textAlign: "center" }}
//                   type="date"
//                   className="input"
//                   id="date-input"
//                 />
//               </Box>
//               <Button
//                 className="button1"
//                 variant="contained"
//                 onClick={() => {
//                   navigate("/hesab");
//                 }}
//               >
//                 Məlumatı daxil et
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default About;
