import { useEffect } from 'react'
import { dataFromSnapshot } from '../Services/firestore/firestoreService'
import { async_start, async_error, async_finish } from '../store/asyncReducer'
import { useDispatch } from 'react-redux'

const useFirestoreDoc = ({ query, data, deps, shouldExecute = true }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (!shouldExecute) return
        dispatch(async_start())
        const unsubscribe = query().onSnapshot(
            snapshot => {
                if (!snapshot.exists) {
                    dispatch(
                        async_error({
                            code: 'not-found',
                            message: 'Could not find document',
                        })
                    )
                    return
                }
                data(dataFromSnapshot(snapshot))
                dispatch(async_finish())
            },
            error => dispatch(async_error(error))
        )
        return () => {
            unsubscribe()
        }
    }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}

export default useFirestoreDoc
