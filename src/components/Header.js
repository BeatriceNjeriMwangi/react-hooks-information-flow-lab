import react, {useState} from "react";
 

function Header({onDarkModeClick}){
    const [isDarkMode, setIsDarkMode] = useState(false);

    function onDarkModeClick() {
        setIsDarkMode((isDarkMode) =>!isDarkMode);
    }
    return(
        <div className="header">
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {isDarkMode? "Dark" : "Light"} Mode
            </button>
        </div>
    )
}
export default Header;