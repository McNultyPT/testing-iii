import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Display from './Display.js';

describe('<Display />', () => {
    it('render without crashing', () => {
        render(<Display />)
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<Display />);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should be red when closed', () => {
        const { getByText } = render(<Display closed={true} />);

        const closed = getByText(/closed/i);

        expect(closed).toHaveClass('led red-led');
    });

    it('should be green when open', () => {
        const { getByText } = render(<Display />);

        const open = getByText(/open/i);

        expect(open).toHaveClass('led green-led');
    });

    // it('should be red when locked', () => {
    //     const { getByText, getByTestId } = render(<Display locked={true} />);

    //     const locked = getByTestId('locked');

    //     expect(locked).toHaveClass('led red-led');
    // });

    it('should be green when unlocked', () => {
        const { getByText } = render(<Display />);

        const unlocked = getByText(/unlocked/i);

        expect(unlocked).toHaveClass('led green-led');
    });


});
