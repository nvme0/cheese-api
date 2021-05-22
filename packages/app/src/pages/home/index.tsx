import React from "react";

import AppTemplate from "@templates/AppTemplate";
import CheeseCards from "@organisms/CheeseCards";
import cheeses from "@app/__MOCKS__/cheeses";

const HomePage = () => {
  return (
    <AppTemplate>
      <CheeseCards cheeses={cheeses} />
    </AppTemplate>
  );
};

export default HomePage;
