import './index.css'
const Mainpage=(props)=>{
    const handlehistory=()=>{
        props.clickDeciderhistory()
    }
    const handlescience=()=>{
        props.clickDeciderscience()
    }
    return(
        <div className="main_page_bg">
            <h1>HAV FUN WHILE LEARNING !!</h1>
            <p>Select you quiz topi</p>
            <button className="main_button" onClick={handlehistory} >HISTORY</button>
            <button className="main_button" onClick={handlescience}>SCIENCE</button>
        </div>
    )
}
export default Mainpage