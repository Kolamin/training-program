import { useState } from "react";
import "../styles/styles.css";
const Tests = ({ tests }) => {
    const [myAnswer, setMyAnswer] = useState('');
    return (
        <div>
            {tests.map(test => {
                return (
                    <div key={test.id}>
                        <h2>
                            Вопрос: {test.tQuestion}
                        </h2>
                        {test.choice.map((value, idx) => (
                            <div className="choice">
                                <label>
                                    <input type="radio" name="myChoice" value={value}
                                        onChange={e => setMyAnswer(e.target.value)} />
                                    {value}
                                </label>
                            </div>
                        ))}
                    </div>

                )
            })}
        </div>
       
    )
    console.log(myAnswer);
}



export default Tests