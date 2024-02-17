import { useNavigate } from "react-router-dom";
import browserStyle from "../style/browser.module.css"

function Browser(){
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }

    return(
        <div className={browserStyle.backGround} id="navegation">
            <button className={browserStyle.btn} onClick={goToHome}>Home</button>
        </div>
    )
}

export default Browser;