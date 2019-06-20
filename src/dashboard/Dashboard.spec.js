import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard.js';
import Controls from '../controls/Controls.js'

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />)
    });

    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);

        expect(tree.toJSON()).toMatchSnapshot();
    });

    describe('toggleLocked()', () => {
        it('it toggles when clicked', () => {
            const { getByTestId } = render(<Controls />);

            const button1 = getByTestId('toggleLock');
            const button2 = getByTestId('toggleOpen');
            expect(getByTestId('toggleLock')).toHaveTextContent('Lock Gate');

            fireEvent.click(button2);
            fireEvent.click(button1);
            expect(getByTestId('toggleLock')).toHaveTextContent('Unlock Gate');
        });
    });

    // describe('toggleClosed()', () => {
    //     it('it toggles when clicked', () => {
    //         const { getByTestId } = render(<Controls closed={false} />);

    //         const button1 = getByTestId('toggleLock');
    //         const button2 = getByTestId('toggleOpen');
    //         expect(getByTestId('toggleOpen')).toHaveTextContent('Close Gate');

    //         fireEvent.click(button2);
    //         expect(getByTestId('toggleOpen')).toHaveTextContent('Open Gate');
    //     });
    // });
});
