import React, { useState } from 'react'
import HeaderInputs from '../HeaderInputs'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    headline: {
        margin: '5px 0',
        lineHeight: '1em',
    },
})

const EditableHeaderSections = ({
    value,
    setValue,
    headingLevel,
    dispatchAction,
    styles,
}) => {
    const classes = useStyles()
    const [isEdit, setIsEdit] = useState(false)

    const Title = headingLevel

    const handleDispatch = () => {
        setIsEdit(false)
        dispatchAction()
    }

    return (
        <>
            {!isEdit ? (
                <div onClick={() => setIsEdit(true)}>
                    <Title className={classes.headline} style={styles}>
                        {value}
                    </Title>
                </div>
            ) : (
                <HeaderInputs
                    setInput={setValue}
                    defaultValue={value}
                    dispatchAction={handleDispatch}
                />
            )}
        </>
    )
}

export default EditableHeaderSections
