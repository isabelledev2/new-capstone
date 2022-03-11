<<<<<<< HEAD
/**
 * useQuery is a custom hook that makes use of the useLocation and the URL class to parse the query parameters.
 *
 * @example
 *
 *     const query = useQuery();
 *     const date = query.get("date")
 */

import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default useQuery;
=======
/**
 * useQuery is a custom hook that makes use of the useLocation and the URL class to parse the query parameters.
 *
 * @example
 *
 *     const query = useQuery();
 *     const date = query.get("date")
 */

import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default useQuery;
>>>>>>> c6842d8ce2a3a6fc2c01ee13f639b328a570eae5
