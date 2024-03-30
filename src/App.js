import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {
  const [data, setdata] = useState("");

  useEffect( ()=>{
    axios
    .get("https://corona.lmao.ninja/v3/covid-19/all")
    .then(res=>{setdata(res.data)})
    .catch(err=>{console.log(err)})
  },[])

  // const date = new Date(parseInt(data.updated));
  // const lastupdated = date.toString();
  return (
    <div style={{
      width:'80%',
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:20
    }}>
    <div class="card-group">
    <div class="card">
      <div class="card text-white bg-primary mb-3">
        <h5 class="card-title" style={{textAlign:'center', fontWeight:'bold', fontSize:25}}>Total Cases</h5>
        <p class="card-text" style={{textAlign:'center', marginTop:30, fontSize:25}}>{data.cases}</p>
        <p style={{backgroundColor:'#0d0d0d'}}><small style={{color:"white"}} class="">Last updated : {data.lastupdated}</small></p>
        
      </div>
    </div>
    <div class="card">
      <div class="card text-white bg-success mb-3">
        <h5 class="card-title" style={{textAlign:'center', fontWeight:'bold', fontSize:25}}>Recovered</h5>
        <p class="card-text" style={{textAlign:'center', marginTop:30, fontSize:25}}>{data.recovered}</p>
        <p style={{backgroundColor:'#0d0d0d'}}><small style={{color:"white"}} class="">Last updated</small></p>
      </div>
    </div>
    <div class="card">
      <div class="card text-white bg-danger">
        <h5 class="card-title" style={{textAlign:'center', fontWeight:'bold', fontSize:25}}>Deaths</h5>
        <p class="card-text" style={{textAlign:'center', marginTop:30, fontSize:25}}>{data.deaths}</p>
        <p style={{backgroundColor:'#0d0d0d'}}><small style={{color:"white"}} class="">Last updated</small></p>
      </div>
    </div>
  </div></div>
  )
}

export default App