import { Action } from "./action";
import { ActionType } from "./action-type";
import { AppState } from "./app-state";


let initialValue = new AppState();
export function reduce(state: AppState = initialValue, action: Action): AppState {

    let newAppState = { ...state }

    switch (action.type) {
        case ActionType.getMessage:
            newAppState.message = action.payload
    }

    return newAppState

}
export default reduce