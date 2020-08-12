import { useEffect } from 'react'
import { dataFromSnapshot } from '../Services/firestore/firestoreService'
import { useDispatch } from 'react-redux'
import { async_error, async_finish, async_start } from '../store/asyncReducer'

const useFirestoreCollection = ({ query, data, deps }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(async_start())
        const unsubscribe = query().onSnapshot(
            snapshot => {
                const docs = snapshot.docs.map(doc => dataFromSnapshot(doc))
                data(docs)
                dispatch(async_finish())
            },
            error => dispatch(async_error(error))
        )
        return () => {
            unsubscribe()
        }
    }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}

export default useFirestoreCollection
