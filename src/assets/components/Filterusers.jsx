import React, {useState, useEffect}from 'react'
import ENV_VARIABLES from '../../utils/env';

const Filterusers = () => {
    const [searchKeyword, setSearchKeyword] = useState('')
    const [searchresults, setSearchResults] = useState([])
    const [displaySearchRes , setDisplaySearchRes] = useState(false);
    const [cacheResults, setCacheResults] = useState({})
    const handleSearchKeyWord = (e) => {
        setSearchKeyword(e.target.value)
        console.log("handleSearchKeyWord")
    }
    useEffect( () => {

        if(cacheResults[searchKeyword]) {
            console.log("from cache:", searchKeyword , searchresults)
            setSearchResults(cacheResults[searchKeyword]);
            return
        }
        const searchUsersAPI = async () => {
            try {
                const searchUsersAPI = `${ENV_VARIABLES.searchUsersAPI}?q=${searchKeyword}`
                const searchUsersAPIResp = await fetch (searchUsersAPI);
                const searchUsersAPIJson = await searchUsersAPIResp.json()
                //console.log(searchUsersAPIJson)
                setSearchResults(searchUsersAPIJson.users)
                setCacheResults((prevResults) => ({...prevResults, [searchKeyword]: searchUsersAPIJson.users}))

            } catch (e) {
                console.log(e)
            }finally {
                console.log('finally executed')
            }
        }
        
        const timer = setTimeout(() => {
            if( searchKeyword !== ''){
                 searchUsersAPI();
                  console.log("from API:", searchresults)
            }
           
            
        }, 300);

        return () => {
            clearTimeout(timer)
        }
        
    }, [searchKeyword]);
    
    const handleSearchFocus = () => {
            setDisplaySearchRes(true)
        }
        const handleSearchBlur = () => {
            setDisplaySearchRes(false)
        }
  return (
    <div>Filterusers<br></br>
        <input name='searchKeyword' value = { searchKeyword } 
        onChange= {(e) => handleSearchKeyWord (e) }
        onFocus = {handleSearchFocus}
        onBlur = {handleSearchBlur}
        className='w-[400px] h-[35px] border rounded'></input>

        {displaySearchRes && 
        <div className='searchResults w-[400px] h-[300px] border-2 text-left overflow-y-scroll'>
            {
            searchresults.length > 0 ?
            searchresults.map((item) => (
                <div key={item.id} className='h-[30px] hover:bg-amber-700'>{item.firstName}</div>
            )) : "No users"}
        </div>
}
        
    </div>
  )
}

export default Filterusers