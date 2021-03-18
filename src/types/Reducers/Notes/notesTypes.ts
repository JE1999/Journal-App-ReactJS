export enum NotesTypes {
    addNew = '[Notes] New Note',
    active = '[Notes] Set Active Note',
    load = '[Notes] Load Notes',
    updated = '[Notes] Updated Note',
    filesUrl = '[Notes] Updated Image Url',
    delete = '[Notes] Delete Note',
    logoutCleaning = '[Notes] Logout Cleaning',
}

export interface IPayload {
    notes: [] | INote[],
    active: null | INote
}

export interface IAction {
    type: NotesTypes,
    payload: IPayload
}

export interface INotes {
    notes: IPayload
}

export interface INote {
    id?: string,
    title: string,
    body: string,
    date: number,
    url?: string,
}