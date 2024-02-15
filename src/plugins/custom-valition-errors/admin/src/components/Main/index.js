// @ts-nocheck
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { useEffect, useState } from "react";
import { Alert } from '@strapi/design-system';

function Main() {
  const [errorsFields, setErrorsFields] = useState()

  const { modifiedData, layout, onChange, updateActionAllowedFields, onPublish, onPublishPromptDismissal, onUnpublish, formErrors } = useCMEditViewDataManager();

  useEffect(() => {
    if (Object.keys(formErrors).length !== 0) {
      setErrorsFields(JSON.stringify(formErrors).toString())
    }

  }, [formErrors])

  return (
    errorsFields &&
    <Alert closeLabel="Close" title="This is the title of the alert" action=''>
      {errorsFields}
    </Alert>
  );
}

export default Main;