import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { averageapi } from "../Redux/action";
import "./out.css";

function Output() {
  const string = useSelector((store) => store.typereducer);
  const average = useSelector((store) => store.typereducer.average);
  const wpmthre = useSelector((store) => store.typereducer.wpm);
  const accuthre = useSelector((store) => store.typereducer.accuracy);
  const dispatch = useDispatch();
  // console.log("average",average)
  var s = string.str;
  let startime = Math.round(Date.now() / 1000);

  const [type, setyping] = useState("");
  const [acu, setacu] = useState(0);
  const [wpm, setwpm] = useState(0);
  const [avg, setavg] = useState(0);

  const [wrongcolor, setwrongcolor] = useState(true);
  const clr = useRef(true);
  const typesound=useRef()
  const errorsound=useRef()

  let audio =  new Audio('typeSound.mp3')
  let ersound=new Audio('error.mp3')

  useEffect(() => {
    shuffle(s);
    startime = Math.round(Date.now() / 1000);
  }, [s]);

  function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }
  function shuffle(arr) {
    var n = arr.length;

    for (var i = 0; i < n - 1; ++i) {
      var j = getRandomInt(n);

      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    s = arr.join(" ");
    setyping(s);
  }

  let k = 0;
  let wrong = 0;
  let accuracy = 0;
  const handletype = (e) => {
    
    let value = e.target.value;
    // console.log(value[value.length-1],type[k],k)

    if (k <= type.length) {
      if (value[value.length - 1] === type[k]) {
        clr.current.style.backgroundColor = "white";
        if(typesound.current.checked==false){
          audio.pause()
        }
        else{
          audio.play()
        }
        k++;
      }
      else if(value[value.length-1]==undefined){
        clr.current.style.backgroundColor = "white";
      }
      else {
        clr.current.style.backgroundColor = "#E7BBDC";

        if(errorsound.current.checked==false){
          ersound.pause()
        }
        else{
          ersound.play()
        }
        wrong++;
      }
      
    }
    // audio.pause()
    
    //   clr.current.style.backgroundColor = "white";
    // console.log(wrongcolor)
    // console.log("wrong",wrong,"k",k,"type",type.length)

    if (k == type.length) {
      let n = type.length - wrong;
      accuracy = Math.floor((100 / type.length) * n);
      let endtime = Math.round(Date.now() / 1000);
      clr.current.style.backgroundColor = "white";
      let w = endtime - startime;
      let wpmtime = Math.floor((k / w) * 60);
      
      dispatch(averageapi(wpmtime));
      setwpm(wpmtime);
      setacu(accuracy);
      
    }

    if (average.length > 0 && wpm >= wpmthre && acu >= accuthre) {
      let sum = 0;
      for (var i = 0; i < average.length; i++) {
        sum = sum + average[i];
      }
      // setavg(sum / average.length);
      setavg(Math.floor(sum/average.length));
      
    
    }
  };

 

  return (
    <React.Fragment>
      <div className="main">
      <div className="sound">
        <div>
          <label >Typing Sound</label>
          <input type="checkbox"  ref={typesound}/>
        </div>

        <div>
          <label >Error Sound</label>
          <input type="checkbox"   ref={errorsound}/>
        </div>

      </div>

        <div
          style={{
            border: "",
            backgroundColor: "#375a7f",
            width: "80%",
            height: "",
            margin: "auto",
            marginBottom: "10px",
            overflow: "auto",
            minHeight: "68px",
          }}
        >
          <h2 style={{ width: "100%", height: "100%", }}>{type}</h2>
        </div>

        <div style={{ width: "80%", margin: "auto" }}>
          <input
            placeholder="Retype if failed press <TAB> or <ES>"
            type="text"
            style={{
              border: "1px solid blue",
              backgroundColor: wrongcolor ? "white" : "red",
              width: "100%",
              borderRadius: "10px",
              margin: "auto",
              color: "black",
              fontSize: "18px",
              height: "60px",
              textAlign: "center",

            }}
            onChange={handletype}
            ref={clr}
          />
        </div>

        <div className="resultdiv">
          <h4 style={{ fontSize: "20px", color: "#fff", }}>WPM:{wpm}</h4>
          <h4 style={{ fontSize: "20px", color: "#fff" , }}>Accuracy:{acu}%</h4>
          <h4 style={{ fontSize: "20px", color: "#fff" ,}}>Average WPM:{avg}</h4>
        </div>
      </div>

      <footer className="footer">
        <div
          style={{ width: "100%", backgroundColor: "#2D394D", margin: "10px" }}
        >
          <h3 style={{ color: "#00BC8C" ,}}>Ngram Type</h3>
        </div>

        <div className="resultdiv">
          <a
            href="https://github.com/ranelpadon/ngram-type#features"
            target="_blank"
            style={{ textDecoration: "none", color: "#00BC8C" ,}}
          >
            How to use
          </a>
          <a
            href="https://github.com/ranelpadon/ngram-type/issues/new"
            target="_blank"
            style={{ textDecoration: "none", color: "#00BC8C" ,}}
          >
            Suggest Improvents
          </a>
          <a
            href="https://ko-fi.com/ranelpadon"
            target="_blank"
            style={{ textDecoration: "none", color: "#00BC8C" }}
          >
            Buy me a Coffee
          </a>
        </div>
        
      </footer>
    </React.Fragment>
  );
}

export default Output;
