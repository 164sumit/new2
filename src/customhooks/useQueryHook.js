import React from 'react'
import {useLocation} from "react-router-dom"

function useQueryHook() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search])
}

export default useQueryHook
