
import './App.css';
import { Figures } from './Figures';



function App() {

 
  return (
   <>
     <div className="App"> 
      <Figures />
     </div>
   </>
  );
}

export default App;


/*
<Grid container>
        <Grid item xs={12} md={3} className='container'  justifyContent="center"> 
           <ShapeCreatorForm />
        </ Grid>
        <Grid item xs={12} md={6} className='container' justifyContent="center"> 
           <ChosenShape />
        </ Grid>
        <Grid item xs={12} md={3} className='container' justifyContent="center"> 
            <List />
        </ Grid>  
      </Grid>


      */