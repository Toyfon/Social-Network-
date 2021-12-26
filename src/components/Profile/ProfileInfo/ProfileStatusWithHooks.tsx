import React, {ChangeEvent, FC, useState} from "react";
import {Result} from "../../../api/api";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


type ResponseType = {
    status: string
}

export type statusResponseType = Result<ResponseType>

export const ProfileStatusWithHooks: FC<ProfileStatusType> = ({status, updateStatus}) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [localStatus, setLocalStatus] = useState<string>(status)

    const activateMode = () => {
        setEditMode(true)
        updateStatus(localStatus)
    }
    const deactivateMode = () => {
        setEditMode(false)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    return <div>
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateMode}>{status || 'no status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    onBlur={deactivateMode}
                    autoFocus
                    value={localStatus}/>
            </div>
            }
        </div>


    </div>

}


