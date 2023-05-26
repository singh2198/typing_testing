import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { averageapi } from '../Redux/action';
import './out.css'

function Output() {


    const string=useSelector((store)=>store.typereducer)
    const average=useSelector((store)=>store.typereducer.average)
    const wpmthre=useSelector((store)=>store.typereducer.wpm)
    const accuthre=useSelector((store)=>store.typereducer.accuracy)
    const dispatch=useDispatch()
    // console.log("average",average)
    var s = string.str;
    let startime=Math.round(Date.now() / 1000);
    const [type,setyping]=useState("")
    const [acu,setacu]=useState(0)
    const [wpm,setwpm]=useState(0)
    const [avg,setavg]=useState(0)
    const input=useRef()

    // const [wrongcolor,setwrongcolor]=useState(false)

    useEffect(()=>{
        shuffle(s)
        
        
    },[s])
    


    function getRandomInt(n) {
        return Math.floor(Math.random() * n);
      }
      function shuffle(arr) {        
        var n = arr.length;              
        
        for(var i=0 ; i<n-1 ; ++i) {
          var j = getRandomInt(n);       
          
          var temp = arr[i];             
          arr[i] = arr[j];
          arr[j] = temp;
        }
        
        s = arr.join(' ');
        setyping(s)  
                              
      }
      
    
    
    let k=0
    let wrong=0
    let accuracy=0
    const handletype=(e)=>{
        let value=e.target.value
        // console.log(value[value.length-1],type[k],k)

        if(k<=type.length){
            if(value[value.length-1]===type[k]){
                k++
            }
            // else if((value[value.length-1]=="") & type[k]==""){
            //     console.log("inc k when empty")
            //     setwrongcolor(false)
            //     k++
            // }
            else{
                wrong++
            }
        }
        
        // console.log(wrongcolor)
        // console.log("wrong",wrong,"k",k,"type",type.length)
       
  
        
        if(k==type.length){
            let n=type.length-wrong
                accuracy=Math.floor((100/type.length)*(n))
                let endtime=Math.round(Date.now() / 1000);

                let w=endtime-startime
                let wpmtime=Math.floor((k/w)*60)
                dispatch(averageapi(wpmtime))
                setwpm(wpmtime)
                setacu(accuracy)
        }

        if((average.length>0)&& (wpm>=wpmthre) && (acu>=accuthre)){
            let sum=0
            for(var i=0;i<average.length;i++){
                sum=sum+average[i]
            }
            setavg(sum/average.length)
        }

    }

    
    


  return (
    <React.Fragment>

        <div style={{display:'flex',flexDirection:'column',textAlign:'center',border:'',height:'full',backgroundColor:"#303030"}}>
            <div >
                <h4>Lesson 1/100</h4>
            </div>

            <div style={{border:'',backgroundColor:'#375a7f',width:'80%',height:'',margin:'auto',marginBottom:'10px',overflow:'auto', minHeight:'68px'}}>
                <h3 style={{width:'100%',height:'100%'}}>{type}</h3>
            </div>

            <div style={{width:'80%' ,margin:'auto'}}>
                <input
                 placeholder="Retype if failed press <TAB> or <ES>" type='text'
                 style={{border:'1px solid blue',
                //  backgroundColor: wrongcolor ? 'red' :'white',
                 width:'100%',
                borderRadius:'10px',
                 margin:'auto',
                 color:'black',
                 fontSize:"27px",
                 height:"60px",
                 textAlign:'center'}} 
                 onChange={handletype}
                ref={input}
                
                 
                 
                 />
            </div>


            <div className='resultdiv'>
                <h4 style={{fontSize:"20px",color:'#fff'}}>WPM:{wpm}</h4>
                <h4 style={{fontSize:"20px",color:'#fff'}}>Accuracy:{acu}%</h4>
                <h4 style={{fontSize:"20px",color:'#fff'}}>Average WPM:{avg}</h4>

            </div>


        </div>

        <footer style={{display:'flex',flexDirection:'column',textAlign:'center',border:'',height:'full',backgroundColor:"#303030"}}>
            <div style={{width:'100%',backgroundColor:'#2D394D'}}>
                <h3 style={{color:'#00BC8C'}}>Ngram Type</h3>

            </div>

            <div style={{display:'flex',justifyContent:'space-evenly',width:'30%',margin:'auto'}}>
                <a href="https://github.com/ranelpadon/ngram-type#features" target='_blank' style={{textDecoration:'none',color:'#00BC8C'}}>How to use</a>
                <a href="https://github.com/ranelpadon/ngram-type/issues/new" target='_blank' style={{textDecoration:'none',color:"#00BC8C"}}>Suggest Improvents</a>
                <a href="https://ko-fi.com/ranelpadon" target='_blank' style={{textDecoration:'none',color:"#00BC8C"}}>Buy me a Coffee</a>
            </div>
            <p>Powered By</p>
        </footer>



    </React.Fragment>
  )
}

export default Output