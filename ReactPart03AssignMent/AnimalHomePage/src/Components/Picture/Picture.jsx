import {Link} from 'react-router-dom'
function Picture({title,image,id,des}){
    return(
       <div className='flex-shrink-0 w-1/4 p-22'>
        <Link to={`/photos/${id}`}>
        {/* <div className='pictureTitle'>{title}</div> */}
        <div className='h-64 overflow-hidden m-2 rounded-lg hover:cursor-pointer'>
          <img src={image} alt="Image" /></div>
        {/* <div>{id}</div>
        <div>{des}</div> */}
        </Link>
       </div> 
    )
}
export default Picture;