import "./comment.scss";


export default function Comment({comment}) {
   
    // const date = moment(coment.publish);
    // const startDate = date.startOf("hour").fromNow();
    
  
    return (
      <>
        <div
          id={comment.id}
          className='comment'
        >
         <div className="comment_author">{comment.user_name}</div>
         <div className="comment_text">{comment.coment}</div>
         <div>
         <div className="comment_publish">{comment.publish}</div>
         </div>
        </div>
      </>
    );
  }