export const Note = ({content,date,important}) => {
    return(
      <li>
        {important
        ? <p>{content} (important note)</p>
        : <p>{content}</p>
        }        
        <p>{date}</p>
      </li>
    )
}