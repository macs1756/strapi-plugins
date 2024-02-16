import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { useEffect, useState } from "react";

function Index() {
  const { modifiedData, updateActionAllowedFields, onChange } = useCMEditViewDataManager();
  const [keys, setKeys] = useState([])

  useEffect(()=>{
    
  },[updateActionAllowedFields])

  useEffect(() => {

    console.log(keys);

    keys.forEach(key => {
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
    })
  }, [modifiedData])

  return (null);
}

export default Index;