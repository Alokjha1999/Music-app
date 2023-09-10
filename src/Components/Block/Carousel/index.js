import {Card} from '../../Card';
import forward from '../../../public/scroll-forward.png';
import back from "../../../public/scroll-back.png";
import React , { useEffect } from 'react';

let songDetails=[
    { 
        "id":1,
        "name":"Kabhi Tumhe",
        "img":require('../../../public/songs/kabhitumhe.jpg'),
        "artist":"Javed & Palak Muchhal"
    },
    { 
        "id":2,
        "name":"Tum Hi Aana",
        "img":require('../../../public/songs/tumhiaana.jpg'),
        "artist":"Jubin Nautiyal"
    },
    { 
        "id":3,
        "name":"Naina",
        "img":require('../../../public/songs/naina.jpg'),
        "artist":"Arijit Singh"
    },
    { 
        "id":4,
        "name":"Phir Se ud Chala",
        "img":require('../../../public/songs/phirseud.jpg'),
        "artist":"Mohit Chauhan"
    },
    { 
        "id":5,
        "name":"EK Tukda",
        "img":require('../../../public/songs/ektukda.jpg'),
        "artist":"Javed & Palak Muchhal"
    },
    { 
        "id":6,
        "name":"Choo lo",
        "img":require('../../../public/songs/choolo.jpg'),
        "artist":"The Local Train"
    },
    { 
        "id":7,
        "name":"Makhna",
        "img":require('../../../public/songs/makhna.jpg'),
        "artist":"Tanishk Bagchi"
    },
    { 
        "id":8,
        "name":"Rangi Saari",
        "img":require('../../../public/songs/rangisaari.jpg'),
        "artist":"Kavitha Seth"
    }
]

export function Carousel(props){
    useEffect(()=>{
        calculateDynamicRangeBasedonViewPort();
    })
    return(
        <div className='cardWrapper'>
            
            <div className='arrow backward' id={props.id+"arrow-backward"} onClick={()=>handleBackwardArrow(props.id)}>
                <img alt="backward-arrow" src={back} className="arrow-dimension"  />
            </div>
            <div className="cardContainer">
                {songDetails.map((song)=>(
                   <Card id={props.id + song.id} name={song.name} artist={song.artist} img={song.img}/>
                ))}
            </div>
            <div className='arrow forward' id={props.id+"arrow-forward"} onClick={ ()=>handleForwardArrow(props.id)} >
                <img alt="forward-arrow" src={forward} className="arrow-dimension" />
            </div>
           
        </div>
    )
}

let lastId = 3;
let range;

function calculateDynamicRangeBasedonViewPort(){
    if(window.innerWidth < 500)
        range = 2;
    else if(window.innerWidth > 500 && window.innerWidth < 800)
        range = 3;
    else
        range = 5;
}


function handleForwardArrow(id){
    document.getElementById(id+'arrow-backward').style.visibility = "visible";
    lastId = lastId+range;
    let domLastId =id+lastId;
    if(lastId > songDetails.length){
        domLastId=songDetails.length;
        domLastId =id+domLastId
        document.getElementById(id+'arrow-forward').style.visibility = "hidden";
    }
        document.getElementById(`${domLastId}`).scrollIntoView({'block':'nearest',behavior: "smooth"});
    
}
function handleBackwardArrow(id){
    document.getElementById(id+'arrow-forward').style.visibility = "visible";
    lastId = lastId-range;
    let domLastId  = id+lastId;
    if(lastId < 1){
        domLastId=id+1;
        document.getElementById(id+'arrow-backward').style.visibility = "hidden";
    }
        document.getElementById(`${domLastId}`).scrollIntoView({'block':'nearest',behavior: "smooth"});
    
}