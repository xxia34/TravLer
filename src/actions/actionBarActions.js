export function toggleWindow(visibility, windowName) {
    return {
        type: "TOGGLE_WINDOW",
        window: windowName,
        toggleVisibility: visibility
    };
}