import { prefixPluginTranslations } from '@strapi/helper-plugin';
// @ts-ignore
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import PluginIcon from './components/PluginIcon';
import DmInput from './components/DmInput'

const name = pluginPkg.strapi.name;

export default {
  register(app) {

    app.customFields.register({
      name: "text-ai",
      pluginId: "dminput",
      type: "string",
      intlLabel: {
        id: "ai-text-generation.text-ai.label",
        defaultMessage: "Text AI",
      },
      intlDescription: {
        id: "ai-text-generation.text-ai.description",
        defaultMessage: "Let AI do your writing!",
      },
      icon: PluginIcon,
      components: {
        Input: DmInput,
      },
      options: {
      },
    });
  },



  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        // @ts-ignore
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};