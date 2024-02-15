import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { useEffect } from "react";


function Main() {


  const { modifiedData, layout } = useCMEditViewDataManager();
  console.log(layout);

  return (null);
}

export default Main;