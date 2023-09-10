import './index.css';
import avatar from '../../public/avatar.png';
import logo from '../../public/youtube.png';
import network from '../../public/network.png';
import arrow from '../../public/gray-arrow-search.png';
import cross from '../../public/gray-close1.png';

export function Header(){
    return (<div>
        <div className='headerContainer'>
            <div className="logo">
                <img alt="logo" className='avatar' src={logo}/>
                <div className="label">Music Box</div>
            </div>
            <div className='nav' id="nav">
                <div id="home">Home</div>
                <div id="explore">Explore</div>
                <div id="library">Library</div>
                <div id="search" onClick={()=>displaySearchArea()}>Search</div>
            </div>
            <div className='avatarDiv'>
            <div className='avatarWrapper'>
                    <img alt="avatar" className="avatar" src={network}/>
                </div>
                <div className='avatarWrapper'>
                    <img  alt="avatar" className="avatar" src={avatar}/>
                </div>
            </div>
        </div>
    </div>);
}
function displaySearchArea(){
    let oldSearch = document.getElementById("search");
   let searchWrapper=document.createElement('div');
   searchWrapper.classList.add('searchWrapper');
   searchWrapper.id="searchWrapper";
    document.getElementById("home").style.display = "none";
    document.getElementById("explore").style.display = "none";
    document.getElementById("library").style.display = "none";
    let searchinput = document.createElement("input") ;
    searchinput.type="text";
    searchinput.id="searchinput";
    searchinput.placeholder = "Search";
    let img =document.createElement("img");
    img.src = arrow;
    img.alt="arrow";
    img.classList.add('arrow-img');
    img.onclick = ()=>hideSearchArea(oldSearch);
    searchWrapper.appendChild(img);
    searchWrapper.appendChild(searchinput);
    let crossImg = document.createElement("img");
    crossImg.src = cross;
    crossImg.alt="arrow";
    crossImg.classList.add('arrow-img');
    crossImg.onclick = ()=>cleanSearchArea(oldSearch);
    searchWrapper.appendChild(crossImg);
    document.getElementById("search").replaceWith(searchWrapper);
    
}
function hideSearchArea(oldSearch){
    document.getElementById("home").style.display = "block";
    document.getElementById("explore").style.display = "block";
    document.getElementById("library").style.display = "block";
    document.getElementById("searchWrapper").replaceWith(oldSearch);
}
function cleanSearchArea(){
    document.getElementById("searchinput").value ="";
}
