const data = require("./data.json")

export const filterData = ({filter,page,pageSize, data})=>{
    const filtered = filter ? data.filter(item => {
        let take = false;
        filter.forEach((f => {
            if(item.name.includes(f))
                take = true;
        }))
        return take;
    }) : data;

    if(filtered.length <= pageSize){
        return filtered;
    }
    const startPoint = (page-1)*pageSize;
    const endPoint = filtered.length > pageSize ? startPoint + pageSize : startPoint + filtered.length;
    return filtered.slice(startPoint, endPoint);
}
const resolvers = {
    Query: {
        async characters(root, { filter, page }) {
            return filterData({filter, page,data, pageSize: 20});
        },
    },
};

export default resolvers;