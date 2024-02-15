// @ts-nocheck
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { useEffect, useState } from "react";
import { Alert, Box, GridLayout, Typography } from '@strapi/design-system';

function Main() {
  const [errorsFields, setErrorsFields] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [isSingleComponent, setIsSingleComponent] = useState(false)

  const { formErrors } = useCMEditViewDataManager();

  useEffect(() => {
    if (Object.keys(formErrors).length !== 0) {
      setIsOpen(true)
      setErrorsFields(Object.keys(formErrors));
    }

  }, [formErrors])


  useEffect(()=>{
    Array.isArray(errorsFields) && errorsFields.forEach(error => {
      if(error.includes('.1.')){
        setIsSingleComponent(true)
      }else{
        setIsSingleComponent(false)
      }
  });
  },[errorsFields])

  return (
    isOpen && <Box style={{ width: 600, position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-35%)' }}>
      <Alert title="To proceed, resolve the validation errors." variant="danger" onClose={() => { setIsOpen(false) }}><br />
        <GridLayout style={{}}>

          {
            errorsFields.map((err, i) => {

              if (/\.\w+\./.test(err)) {

                  if (isSingleComponent) {
                    const part = err.split('.')
                    return <Typography key={'errors' + err + i}>{`A validation error was found in the component ${part[0]} №${+part[1] + 1}, field ${part[2]}`}</Typography>
                  } else if (err.includes('.0.')) {
                    const part = err.split('.0.')
                    return <Typography key={'errors' + err + i}>{`A validation error was found in the component ${part[0]}, field ${part[1]}`}</Typography>
                  } else {
                    return <Typography key={'errors' + err + i}>{`A validation error was found in the field ${err}`}</Typography>
                  }
  
              } else {
                return <Typography key={'errors' + err + i}>{`A validation error was found in the field ${err}`}</Typography>
              }
            })
          }
        </GridLayout>


      </Alert>
    </Box>

  );
}

export default Main;