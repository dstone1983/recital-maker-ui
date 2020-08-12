import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import { FormControl } from '@material-ui/core'

const CustomInput = ({ label, id, bubbleFunc }) => {
    const [value, setValue] = useState('')

    const handleSetValue = e => {
        setValue(e.target.value)
    }

    return (
        <FormControl>
            <InputLabel id={`custom-input-label-${id}`}>{label}</InputLabel>
        </FormControl>
    )
}

export default CustomInput
