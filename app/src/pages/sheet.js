import Style from "../style/sheet.module.css";

function Sheet(){
    return(
        <div className={Style.mainBody}>
            <div className={Style.attributeBox}></div>
        </div>
    )
}

export default Sheet;