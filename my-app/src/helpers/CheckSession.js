import { useQuery } from "@apollo/client";

import { CHECK_SESSION } from "../services/GraphQL/mutations/auth";

const CheckSession = () => {
  const { data } = useQuery(CHECK_SESSION);
  return data;
};

export default CheckSession;
