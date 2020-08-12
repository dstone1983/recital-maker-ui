import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

const students = [
    {
        student_id: 1,
        name: 'Dustin',
    },
    {
        student_id: 2,
        name: 'Yinyin',
    },
    {
        student_id: 3,
        name: 'Cayden',
    },
]

const StudentList = () => {
    const classes = useStyles()
    const musicians = useSelector(state => state.musicians.musician_list)
    const [selectedStudent, setSelectedStudent] = useState('')

    const handleChange = e => {
        console.log(e)
        setSelectedStudent(e.target.value)
    }
    console.log(musicians)

    if (musicians.length === 0) {
        return (
            <>
                <p>Add a musician</p>
            </>
        )
    }

    return (
        <>
            {musicians.length > 0 && (
                <FormControl className={classes.formControl}>
                    <InputLabel id="student-select-label">Student</InputLabel>
                    {
                        <Select
                            labelId="student-select-label"
                            id="student-select"
                            onChange={handleChange}
                            value={selectedStudent}
                        >
                            {musicians.map(musician => {
                                return (
                                    <MenuItem
                                        key={`${musician.name}${musician.musician_id}`}
                                        value={musician.musician_id}
                                    >
                                        {musician.name}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    }
                </FormControl>
            )}
        </>
    )
}

export default StudentList
