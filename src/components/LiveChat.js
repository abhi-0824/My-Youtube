import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';




const LiveChat = () => {
      
     const [liveMessage,setLiveMessage]=useState("");
    const dispatch=useDispatch();
     
    const ChatMessages=useSelector((store)=>store.chat.messages);
        
  useEffect(()=>{
    const i=setInterval(() => {


       dispatch(addMessage({
        name:generateRandomName(),
        message: makeRandomMessage(20)+ "🙏"
       }))

        
    }, 1000);

   return ()=>clearInterval(i);

  },[])


  return (
    <>
  <div className='w-full h-[450px] ml-2 p-2 border border-black bg-slate-100 rounded-lg 
                  overflow-y-scroll  flex flex-col-reverse '>
       
       <div>
      {
        ChatMessages.map((c,index)=>
          <ChatMessage key={index} name={c.name} message={c.message}/>                    
        )
      }
      </div>
 </div>

    <form className='w-full p-2 ml-2 border border-black rounded-lg' onSubmit={(e)=>{
       e.preventDefault();
       dispatch(addMessage({
        name:"KimJong Un",
        message: liveMessage
       })) ;
       
       setLiveMessage("")
    }}> 
        <input className='w-[330px] px-2 ' type="text" value={liveMessage} onChange={(e)=>{
            setLiveMessage(e.target.value)
        }}/>
        <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
    </>
  )
}

export default LiveChat
