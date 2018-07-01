import "normalize.css"
import "./App.css"
import { isMobile } from 'globals'

import IndexPage from 'IndexPage'

class App extends React.Component {

    render() {
        return <div id='app'>
            <Switch>
                <Route exact path='/' component={IndexPage}/>
            </Switch>
        </div>
    }
}


export default compose(
    withRouter,
    connect(
        ( { } ) => ( {} ),
        null
    )
)(App)



