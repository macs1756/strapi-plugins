
module.exports = (plugin) => {
    const controller = plugin.controllers['collection-types'];

    // Save the original create controller action
    controller.strapiCreate = controller.create;

    // extend action create
    controller.create = async (ctx) => {
       console.log('WORKING...')
    };

    return plugin;
};