import { useContext } from "react";

import { CollapsedContext } from "../context/CollapsedProvider";

const useCollapse = () => useContext (CollapsedContext);

export default useCollapse;