import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
//import {render, cleanup} from '@testing-library/react'


describe("App Component", function() {
    it("should render the App Component", function() {
        const container = shallow(<App />);
        const de = container.find(`div`);
        expect(de.length).toEqual(1);
    });

    //Testing with testing-library/react
    // afterEach(cleanup)
    // test('should generate a snapshot for app component', () => {
    //     const { asFragment } = render(<App />)
    //     expect(asFragment()).toMatchSnapshot()
    // })
});