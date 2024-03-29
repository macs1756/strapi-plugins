import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { TextInput } from '@strapi/design-system/TextInput';
import { Stack } from '@strapi/design-system/Stack';
import { Button } from '@strapi/design-system/Button';
import { Textarea } from '@strapi/design-system';
import { auth } from '@strapi/helper-plugin'


export default function Index({
  name,
  error,
  description,
  onChange,
  value,
  intlLabel,
  attribute,
}) {
  // const { formatMessage } = useIntl();
  // const [prompt, setPrompt] = useState('');
  // const [err, setErr] = useState('');

  // const generateText = async () => {
  //   try {
  //     const response = await fetch(`/ai-text-generation/generate-text`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${auth.getToken()}`
  //       },
  //       body: JSON.stringify({
  //         'model': 'text-davinci-001',
  //         'prompt': `${prompt}`,
  //         'temperature': 0.4,
  //         'max_tokens': 64,
  //         'top_p': 1,
  //         'frequency_penalty': 0,
  //         'presence_penalty': 0
  //       })
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     const parsedResult = result.choices[0].text.replace(/(?:\r\n|\r|\n)/g, '');

  //     onChange({ target: { name, value: parsedResult, type: attribute.type } })
  //   } catch (err) {
  //     setErr(err?.message);
  //   }
  // }

  // const clearGeneratedText = async () => {
  //   onChange({ target: { name, value: '', type: attribute.type } })

  // }

  const setText = (e) => {
    const preparedText = e.replace('-- ', '—')
    onChange({ target: { name, value: preparedText, type: attribute.type } })
  }

  return (
    <Stack spacing={1}>
      <TextInput
        placeholder="Please write a prompt for content to generate"
        label={name}
        name={name}
        onChange={(e) => setText(e.target.value)}
        value={value}
      />
      {/* <Stack padding={4} spacing={2}>
        <Textarea
          placeholder="Generated text"
          label="Content"
          name="content"
          onChange={(e: any) =>
            onChange({
              target: { name, value: e.target.value, type: attribute.type },
            })
          }
        >
          {value}
        </Textarea>
        <Stack horizontal spacing={4}>
          <Button onClick={() => generateText()}>Generate</Button>
          <Button onClick={() => clearGeneratedText()}>Clear</Button>
        </Stack>
      </Stack> */}
    </Stack>
  )
}