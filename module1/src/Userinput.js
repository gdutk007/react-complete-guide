

const Userinput = (props) => {
         return (
             <div>
                 <h1> Hello from UserInput</h1>
                 <input type="text" onChange={props.changed} value={props.name}></input>
             </div>
         );
    }

export default Userinput;