// import React from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import SideNav from "../components/SideNav";
// import Table from "../components/Table";
// import Box from "@mui/material/Box";
// import Navbar from "../components/NavBar";
// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";


// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// const Hesab = () => {
//   const navigate = useNavigate();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <>
//       <Navbar />
//       <Box sx={{ display: "flex" }}>
//         <SideNav />
//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <h1>Maliyyə hesabatları</h1>
//           <Button
//             className="buttonNav"
//             onClick={() => {
//               navigate("/about");
//             }}
            
//             variant="contained"
//           >
//             Məlumat daxil et
//           </Button>
//           <Box sx={{ width: "100%" }}>
//             <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//               <Tabs value={value} onChange={handleChange}>
//                 <Tab label="Gəlir" {...a11yProps(0)} />
//                 <Tab label="Xərc" {...a11yProps(1)} />
//                 <Tab label="Borc" {...a11yProps(2)} />
//               </Tabs>
//             </Box>
//             <CustomTabPanel sx={{ heigth: "10px" }} value={value} index={0}>
//               <Table />
//             </CustomTabPanel>
//             <CustomTabPanel value={value} index={1}>
//               <Table />
//             </CustomTabPanel>
//             <CustomTabPanel value={value} index={2}>
//               <Table />
//             </CustomTabPanel>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Hesab;
