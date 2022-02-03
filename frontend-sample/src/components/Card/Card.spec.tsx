import {render} from "enzyme";
import Card, {TCardData} from "./Card";


describe("Card Component", function (){
    it("Check card data", function (){
        const cardData: TCardData = {
            id: 2,
            image: "",
            name: "Zahid",
            location: {
                name: "Istanbul"
            }
        }
        const card = render(<Card data={cardData} />)
        expect(card.find(".card")).toBeDefined();
        const cardInfo = card.find(".cardInfo");
        const nameField = cardInfo.get()[0].children[1].children[0].data;
        expect(nameField).toBe("Name: Zahid");
    })
})