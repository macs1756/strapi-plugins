// @ts-nocheck
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { useEffect, useState } from "react";
import { Alert, Box, Typography } from '@strapi/design-system';

function Main() {
  const [errorsFields, setErrorsFields] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  const { modifiedData, layout, onChange, updateActionAllowedFields, onPublish, onPublishPromptDismissal, onUnpublish, formErrors } = useCMEditViewDataManager();

  useEffect(() => {
    if (Object.keys(formErrors).length !== 0) {
      setIsOpen(true)
      setErrorsFields(Object.keys(formErrors).toString())
    }

  }, [formErrors])

  return (
    isOpen && <Box style={{ width: 600, position: 'fixed', top: '15%', left: '50%', transform: 'translateX(-35%)' }}>
      <Alert title="To proceed, resolve the validation errors." variant="danger" onClose={()=>{setIsOpen(false)}}><br/>
        <Box style={{display: 'block', width: '100%'}}>{errorsFields}</Box>
      </Alert>
    </Box>

  );
}

export default Main;