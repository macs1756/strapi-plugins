// @ts-nocheck
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { useEffect, useState } from "react";
import { Alert, Box, GridLayout, Typography } from '@strapi/design-system';

function Main() {
  const [errorsFields, setErrorsFields] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  const { modifiedData, layout, onChange, updateActionAllowedFields, onPublish, onPublishPromptDismissal, onUnpublish, formErrors } = useCMEditViewDataManager();

  useEffect(() => {
    if (Object.keys(formErrors).length !== 0) {
      setIsOpen(true)
      setErrorsFields(Object.keys(formErrors));
    }

  }, [formErrors])

  return (
    isOpen && <Box style={{ width: 600, position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-35%)' }}>
      <Alert title="To proceed, resolve the validation errors." variant="danger" onClose={() => { setIsOpen(false) }}><br />
        <GridLayout style={{}}>

          {
            errorsFields.map((e, i) => {

              if (/\.\w+\./.test(e)) {
                const part = e.split('.')
                return <Typography key={'errors' + e + i}>{`A validation error was found in the component №${+part[1] + 1} ${part[0]}, field ${part[2]}`}</Typography>

              } else {
                return <Typography key={'errors' + e + i}>{`A validation error was found in the field ${e}`}</Typography>
              }
            })
          }
        </GridLayout>


      </Alert>
    </Box>

  );
}

export default Main;