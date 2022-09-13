import { useInput } from './useInput';


function displyMessage(message) {
    alert(message);
}

function Stu10And1() {
    const [inputValue, handleChange, handleSubmit] = useInput("안녕", displyMessage);

    return (
        <div>
            <h1>useInput</h1>
            <input value={inputValue} onChange={handleChange} />
            <button onClick={handleSubmit}>확인</button>
        </div>
    )
}

export default Stu10And1