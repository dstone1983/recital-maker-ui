import React, { useEffect, useRef, useState } from 'react'
import { Grid } from '@material-ui/core'
import RecitalBody from '../RecitalBody'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import AddMusicianModal from '../AddMusicianModal'
import CustomModal from '../Common/CustomModal'
import { add_empty_page } from '../../store/templateReducer'

const useStyles = makeStyles({
    recitalContainer: {
        overflowX: 'auto',
        width: '100%',
        justifyContent: 'center',
        '&:after': {
            content: '',
            display: 'block',
            clear: 'both',
        },
        '& [class*="recitalPage"]': {
            marginLeft: '20px',
            '&:first-child': {
                marginLeft: 0,
            },
        },
    },
    recitalOverflow: {
        padding: '20px 0',
    },
})

const RecitalConfig = () => {
    const dispatch = useDispatch()
    const overlowRef = useRef()
    const [pagePercentage, setPagePercentage] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [containerDisplayStyle, setContainerDisplayStyle] = useState('flex')
    const [overflowStyles, setOverflowStyles] = useState({})
    const [currentAddIndex, setCurrentAddIndex] = useState(0)
    const [currentMusicianIndex, setCurrentMusicianIndex] = useState(0)
    const [currentEditItem, setCurrentEditItem] = useState({})
    const [isModelEdit, setIsModalEdit] = useState(false)
    const template = useSelector(state => state.currentTemplate)
    const classes = useStyles()

    useEffect(() => {
        if (pagePercentage >= 0.85) {
            dispatch(add_empty_page())
        }
    }, [pagePercentage, dispatch])

    useEffect(() => {
        const width = (595.2756 + 100) * template.pages.length
        const refWidth = overlowRef.current.offsetHeight

        if (refWidth < width) {
            setOverflowStyles({
                width,
                justifyContent: 'flex-start',
            })
            setContainerDisplayStyle('block')
        } else {
            setOverflowStyles({
                width,
            })
            setContainerDisplayStyle('flex')
        }
    }, [template.pages])

    const handleShowModal = (pageIndex, musicianIndex, itemData) => {
        let mode
        if ((musicianIndex === 0 || musicianIndex) && itemData) {
            setCurrentEditItem(itemData)
            setCurrentMusicianIndex(musicianIndex)
            mode = true
        } else {
            mode = false
        }

        setIsModalEdit(mode)
        setCurrentAddIndex(pageIndex)
        setShowModal(true)
    }

    return (
        <>
            <CustomModal
                setShowModal={setShowModal}
                showModal={showModal}
                label="Add Musician Modal"
                description="Add a musician and songs"
            >
                <AddMusicianModal
                    isEdit={isModelEdit}
                    showModal={showModal}
                    itemData={currentEditItem}
                    currentMusicianIndex={currentMusicianIndex}
                    setShowModal={setShowModal}
                    pageIndex={currentAddIndex}
                />
            </CustomModal>
            <Grid item lg={12}>
                <div
                    className={classes.recitalContainer}
                    style={{ display: containerDisplayStyle }}
                >
                    <Grid
                        ref={overlowRef}
                        container
                        justify="center"
                        style={overflowStyles}
                        className={classes.recitalOverflow}
                    >
                        {template.pages.map((page, index) => {
                            const setup = {
                                ...template,
                            }

                            delete setup.pages

                            return (
                                <RecitalBody
                                    key={index}
                                    musicians={page}
                                    pageIndex={index}
                                    template={setup}
                                    pageLength={template.pages.length}
                                    setPagePercentage={setPagePercentage}
                                    handleShowModal={handleShowModal}
                                />
                            )
                        })}
                    </Grid>
                </div>
            </Grid>
        </>
    )
}

export default RecitalConfig
