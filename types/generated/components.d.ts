import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface UiButton extends Schema.Component {
  collectionName: 'components_main_buttons';
  info: {
    displayName: 'Button';
    icon: 'apps';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    type: Attribute.Enumeration<['border', 'no-border']>;
  };
}

export interface UiReviews extends Schema.Component {
  collectionName: 'components_ui_reviews';
  info: {
    displayName: 'Reviews';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    username: Attribute.String & Attribute.Required;
    body: Attribute.String & Attribute.Required;
    avatar: Attribute.Media;
  };
}

export interface UiTest extends Schema.Component {
  collectionName: 'components_ui_tests';
  info: {
    displayName: 'test';
    icon: 'check';
  };
  attributes: {
    test: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'ui.button': UiButton;
      'ui.reviews': UiReviews;
      'ui.test': UiTest;
    }
  }
}
