
import contentTypeBuilder from '../../../node_modules/@strapi/plugin-content-type-builder/strapi-admin.js';
import email from '../../../node_modules/@strapi/plugin-email/strapi-admin.js';
import upload from '../../../node_modules/@strapi/plugin-upload/strapi-admin.js';
import customField from '../../../src/plugins/custom-field/strapi-admin.js';
import cmsAnalyzer from '../../../node_modules/@exfabrica/strapi-plugin-awesome-seo/strapi-admin.js';
import seo from '../../../node_modules/@strapi/plugin-seo/strapi-admin.js';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'custom-field': customField,
  'cms-analyzer': cmsAnalyzer,
  'seo': seo,
};

export default plugins;
