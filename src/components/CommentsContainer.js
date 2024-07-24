import React from 'react'

const commentsData=[
    {
        name:"Abhi Midha",
        text:"hello how why what ro",
        replies:[
            {
            name:"Abhi Midha",
            text:"hello how why what ro",
            replies:[
                
            ]
        } 
        ]
    },
    {
        name:"Abhi Midha",
        text:"hello how why what ro",
        replies:[
            
        ]
    },  
    {
        name:"Abhi Midha",
        text:"hello how why what ro",
        replies:[
            {    
                name:"Abhi Midha",
                text:"hello how why what ro",
                replies:[
                    
                ],

                name:"Abhi Midha",
                text:"hello how why what ro",
                replies:[
                    {
                        name:"Abhi Midha",
                        text:"hello how why what ro",
                        replies:[
                            {
                                name:"Abhi Midha",
                                text:"hello how why what ro",
                                replies:[
                                    {
                                        name:"Abhi Midha",
                                        text:"hello how why what ro",
                                        replies:[
                                            
                                        ]
                                    },  
                                ]
                            },  
                        ]
                    },  
                ]
            },  
        ]
    },  
    {
        name:"Abhi Midha",
        text:"hello how why what ro",
        replies:[
            {
                name:"Abhi Midha",
                text:"hello how why what ro",
                replies:[
                    {
                        name:"Abhi Midha",
                        text:"hello how why what ro",
                        replies:[
                            {
                                name:"Abhi Midha",
                                text:"hello how why what ro",
                                replies:[
                                    
                                ]
                            },  
                        ]
                    },  
                ]
            },  
        ]
    },  
    {
        name:"Abhi Midha",
        text:"hello how why what ro",
        replies:[
            {
                name:"Abhi Midha",
                text:"hello how why what ro",
                replies:[
                    
                ]
            },  
        ]
    },    
];

const Comment=({data})=>{
    
    const {name,text,replies}=data;
    return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img className='w-8 h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
         
         <div className='px-8'>
            <p className="font-bold">{name}</p>
            <p>{text}</p>
         </div>
               


    </div>
    
)
  
}


const CommentsList=({comments})=>{

    return comments.map((comment,index)=>
    (
       <div  key={index}> 
            <Comment data={comment}/>
            <div className="pl-5 border border-l-black ml-5">
                <CommentsList comments={comment.replies}/>
            </div>
       </div>
    
   ));
        

}


const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
