import React, { useEffect, useRef, useState } from 'react'





const Demo2 = () => {
    let x=0;
    const[y,setY]=useState(0);
    const ref=useRef(0);
    /**
     * not like ref=0;
     * it is an object ref={current:0}
     */
   console.log('rendering ')
   
   const i=useRef(null)
   useEffect(()=>{
       i.current= setInterval(() => {
            console.log("heloooooooo",Math.random())
        }, 1000);

        return ()=>clearInterval(i.current);
   },[])


  return (
    <div className="m-4 p-2 w-96 h-96 border border-black  bg-slate-50">
       <div>
           <button
            className='bg-green-100 p-2 m-4'
            onClick={()=>{{
                x=x+1;
                console.log("x=",x)
            }}}
           >Increase x</button>

        <span className='font-bold text-xl'>LET={x}</span>
       </div>

       <div>
           <button
            className='bg-green-100 p-2 m-4'
            onClick={()=>{{
                 setY(y+1);
            }}}
           >Increase Y</button>

        <span className='font-bold text-xl'>STATE={y}</span>
       </div>

       <div>
           <button
            className='bg-green-100 p-2 m-4'
            onClick={()=>{{
                  
                ref.current++;
                console.log("ref=",ref.current);
                
            }}}
           >Increase Y</button>

        <span className='font-bold text-xl'>REF={ref.current}</span>
       </div>
             <button className='m-4 p-2 bg-red-500 text-white border-black rounded-lg'
                     onClick={()=>{
                        clearInterval(i.current);
                     }} >Stop Printing</button>


    </div>
  )
}

export default Demo2
