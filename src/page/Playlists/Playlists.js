import Menu from './Menu'
import Footer from './Footer'
import Main from './Main'

function Playlists({item}){
    return <div>
        <Menu />
        <Footer />
        <Main item={item}/>
    </div>;
}

export default Playlists;