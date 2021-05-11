import {useState} from "react"
import Mainpage from '../Mainpage'
import History from '../Histroy'
import Science from '../Science'
import './index.css'

const historyquizList=[
    {
        id:1,
        question:"When did battle of plassey happened?",
        options:["1757","1765","1745","1756"],
        correct:1,
    },
    {
        id:2,
        question:"Who is son of Akbar?",
        options:["Humayun","Jahangir","Shahjahan","Aurangazeb"],
        correct:2,
    },
    {
        id:3,
        question:"Who is Prime Minister of India during 1991  reforms?",
        options:["Vajpayee","Narasimha Rao","Charan Singh","Rajiv Gandhi"],
        correct:2,
    },
    {
        id:4,
        question:"Kanishka ruled India in which century?",
        options:["1","2","3","4"],
        correct:1,
    },
    {
        id:5,
        question:"Palas are rulers of present day?",
        options:["Delhi","Andhra","West Bengal","Gujarat"],
        correct:3,     
    },

]
const sciencequizList=[
    {
        id:1,
        question:"Atomic number of gold?",
        options:["12","36","67","79"],
        correct:4,
    },
    {
        id:2,
        question:"How is heat produced in Sun?",
        options:["fusion","fission","solvysion","plasmaticarc"],
        correct:1,
    },
    {
        id:3,
        question:"Which is the lightest metal in the Universe?",
        options:["lithium","Sodium","Mercury","Selenium"],
        correct:1,
    },
    {
        id:4,
        question:"X-rays were discovered by?",
        options:["Edison","Roentgen","Pascsl","Einstein"],
        correct:2,
    },
    {
        id:5,
        question:"Which planet is called red planet?",
        options:["Mercury","Venus","Jupiter","Mars"],
        correct:4,     
    },

]

const returnQuestion=()=>{
    return sciencequizList[0].question
}


const Quiz=()=>{
    const [sectionDisplay, setsectionDisplay] = useState("main")
    
    const handlehistoryClick=()=>{
        setsectionDisplay("history")
    }
    const handlescienceClick=()=>{
        setsectionDisplay("science")
    }
    const deciderFunc=(stateCon)=>{
        if(stateCon==="main"){
            return(
                <Mainpage clickDeciderhistory={handlehistoryClick} clickDeciderscience={handlescienceClick}/>
            )
        }
        if(stateCon==="history"){
            return(
                <History historyquizList={historyquizList}/>
            )
        }
        if(stateCon==="science"){
            return(
                <Science sciencequizList={sciencequizList}/>
            )
            }
    }
    return(
    <>
        <div className="quiz_heading">
            <h1>Welcome to QuizMania</h1>
        </div>
        <div className="quiz_body">
            {deciderFunc(sectionDisplay)}
        </div>
    </>
    )
}
export default Quiz