import './Tag.css'

const  Tag = (props) => {

    return(
        <div className = "tag">
            <button onClick = {props.OnselectedTag} value={props.tag}>
                {props.tag}
            </button>
        </div>
    )
}
 
export default Tag
