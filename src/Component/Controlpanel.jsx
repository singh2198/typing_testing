import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addapi } from '../Redux/action';

function Controlpanel() {

    const dispatch=useDispatch()
    const radio=useRef([])
    
    const [combination ,setcombination]=useState(3)
    const [repetation ,setrepetation]=useState(1)


    

   
      function shuffle(s,num) {
        var arr = s.split('');           
        var n = arr.length;
        let new_arr=[]
        
        for(var i=0 ; i<num ; i++) {
          let j=Math.floor(Math.random()*n)
          new_arr.push(arr[j])
          
        }
        
        s = new_arr.join('');       
        return s;                       
      }


      const handleradiovalue=()=>{

        var s = 'asdfjkl';
        let repeat_arr=[]
        // s = shuffle(s,combination);

        let response=""
        for(var k=0;k<combination;k++){
             response=shuffle(s,combination)

             for(var i=0;i<repetation;i++){
                repeat_arr.push(response)
            }
        }
        dispatch(addapi(repeat_arr))
        
        
            
    }

    

   






  return (
    <React.Fragment>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',margin:'auto',gap:"30px",padding:"60px",backgroundColor:"#303030"}}>
            <div style={{display:'flex',flexDirection:'column',border:"1px solid red",width:"25%"}} >
                <h1 style={{color:"white"}}>Source</h1>

                <div>
                    <input type="radio"  onClick={handleradiovalue} name="b" />
                    <label style={{color:"white"}}>Bigarium</label>
                </div>
                <div>
                    <input type="radio" onClick={handleradiovalue} name='b' />
                    <label style={{color:"white"}}>Trigrams</label>
                </div>
                <div>
                    <input type="radio" name="b" onClick={handleradiovalue} />
                    <label style={{color:"white"}}   >Tetragrams</label>
                </div>
                <div>
                    <input type="radio" name='b' onClick={handleradiovalue} />
                    <label style={{color:"white"}}  >Words</label>
                </div>
                <div>
                    <input type="radio" name='b' onClick={handleradiovalue}/>
                    <label style={{color:"green"}}>Custom</label>
                </div>
               
            </div>

            <div style={{display:'flex',flexDirection:'column',border:"1px solid red",width:"25%"}}>
                <h1 style={{color:"white"}}>Scope</h1>

                <div>
                    <input type="radio" />
                    <label style={{color:"white"}}>Top 50</label>
                </div>
                <div>
                    <input type="radio" />
                    <label style={{color:"white"}}>Top 100</label>
                </div>
                <div>
                    <input type="radio" />
                    <label style={{color:"white"}}>Top 150</label>
                </div>
                <div>
                    <input type="radio" />
                    <label style={{color:"white"}}>Top 200</label>
                </div>
            
            </div>

            <div style={{display:'flex',flexDirection:'column',border:"1px solid red",width:"25%"}}>
                <h1 style={{color:"white"}}>Generator</h1>

                <div style={{display:'flex',flexDirection:'column',textAlign:"start",width:"40%"}}>
                    <label style={{color:"white"}}>Combination</label>
                    <input type="text" value={combination} onChange={(e)=>setcombination(e.target.value)} />
                </div>

                <div style={{display:'flex',flexDirection:'column',textAlign:"start",width:"40%"}}>
                    <label style={{color:"white"}}>Repetition</label>
                    <input type="text"  value={repetation} onChange={(e)=>setrepetation(e.target.value)}/>
                </div>

            </div>

            <div style={{display:'flex',flexDirection:'column',border:"1px solid red",width:"25%"}}>
                <h1 style={{color:"white"}}>Threshould</h1>

                <div style={{display:'flex',flexDirection:'column',textAlign:"start",width:"40%"}}>
                    <label style={{color:"white"}}>WPM</label>
                    <input type="text"  />
                </div>

                <div style={{display:'flex',flexDirection:'column',textAlign:"start",width:"40%"}}>
                    <label style={{color:"white"}}>Accuracy</label>
                    <input type="text" />
                </div>

            </div>

        </div>
    </React.Fragment>
  )
}

export default Controlpanel