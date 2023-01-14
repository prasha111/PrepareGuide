import { useState, useEffect, useRef } from "react";
const OtpInput = () => {
  const inputRef = useRef([]);
  const [inputCount, setInputCount] = useState(["", "", "", ""]);
  const [concatValue, setConcatValue] = useState("");
  const [currentPointer, setCurrentPointer] = useState(0);
  function StringChange(stringPassed, index) {
    //console.log("delete", stringPassed);
    const resultString =
      stringPassed.slice(0, index) +
      stringPassed.slice(index + 1, stringPassed.length);
    return resultString;
  }
  function StringConcatF(stringPassed, index, value) {
    //console.log("concat", stringPassed, value, index);
    const resultString =
      stringPassed.slice(0, index) +
      value +
      stringPassed.slice(index, stringPassed.length);
    return resultString;
  }
  const functionUpdaterLength = (value, index) => {
    setCurrentPointer(index);
    if (inputRef.current[index].value.length < 4) {
      setConcatValue((pree) => {
        return StringChange(pree, index, inputRef.current[index].value);
      });
      //console.log(concatValue, inputRef.current[index].value, currentPointer);
      if (!value) {
        const next = inputRef.current[index - 1];
        if (next) {
          next.focus();
        }
      } else {
        if (inputRef.current[index].value > 10) {
          inputRef.current[index].value = "";
          setConcatValue((prevValue) => {
            return StringChange(prevValue, index);
          });
        } else {
          const next = inputRef.current[index + 1];
          //if(next.value)
          if (next) {
            next.focus();
          }
          setConcatValue((prevV) => {
            return StringConcatF(prevV, index, inputRef.current[index].value);
          });
        }

        //const newSet = inputRef.current[index];
        // if (newSet) {
        //   newSet.reset();
        // }
        // setConcatValue((prevValue) => {
        //   return prevValue.splice(index, 1)
        // });
        //console.log(concatValue, inputRef, value);
      }

      //nameList.current[2].focus();
      // setConcatValue((prevValue) => {
      //   return prevValue + value;
      // });
    }
  };
  useEffect(() => {
    console.log(concatValue, "String Submitted");
  }, [concatValue]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {inputCount.map((component, index) => {
          return (
            <div key={index}>
              <input
                ref={(el) => (inputRef.current[index] = el)}
                onChange={(e) => {
                  functionUpdaterLength(e.target.value, index);
                }}
              />
            </div>
          );
        })}
      </div>
      {}
    </>
  );
};
export default OtpInput;
