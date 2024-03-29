// CustomTabPanel.js
import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// export const getLastUrl = ({url}) =>{
// console.log("urlll", url);
// }

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    // const storedResUrl = sessionStorage.getItem('resUrl');

    // console.log("storedResUrl", storedResUrl)
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default CustomTabPanel;
