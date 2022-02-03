import {render} from "enzyme";
import CardBox from "./CardBox";


describe("CardBox Component", function () {
    it("Check Initial Data", function () {
        const component = render(<CardBox filter={['']}/>);
        // const cards = component.find(".scrollArea")
        // const test = cards.get(0)
        // expect(cards).toBe(true)
        expect(component).toMatchSnapshot()
    })
})