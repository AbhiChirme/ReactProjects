import { useState, useCallback , useEffect, useRef} from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState();
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ;

    if(numberAllowed) str+= "0123456789"
    if(charactersAllowed) str+="`~!@#$%^&*(){}[]"
    for(let i=0 ; i<length ; i++){
      let charIndex = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charactersAllowed, setPassword])

  const copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, charactersAllowed,passwordGenerator])

  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex fixed justify-center inset-x-0 flex-wrap">
        <div className="flex flex-wrap justify-center w-fit h-fit mx-auto my-10 bg-gray-700 rounded-lg">
          <div className="justify-center px-5 py-5">
            <div className="flex flex-wrap justify-center">
            <h2 className="text-white text-4xl font-bold justify-center">
              Password Generator
            </h2>
            </div>
            <div className="flex flex-wrap px-5 py-5 justify-center w-full">
              <input
                type="text"
                placeholder="Password"
                readOnly
                className="px-3 py-3  outline-none rounded-xl text-start w-200 text-white bg-black"
                value={password}
                ref={passwordRef}
              ></input>
              <button className="bg-blue-700 text-white rounded-lg  px-3 py-3" onClick={()=> copyToClipboard()}>
                Copy
              </button>
            </div>
            <div className="flex flex-wrap px-5 py-5 items-center gap-3">
              <div className="flex items-center gap-1">
                <input
                  type="range"
                  min={6}
                  max={100}
                  value={length}
                  placeholder="Password"
                  className="px-3 py-3  outline-none rounded-xl text-start text-white bg-black"
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                ></input>
                <label className="text-white"> Length {length}</label>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <input
                  type="checkbox"
                  onChange={() => setNumberAllowed((prev) => !prev)}
                ></input>
                <lable className="text-white">Numbers</lable>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <input
                  type="checkbox"
                  onChange={() => setCharactersAllowed((prev) => !prev)}
                ></input>
                <lable className="text-white">Character</lable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
