import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { useEffect, useState } from "react";

function Index() {
  const { modifiedData, updateActionAllowedFields, onChange } = useCMEditViewDataManager();
  const [keys, setKeys] = useState([])

  useEffect(()=>{
    setKeys(updateActionAllowedFields)
  },[updateActionAllowedFields])

  useEffect(() => {

    //console.log(keys);
    //console.log(modifiedData);

    keys.forEach(key => {

      if(key.includes('.')){
        const keyParts = key.split('.')
        const keyKavueArray = modifiedData?.[keyParts[1]]

        console.log(keyParts);

        if(Array.isArray(keyKavueArray)){
          keyKavueArray.forEach(componentElement => {

            const keyKavue = componentElement.text

           

              if (!!keyKavue && typeof keyKavue === 'string' && keyKavue.includes('--')) {
                onChange({
                  target: {
                    name: key,
                    value: keyKavue.replace('--', '—'),
                    type: 'string',
                  },
                });
              }
          });
        }


      }else{
        const keyKavue = modifiedData?.[key]
        if (!!keyKavue && typeof keyKavue === 'string' && keyKavue.includes('--')) {
          onChange({
            target: {
              name: key,
              value: keyKavue.replace('--', '—'),
              type: 'string',
            },
          });
        }
      }
    


    })
  }, [modifiedData])

  return (null);
}

export default Index;