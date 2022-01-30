import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
//import {render, cleanup} from '@testing-library/react'


//This basically describes the test. It requires two parameters, like the name of the test and a function that holds the entire test.
describe("App Component", function() {
    it("should render the App Component", function() {
        const container = shallow(<App />);
        const de = container.find(`div`);
        //Condition needed to pass the test. Expect condition will compare the received parameter to a matcher.
        expect(de.length).toEqual(1);
    });

    //Testing with testing-library/react
    // afterEach(cleanup)
    // test('should generate a snapshot for app component', () => {
    //     const { asFragment } = render(<App />)
    //     expect(asFragment()).toMatchSnapshot()
    // })
});