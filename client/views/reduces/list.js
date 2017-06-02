export default (state = { todos: [1, 2, 3] }, action) => {
    switch (action.type) {
    case 'LIST':
        return state;
    default:
        return state;
    }
};
