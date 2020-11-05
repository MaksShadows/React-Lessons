import React from 'React';
import {shallow} from 'enzyme';
import TodoList from '../TodoList';
import {fetchTasksList, deleteTask} from '../tasksGateway';

jest.mock('../tasksGateway', () => {
    return {
        createTask: jest.fn(),
        updateTask: jest.fn(),
        deleteTask: jest.fn(() => Promise.resolve()),
        fetchTasksList: jest.fn(() => Promise.resolve([])),
    };
});

describe('<TodoList />', () => {
    it('should request tasks list', () => {
        shallow(<TodoList />);

        expect(fetchTasksList).toBeCalled();
    });

    it('should handle task delete', () => {
        const wrappedComponent = shallow(<TodoList />);
        const deleteHandler = wrappedComponent.find('TasksList').prop('handleTaskDelete');
        deleteHandler('some-id-87');

        expect(deleteTask).toBeCalledWith('some-id-87');
    });
});