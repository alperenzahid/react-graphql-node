import {shallow} from "enzyme";
import CardFilter from "./CardFilter";

const onClose = jest.fn();
describe("Card Filter Component", function () {
    it("Snapshot Test", function () {
        const component = shallow(<CardFilter filter={[""]} onClose={onClose}/>);
        const rick = component.find(".cfOption").first();
        rick.simulate('click')
        const closeButton = component.find(".cfClose");
        closeButton.simulate('click')
        expect(onClose).toHaveBeenCalledWith(["Rick"])
    })
})