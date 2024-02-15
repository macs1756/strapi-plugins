import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { useEffect } from "react";

function Index() {

  const { modifiedData, layout, onChange, updateActionAllowedFields, onPublish, onPublishPromptDismissal, onUnpublish, formErrors } = useCMEditViewDataManager();

  useEffect(()=> {
      console.log(modifiedData);
  }, [modifiedData])

  return (null);
}

export default Index;