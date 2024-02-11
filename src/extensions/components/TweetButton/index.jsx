import React, { useEffect } from 'react';
import { Button } from '@strapi/design-system';
import Twitter from '@strapi/icons';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import { useIntl } from 'react-intl';
import { Alert } from '@strapi/design-system';

const keys = ['Name', 'Description']

const TweetButton = () => {
  const { formatMessage } = useIntl();
  const { modifiedData, layout, onChange, updateActionAllowedFields, onPublish, onPublishPromptDismissal, onUnpublish, formErrors } = useCMEditViewDataManager();
  const allowedTypes = ['restaurant', 'article'];

  // if (!allowedTypes.includes(layout.apiID)) {
  //   return <></>;
  // }

  // console.log('modifiedData', modifiedData)
  // console.log('formErrors', formErrors)
  // updateActionAllowedFields(['Name', 'seo.metaDescription'])

  // onPublish(() => console.log('Res'))

  // onChange({
  //   target: {
  //     name: `content.${lastGalleryIndex}.product`,
  //     value: [payload],
  //     type: 'select',
  //   },
  // });

  // @ts-ignore
  const base = layout?.apiID == 'restaurant' ? 'restaurants' : 'blog';

  const handleTweet = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${`${encodeURIComponent(
      modifiedData.seo.metaTitle
    )} (powered by Strapi)`}&url=${process.env.STRAPI_ADMIN_CLIENT_URL}/${base}/${modifiedData.slug
      }`;

    // @ts-ignore
    window.open(tweetUrl, '_blank').focus();
  };

  const content = {
    id: 'components.TweetButton.button',
    defaultMessage: 'TEST COMM',
  };

  useEffect(() => {
    console.log('modifiedData', modifiedData)
    // modifiedData.forEach(item => {
    //   console.log('item', item)
    // })

    keys.forEach(key => {
      const keyKavue = modifiedData?.[key]
      if (!!keyKavue && typeof keyKavue === 'string' && keyKavue.includes('-- ')) {

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

  useEffect(() => {

    if (!!Object.keys(formErrors).length) {
      // @ts-ignore
      alert('formErrors: ' + JSON.stringify(formErrors))
    }

    // console.log('formErrors', formErrors)
  }, [formErrors])

  return (
    <Button variant="secondary" onClick={handleTweet}>
      {formatMessage(content)}
    </Button>
  );
};

export default TweetButton;