import { useQuery } from "react-query";

import { getCheeses } from "@app/api";
import { Cheese } from "@app/types";
import SnackbarUtils from "@utils/SnackbarUtils";

const useCheeses = () =>
  useQuery<Cheese[]>({
    queryKey: ["cheeses"],
    queryFn: getCheeses,
    onSuccess: () => {
      SnackbarUtils.success("Fetched cheeses from Server");
    },
    onError: () => {
      SnackbarUtils.error("Unable to fetch cheeses");
    },
  });

export default useCheeses;
