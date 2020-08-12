import React, { useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    update_headline,
    update_subHeadline,
} from '../../../store/templateReducer'
import { useDispatch } from 'react-redux'
import EditableHeaderSections from './EditableHeaderSection'

const useStyles = makeStyles({
    headline: {
        margin: '5px 0',
        lineHeight: '1em',
    },
    headlineInput: {
        width: '75%',
    },
    subHeadline: {
        margin: '5px 0',
        lineHeight: '1em',
    },
    dateTime: {
        margin: '5px 0 20px',
        lineHeight: '.6em',
    },
})

const DateTime = ({ date, time, isItalic, fontSize, isBold }) => {
    const dateTimeStyle = {
        fontSize: fontSize,
        fontStyle: isItalic ? 'italic' : 'inherit',
        fontWeight: isBold ? 'bold' : 'normal',
    }

    return <span style={dateTimeStyle}>{`${date} ${time}`}</span>
}

const RecitalHeader = ({ headline, subHeadline, dateTime, sameLine }) => {
    const dispatch = useDispatch()
    const headlineRef = useRef()
    const classes = useStyles()
    const [headlineValue, setHeadlineValue] = useState(headline.value)
    const [subHeadlineValue, setSubHeadlineValue] = useState(subHeadline.value)

    const headlineStyles = {
        fontSize: headline.fontSize,
        fontStyle: headline.isItalic ? 'italic' : 'inherit',
        fontWeight: headline.isBold ? 'bold' : 'normal',
    }

    const subHeadlineStyle = {
        fontSize: subHeadline.fontSize,
        fontStyle: subHeadline.isItalic ? 'italic' : 'inherit',
        fontWeight: subHeadline.isBold ? 'bold' : 'normal',
    }

    const handleUpdateHeadline = () => {
        const headlineData = {
            ...headline,
            value: headlineValue,
        }

        dispatch(update_headline(headlineData))
    }

    const handleUpdateSubHeadline = () => {
        const subHeadlineData = {
            ...subHeadline,
            value: subHeadlineValue,
        }

        dispatch(update_subHeadline(subHeadlineData))
    }

    return (
        <div ref={headlineRef}>
            <EditableHeaderSections
                value={headlineValue}
                setValue={setHeadlineValue}
                headingLevel="h1"
                dispatchAction={handleUpdateHeadline}
                styles={headlineStyles}
            />
            <EditableHeaderSections
                value={subHeadlineValue}
                setValue={setSubHeadlineValue}
                headingLevel="h2"
                dispatchAction={handleUpdateSubHeadline}
                styles={subHeadlineStyle}
            />
            {!sameLine && dateTime && (
                <h2 className={classes.dateTime}>
                    <DateTime {...dateTime} />
                </h2>
            )}
        </div>
    )
}

export default RecitalHeader
