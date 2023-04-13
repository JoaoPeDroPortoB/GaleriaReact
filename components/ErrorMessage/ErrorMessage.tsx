import React, { useCallback, useState } from 'react'
import * as C from './style'

type Props = {
    message: string;
}

export const ErrorMessage = ({ message }: Props) => {

    const [showError, setShowError] = useState(true)
    setTimeout(() => setShowError(false), 3000);
    return (
        <C.Container showError={showError}>
            {message}
        </C.Container>
    )
}