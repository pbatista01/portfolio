import './menuList.css'

function MenuList (){
    return(
        <div className="menuList">
            <span className="close-btn">X</span>
            <ul>
                <li><a>Home</a></li>
                <li><a>Projects</a></li>
                <li><a>About Me</a></li>
                <li><a>Hire Me</a></li>
            </ul>
        </div>
    );
}

export default MenuList;