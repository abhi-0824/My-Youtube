 import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import {YOUTUBE_SEARCH_API} from '../utils/constants'
import { cacheResults } from '../utils/searchSlice';



 const Head = () =>
    {
      const [searchQuery,setSearchQuery]=useState("");
      const [suggestions,setSuggestions]=useState([]);
      const [showSuggestions,setShowSuggestions]=useState(false);
        
      const searchCache=useSelector((store)=>store.search);

      const dispatch=useDispatch();
      
      /**
       * searchCache={
       *  "iphone":["iphone11","iphone14"]
       * }
       * searchQuery=iphone
       */

     


      useEffect(()=>{
         //make an api call after every key press
       //but if the diff b/w two api calls is<200ms decline the api call (Debouncing)
      const timer= setTimeout(()=>{
          
        if( searchCache[searchQuery])
          {
            setSuggestions(searchCache[searchQuery]);
          }

          else
          {
            getSearchSuggestions();
          }
      
      },200);

       return()=>{
         clearTimeout(timer);
       };
       
      },[searchQuery])
   

      const getSearchSuggestions=async()=>{
         
         const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
         const json=await data.json();
          setSuggestions(json[1]);

          //update cache
          dispatch(cacheResults({
            [searchQuery]: json[1]
          }));
         
      }
  /**
   * press key-i
   * render the component
   * useEffect()
   * start the timer=>make api call after 200 ms
   * 
   * key-ip
   * destroy the component (useEffect return method)
   * re-render the component
   * useEffect() 
   * start timer=>make api call after 200 ms
   * 
   * 
   * new timer (200)
   * if 200 sec passed then make an api call
   * 
   */
        



     

        const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
        }

   return(
   
   <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
          
      <div className='flex col-span-1 cursor-pointer'>
       <img onClick={()=>toggleMenuHandler()} 
          className="h-8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC" alt="menu" />
      
        <a href="/">
       <img className="h-8 mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8xEWKiTMYig_ewmAgDobsw_ddFKZe0iO-A&s" alt=" yotubelogo" />
       </a>
    </div>

      <div className='col-span-10 px-10'>
         <div>
        <input 
          value={searchQuery} 
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
         className="w-1/2 h-10 px-6 border border-gray-400 rounded-l-full" type="text" />
         <button className='border h-10 border-gray-400 px-2 py-2 rounded-r-full bg-gray-100' >🔍</button>
      </div>
       
       {showSuggestions && (
         <div className='absolute bg-white py-2 px-2 w-[434px] shadow-lg rounded-lg border border-gray-100 '>
        <ul>
         {suggestions.map((s)=>(
               <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>
         
         ))}
         
        </ul>


       </div>
       )}


      </div>
     <div  className='col-span-1'>
       <img className="h-8" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />

     </div>

    </div>
        
   );
}
 
 
 export default Head;
 