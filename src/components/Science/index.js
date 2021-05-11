import './index.css'
const Science=(props)=>{
    const {sciencequizList}=props
    const getShuffledquestinlist = () => {
        return sciencequizList.sort(() => Math.random() - 0.5)
      }
    const sciencelist=getShuffledquestinlist()

    const questionMAker=(numb)=>{
            
            return (
                <div className="question">
                    <h1>{sciencelist[numb].question}</h1>
                    <div>
                        {sciencelist[numb].options.map((listitem)=>(
                            <button className="option_button">{listitem}</button>
                        ))}
                    </div>
                </div>
            )
    }
    const createlists=()=>{
        
        return(
            <div>
                {questionMAker(0)}
                {questionMAker(1)}
                {questionMAker(2)}
                {questionMAker(3)}
                {questionMAker(4)}
            </div>
        )

    }
    return(
        <div>
            {createlists()}
        </div>
    )
}
export default Science