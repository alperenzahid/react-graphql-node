const data = require("./data.json")
const resolvers = {
    Query: {
        async characters(root, { filter, page }) {

            const filtered = filter ? data.filter(item => {
                let take = false;
                 filter.forEach((f => {
                         if(item.name.includes(f))
                             take = true;
                     }))
                 return take;
            }) : data;

            const startPoint = (page-1)*20;
            const endPoint = filtered.length > 20 ? startPoint + 20 : startPoint + filtered.length;
            return filtered.slice(startPoint, endPoint);
        },
    },
};
export default resolvers;
//module.exports = resolvers;