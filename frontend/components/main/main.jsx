import React from 'react'
import HomeContainer from '../home/home_container';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return <main className="item austana-main">
            <HomeContainer />
        </main>
        
    }
}

export default Main;