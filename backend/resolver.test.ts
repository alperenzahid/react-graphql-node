import {filterData} from "./resolver";

test("It checks filter mechanism of characters", () => {
    const data = [{name: "kevin"},{name: "johnny"},{name: "jessica"},{name: "albert"}];
    const filtered = filterData({filter: ['john'], page: 2, pageSize: 2, data})
    expect(filtered[0].name).toBe("johnny");
    const filtered2 = filterData({filter: ['kevin'], page: 2, pageSize: 1, data})
    expect(filtered2[0].name).toBe("kevin");
    const filtered3 = filterData({filter: ['noway'], page: 2, pageSize: 1, data})
    expect(filtered3.length).toBe(0);
});