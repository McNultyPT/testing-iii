import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard.js';
import Controls from '../controls/Controls.js'

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />)
    });

    describe('toggleLocked()', () => {
        it('it toggles when clicked', () => {
            const { getByTestId, queryByText, getByText } = render(<Controls />);

            const button1 = getByTestId('toggleLock');
            const button2 = getByTestId('toggleOpen');
            expect(getByTestId('toggleLock')).toHaveTextContent('Lock Gate');

            fireEvent.click(button2);
            fireEvent.click(button1);
            expect(getByTestId('toggleLock')).toHaveTextContent('Unlock Gate');
        });
    });
});
