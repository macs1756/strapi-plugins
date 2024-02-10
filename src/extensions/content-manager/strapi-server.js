
module.exports = (plugin) => {


    const originalCreate = plugin.controllers['collection-types'].create;
    plugin.controllers['collection-types'].create = async (ctx) => {
        try {
            let jsonString = JSON.stringify(ctx.request.body); 
            jsonString = jsonString.replace(/--/g, '—');
            const updatedRequestBody = JSON.parse(jsonString);
            ctx.request.body = updatedRequestBody;

            const createdData = await originalCreate(ctx);
            return createdData;
        } catch (error) {
            console.error('Error creating data:', error);
            throw error;
        }
    };

    return plugin;
};
