export const reducer_counter = (state, action) => {
    switch (action) {
        case "add":
            return state + 1;
        case "subtract":
            return state - 1;
        case "reset":
            return 0;
        default:
            return state;
    }
};
export const init_state_theme = "light"
export const reducer_theme = (state = init_state_theme, action) => {
    switch (action.type) {
        case "dark":
            return action.payload
        case "light":
            return action.payload
        default:
            return state
    }
}