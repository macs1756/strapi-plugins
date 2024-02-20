
export default ({ strapi }) => {
  strapi.customFields.register({
    name: 'text-ai',
    plugin: 'dminput',
    type: 'string',
  });
};
