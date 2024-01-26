import './HomePage.css';
import Sidebar from './sidebar/Sidebar';
import Feed from './feed/Feed';
import Widgets from './widgets/Widgets';

function App() {
    return (
        //BEM Convention
        <div className="homepage">
            {/*Sidebar  */}
            <Sidebar />


            {/* Feed */}
            <Feed />

            {/* Widgets */}
            <Widgets />
        </div>
    );
}

export default App;
