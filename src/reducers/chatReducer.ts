import { Message } from "@/types/message";

type AddAction = {
    type: 'add',
    payload: {
        user: string,
        text: string
    }
}

type deleteAction = {
    type: 'delete',
    payload: {
        id: number
    }
}

type chatActions = AddAction | deleteAction

export const chatReducer = (state: Message[], action: chatActions) => {

    switch(action.type){
        case 'add':
            return [...state, {
                id: state.length,
                user: action.payload.user,
                text: action.payload.text
            }]
            break;
        case 'delete':
            return state.filter(s => s.id !== action.payload.id)
        default:
            return state
    }
}