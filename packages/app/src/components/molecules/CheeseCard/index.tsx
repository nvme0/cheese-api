import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";
import centsToDollars from "@utils/centsToDollars";

export interface Props {
  title: string;
  imageUrl?: string;
  color: string;
  pricePerKilo: number;
}

const CheeseCard = (props: Props) => {
  const { title, imageUrl, color, pricePerKilo } = props;
  const classes = useStyles();

  const dollarsPerKilo = centsToDollars(pricePerKilo);

  return (
    <Card>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageUrl} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Grid container>
            <Grid item xs={12}></Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body1" component="p">
              Color: {color}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="p">
              Price Per Kilo: ${dollarsPerKilo}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CheeseCard;
