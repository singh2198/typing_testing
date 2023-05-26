import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

function Output() {


    const string=useSelector((store)=>store.typereducer)
    // console.log(string.str)

    // const [type,setyping]=useState("")
    // const [data,setdata]=useState("")


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
        console.log(s.toString())              
        return s;                       
      }
      var s = string.str;
      s=shuffle(s)
      let str=[]
      for(var i=0;i<s.length;i++){
        str.push(s[i])
      }
      
      console.log(str.length)
      
      
      
    //   console.log(s);
    let k=0
    let wrong=0
    const handletype=(e)=>{
        // console.log(s)
        // console.log(type)
        // console.log(e.target.value)
        let value=e.target.value
        console.log(value[value.length-1])
        // setyping(e.target.value)

        if(k<=s.length){
            // console.log(value[value.length-1],str[k],k)
            if(value[value.length-1]==str[k]){
                k++
                
            }
            else if((value[value.length-1]==" ") & str[k]==" "){
                k++
        
            }
            else{
                // alert("Word")
                wrong++
            }
        }
        // value=""
        // console.log(k)

    }
    // let n=str.length-wrong
    // console.log(n)
    console.log("wrong",wrong)

    let accuracy=str.length-wrong
    
    console.log(accuracy)
    



  return (
    <React.Fragment>

        <div style={{display:'flex',flexDirection:'column',textAlign:'center',border:'',height:'full',backgroundColor:"#303030"}}>
            <div >
                <h4>Lesson 1/100</h4>
            </div>

            <div style={{border:'',backgroundColor:'#375a7f',width:'80%',padding:'',margin:'auto',height:'68px',marginBottom:'10px'}}>
                <h3 style={{width:'100%'}}>{s}</h3>
            </div>

            <div style={{width:'80%' ,margin:'auto'}}>
                <input
                 placeholder="Retype if failed press <TAB> or <ES>" type='text'
                 style={{border:'1px solid blue',
                 backgroundColor:'white',
                 width:'100%',
                borderRadius:'10px',
                 margin:'auto',
                 color:'black',
                 fontSize:"27px",
                 height:"60px",
                 textAlign:'center'}} 
                 onChange={handletype}
                 
                 
                 />
            </div>


            <div style={{display:"flex",justifyContent:'space-evenly',width:'40%',margin:'auto'}}>
                <h4 style={{fontSize:"20px",color:'#fff'}}>WPM:0</h4>
                <h4 style={{fontSize:"20px",color:'#fff'}}>Accuracy:%</h4>
                <h4 style={{fontSize:"20px",color:'#fff'}}>Average WPM:0</h4>

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