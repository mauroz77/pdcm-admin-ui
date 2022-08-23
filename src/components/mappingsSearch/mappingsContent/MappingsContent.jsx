import { Grid } from "@mui/material";
import React from "react";
import MappingCard from "../mappingCard/MappingCard";

const MappingsContent = ({ mappings, onDataChanged }) => {
  return (
    <Grid container spacing={2}>
      {mappings.map((element, index) => {
        return (
          <Grid item xs={12} key={index}>
            <MappingCard
              mappingEntity={element}
              onDataChanged={onDataChanged}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MappingsContent;
