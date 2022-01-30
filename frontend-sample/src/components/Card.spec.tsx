import {shallow} from "enzyme";
import Card from "./Card";


describe("Card Component", function (){
    it("with No Data", function (){
        const component = shallow(<Card data={undefined} />)
        const de = component.getElements()
        const message = de[0].props.children;
        expect(message).toBe("No Data for this character");
    })
})