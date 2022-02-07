//TODO доделать из урока про Redux


const initialState = {
    showName: true,
    name: "Sasha"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EXAMPLE_ACTION":
            console.log("action--=--")
            return {
                ...state,
                showName: !state.showName
            };
        default:
            return state;

    }
};

export default profileReducer
