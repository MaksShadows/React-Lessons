import React from 'react';
import {shallow} from 'enzyme';
import Task from '../Task';

describe('<Task />', () => {
    it('sould display done task', () => {
        const props = {
            text: 'Task 1',
            id: 'id-1',
            done: true,
            onChange: jest.fn(),
            onDelete: jest.fn(),
        };
        const wrappedComponent = shallow(<Task { ...props } />);

        expect(wrappedComponent).toMatchSnapshot();
    });

    it('sould display undone task', () => {
        const props = {
            text: 'Task 1',
            id: 'id-1',
            done: false,
            onChange: jest.fn(),
            onDelete: jest.fn(),
        };
        const wrappedComponent = shallow(<Task { ...props } />);

        expect(wrappedComponent).toMatchSnapshot();
    });

    it('sould update task on checkbox checked', () => {
        const props = {
            text: 'Task 1',
            id: 'id-1',
            done: false,
            onChange: jest.fn(),
            onDelete: jest.fn(),
        };
        const wrappedComponent = shallow(<Task { ...props } />);
        wrappedComponent.find('.list-item__checkbox')
            .simulate('change');

        expect(props.onChange).toBeCalledWith('id-1');
    });

    it('sould delete task', () => {
        const props = {
            text: 'Task 1',
            id: 'id-1',
            done: false,
            onChange: jest.fn(),
            onDelete: jest.fn(),
        };
        const wrappedComponent = shallow(<Task { ...props } />);
        wrappedComponent.find('.list-item__delete-btn')
            .simulate('click');

        expect(props.onDelete).toBeCalledWith('id-1');
    });
});
