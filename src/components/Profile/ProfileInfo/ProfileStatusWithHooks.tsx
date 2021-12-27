import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {Result} from "../../../api/api";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}


type ResponseType = {
    status: string
}

export type statusResponseType = Result<ResponseType>

export const ProfileStatusWithHooks: FC<ProfileStatusType> = React.memo(({status, updateStatus}) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [localStatus, setLocalStatus] = useState<string>(status)

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false)
        updateStatus(localStatus)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setLocalStatus(status)
    }, [status])

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
})


