import React from "react";
import Box from "@mui/material/Box";

const List = (props) => {
  let arrayList = props.dataType.map((element, index) => {
    return (
      <Box
        sx={{
          height: "28vh",
          width: "18vw",
          border: 2,
          mb: 2,
          borderRadius: 5,
          "&:hover": {
            backgroundColor: "#1A1A1A",
            color: "#ffffff",
          },
        }}
        key={index}
      >
        <h4>{`${element.description}`}</h4>
        <h4>{`$${element.amount}`}</h4>
        <h5>{`${element.date}`}</h5>
      </Box>
    );
  });
  return arrayList;
};

export default List;
