import React from "react";

import AppTemplate from "@templates/AppTemplate";
import CheeseCards from "@organisms/CheeseCards";
import CircularProgressCentered from "@molecules/CircularProgressCentered";
import useCheeses from "@hooks/useCheeses";

const HomePage = () => {
  const { isLoading, data } = useCheeses();
  const cheeses = data || [];
  return (
    <AppTemplate>
      {isLoading ? <CircularProgressCentered message="loading..." /> : <CheeseCards cheeses={cheeses} />}
    </AppTemplate>
  );
};

export default HomePage;
