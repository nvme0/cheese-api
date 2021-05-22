import React from "react";
import { Box } from "@material-ui/core";

import useStyles from "./styles";
import { Cheese } from "@app/types";
import CheeseCard from "@molecules/CheeseCard";

export interface Props {
  cheeses: Cheese[];
}

const CheeseCards = (props: Props) => {
  const { cheeses } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {cheeses.map(({ id, name, color, imageUrl, pricePerKilo }) => (
        <CheeseCard key={id} title={name} color={color} imageUrl={imageUrl} pricePerKilo={pricePerKilo} />
      ))}
    </Box>
  );
};

export default CheeseCards;
