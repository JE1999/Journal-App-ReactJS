import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import NotesAppBar from './NotesAppBar'
import AppInput from '../Input/AppInput'

import { activeNoteAction, startDeletingAction, startSaveNoteAction } from '../../actions/Notes/notesAction';
import { INotes } from '../../types/Reducers/Notes/notesTypes'

interface IFormInputs {
    title: string;
    body: string;
}

const schema = yup.object().shape({
    title: yup.string().required().trim(),
    body: yup.string().required().trim(),
});

const Notes = () => {

    const dispatch = useDispatch()

    const { active: noteActive } = useSelector((state: INotes) => state.notes)

    const { register, errors, reset, watch } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const activeNoteId = useRef<string | undefined>(noteActive?.id)

    useEffect(() => {

        if(noteActive?.id !== activeNoteId.current){
            reset({...noteActive})
            activeNoteId.current = noteActive?.id
        }
        
    },[noteActive, reset])
    
    const saveNote = () => {
        dispatch(activeNoteAction(noteActive?.id, {date: noteActive?.date, ...watch()}))
        dispatch(startSaveNoteAction({id: noteActive?.id, date: noteActive?.date, ...watch()}))
    }

    const handleDelete = () => {
        dispatch(startDeletingAction(noteActive?.id))
    }

    return (
        <div className="notes__main-content">

            <NotesAppBar 
                saveNote={saveNote}
            />

            <div className="notes__content">

                <AppInput
                    className="notes__title-input" 
                    type="text"
                    placeholder="Some awesome title"
                    name="title"
                    autoFocus={false}
                    register={register}
                    messageError={errors.title?.message}
                    value={noteActive?.title}
                />

                <textarea 
                    placeholder="What happened today?"
                    className="notes__textarea"
                    name="body"
                    ref={register}
                    defaultValue={noteActive?.body}
                />

                {noteActive?.url &&
                    <div className="notes__image">
                        <img 
                            src={noteActive.url}
                            alt="imagen"
                        />
                    </div>
                }


            </div>

            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>

        </div>
    )
}

export default Notes
