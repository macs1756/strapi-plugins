module.exports = (plugin) => {
    
    let originalPublish = plugin.controllers['collection-types'].publish;

    plugin.controllers['collection-types'].publish = async (ctx) => {
        try {
          
            console.log(ctx) 
            const result = await originalPublish(ctx);
           
            return result;
        } catch (error) {
            
            throw error;
        }
    };

    return plugin;
};
