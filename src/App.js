import React from 'react'
import './App.css'
import Layout from './app/layout'
import { Provider } from 'react-redux'
import { ReduxStore } from './app/store/store'
import RecitalConfig from './app/components/RecitalConfig'

function App() {
    return (
        <Provider store={ReduxStore}>
            <Layout>
                <RecitalConfig />
            </Layout>
        </Provider>
    )
}

export default App
