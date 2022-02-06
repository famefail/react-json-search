import { useEffect, useState } from "react"
import Img from "./Img"
import Tag from "./Tag"
import './TripList.css'

const TripList = ({ trips })=>{
const [search, setSearch] = useState('')
const [allTag, setTag] = useState([])  

const filterText = trips.filter(trip =>{
        return trip.title.includes(search)
    })
    useEffect(() => {
    trips.map(trip =>{
    trip.tags.map(tag => {
        allTag.push(tag)
    console.log(allTag)
    },[])
    })
 
 })
// const filterTag = trips.filter(trip =>(
//         trip.tags.map(tag =>{
//               return tag.includes(search)
//         })
//         ))

const selectedTag = (e) => {
    setSearch(e.target.value) 
}

    return(
        <div>
            <input type = "text"value = {search} onChange = {(e) => setSearch(e.target.value)}></input>
            {
                filterText.map(trip =>(
                    <div key ={trip.eid}>
                        <h2>{trip.title}</h2>
                        <div className = "tag-flex">
                       {trip.tags.map((tag, index) => (
                        <Tag 
                            key ={index} 
                            tag = {tag} 
                            OnselectedTag = {selectedTag}/>
                        ))}
                        </div>
                        <p>{trip.description}</p>
                        <div>
                            {trip.photos.map((photo) =>(
                                <img src = {photo}></img>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TripList