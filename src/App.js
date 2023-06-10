import './App.css';
import User from './Components/User';
import UserList from "./Components/UserList";
import GetUsers from "./Utils/google";
import bannerIMG from "./images/banner.png"
import {useState, useEffect} from "react";
import SheetDB from "sheetdb-js";
import searchIcon from "./images/search.png";
import Loading from "./Components/Loading";
import UserPanel from "./Components/UserPanel";
async function fetchData() {
    try {
        const result = await SheetDB.read('https://sheetdb.io/api/v1/c24yendb9k4wk', {});
        return result;
    } catch (error) {
        return error;
    }
}

function App() {


    const [keywordd, setKeyword] = useState('');
    const [focused, setFocused] = useState(false);
    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };

    const [userlist, setUserlist] = useState(null);
    const [panelProps, setPanelProps] = useState({
        id: '1',
        name: '',
        email: '',
        grade: '',
        food: '',
        impression: ''
    })
    useEffect(() => {
        const fetchDataAsync = async () => {
            const result = await fetchData();
            setUserlist(result);
        };

        fetchDataAsync();
    }, [focused]);

    const focusHander = (panelProps)=>{
        if(!focused){
            setPanelProps(panelProps)
            setFocused(true);
        }else{
            setFocused(false);
        }
    }
    return (<div className="App">

        <div className = "image-container">
             <img src={bannerIMG}/>
        </div>
        {focused && <div class={"panelContianer"}>
            <UserPanel focusHander={focusHander} panelProps={panelProps}/>
        </div>}

        {!focused && <section className={"userSearch"}>
            <div className={"searchBar"}>
                <label for={"search"}><img src={searchIcon}/></label>
                <input
                    id={"search"}
                    type="text"
                    value={keywordd}
                    onChange={handleInputChange}
                    placeholder="search"
                />
            </div>
            {userlist && <UserList userList={userlist} keyword={keywordd}  focusHandler={focusHander}/>}
            {!userlist && <Loading/>}
        </section>}
    </div>);
}

const refresher="1";

export default App;
