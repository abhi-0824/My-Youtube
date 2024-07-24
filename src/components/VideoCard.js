 import React from 'react'
 
 const VideoCard = ( {info} ) => {
     
    if (!info || !info.snippet || !info.statistics) {
        // Return null or a loading indicator while the data is being fetched
        return <div>Loading...</div>;
      }
    
   
    const { snippet,statistics }=info;
    const{ channelTitle,title,thumbnails }=snippet;
    const{viewCount}=statistics;
    
   return (
     <div className='p-2 m-2 w-72 shadow-lg'>
        <img className="rounded-lg"src={ thumbnails.medium.url} alt="video" />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{ viewCount} views</li>
            {/* <li>{ likeCount}</li>
            <li>{ favoriteCount}</li>
            <li> {commentCount}</li> */}
        </ul>
     </div>
   )
 }

 //Higher order function

 export const AdVideoCard=({info})=>{
  return(
    <div className='p-1 m-1 border border-red-900'>
      <VideoCard info={info}/>
    </div>
  )
 }
 
 export default VideoCard
 
