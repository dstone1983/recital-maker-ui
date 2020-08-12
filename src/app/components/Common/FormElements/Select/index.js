import React, { useEffect, useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 120,
        width: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

const CustomSelect = ({
    defaultValue,
    disabled,
    data,
    valueKey,
    id,
    label,
    displayKey,
    bubbleFunc,
}) => {
    const classes = useStyles()
    const [value, setValue] = useState(
        defaultValue === 0 || defaultValue ? defaultValue : ''
    )

    const handleChange = e => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if (value || value === 0) {
            bubbleFunc(value)
        }
    }, [bubbleFunc, value])

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id={`custom-select-label-${id}`}>{label}</InputLabel>
            {
                <Select
                    displayEmpty={true}
                    defaultValue={value}
                    disabled={disabled}
                    labelId={`custom-select-label-${id}`}
                    id={id}
                    onChange={handleChange}
                    value={value}
                >
                    {data.map((item, index) => {
                        return (
                            <MenuItem key={index} value={item[valueKey]}>
                                {item[displayKey]}
                            </MenuItem>
                        )
                    })}
                </Select>
            }
        </FormControl>
    )
}

export default CustomSelect
