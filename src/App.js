
import React, { Component,View,Text } from 'react';
import './index.css';
import _  from 'underscore';
import Loading from './components/Loading';
import styles from './App.css';


class App extends Component {

  constructor(props) {
		super(props);
    this.onClick = this.onClick.bind(this);
		this.state={
      loading:true,
      setLoading:true,
      words:[],
      isClicked:true,
      };
	}
   Word(id, en, tr) {

    this.id = id;
    this.en = en;
    this.tr=tr;
    //...see link in summary above for full definition
  }



async componentDidMount() {
  
  try {
    const response = await fetch('/all');
  const body = await response.json();
  this.setState({words: body});
  this.setState({loading:false});
    console.log(body);
  } catch (error) {
        console.log(error)
  }
  
}

onClick() {
  console.log("GELDI");
this.setState({isClicked:!this.state.isClicked});
  
}

render() {
  const words = this.state.words;
  const isClicked=this.state;
  const word= _.sample(words);
 
    const myStyle = {
      color: "white",
      alignItems:"center",
      backgroundColor: "DodgerBlue",
      padding: "20px",
      fontFamily: "Sans-Serif",
      position: "absolute",
      margin:0,
      top: "30%",
      right:"50%",
      left:"50%",
    };

  if(this.state.loading)
  {
    return(

      <main>
        <Loading />
      </main>
    );
  }
  else{
  return (

  <div style={{color: "red"}}>
      
        
        <button style={myStyle} onClick={this.onClick}>
  
    {word.en} 
  ----------------------- 
  ----------------------- 
  ----------------------- 
  ----------------------- 
  ----------------------- 
  ----------------------->

  { word.tr}
 
</button>


        </div>
     

          
     
  );

  }
             

  
}}


export default App;

