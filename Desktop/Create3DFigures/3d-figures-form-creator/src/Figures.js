import { useEffect, useState } from "react";
import { ChosenShape } from "./components/ChosenShape";
import { List } from "./components/List";
import { ShapeCreatorForm } from "./components/ShapeCreatorForm";
import './App.css';
import Grid from '@mui/material/Grid';
import {v4 as uuidv4} from 'uuid';

export function Figures () {
    const [figures, setFigures] = useState([]);
    const [chosenFigure, setChosenFigure] =useState('');
    const [chosenFigureFlag, setChosenFigureFlag ] = useState(false);

    useEffect (() => {
        console.log(figures);
    }, [figures])

    const onFigureChosing = (id) => {
        setChosenFigure(figures.find(figure => figure.id === id));
        setChosenFigureFlag(!chosenFigureFlag);
        
    }
    const onFigureAdd = (newFigure, id) => {
        let updatingFigure = {
        id: id,
        name: newFigure.name,
        type: newFigure.type,
        position: newFigure.position,
        rotation: newFigure.rotation,
        scale: newFigure.scale,
        color: newFigure.color,
        wireframe: newFigure.wireframe,
        visibility: newFigure.visibility
    }
        let existedFigure = figures ? figures.find(figure => figure.id === id) : undefined;
        if (existedFigure == undefined ){
            setFigures([...figures, {
                id: uuidv4(),
                name: newFigure.name,
                type: newFigure.type,
                position: newFigure.position,
                rotation: newFigure.rotation,
                scale: newFigure.scale,
                color: newFigure.color,
                wireframe: newFigure.wireframe,
                visibility: newFigure.visibility
            }]);
           
        }
        else {
            setFigures(figures.map(figure=> figure.id === id ? updatingFigure : figure))
            setChosenFigureFlag(false);
            setChosenFigure('');
        }

    }

    const onChosenFigureFlagHandler=()=> {
        setChosenFigureFlag(true);
    }

    useEffect (() => {
        onChosenFigureFlagHandler()
    }, [chosenFigure])

    const onFigureDeleteHandler = ((id) => {
        setFigures(figures.filter(figure => figure.id !== id));
        setChosenFigureFlag(false);
        setChosenFigure('');

    })
 


    return (
        <div className='wraper'>
                <Grid container className='wrapper-container'>
                    <Grid item xs={12} md={3} className='container'  justifyContent="center"> 
                        <ShapeCreatorForm figures = {figures} onFigureAdd={onFigureAdd} chosenFigure={chosenFigure} chosenFigureFlag={chosenFigureFlag}/>
                   </ Grid>
                   <Grid item xs={12} md={6} className='container' justifyContent="center"> 
                      <ChosenShape chosenFigure={chosenFigure} chosenFigureFlag={chosenFigureFlag}/>
                   </ Grid>
                   <Grid item xs={12} md={3} className='container' justifyContent="center"> 
                      <List figures = {figures} onFigureChosing={onFigureChosing} onChosenFigureFlagHandler={onChosenFigureFlagHandler} onFigureDeleteHandler={onFigureDeleteHandler} chosenFigure={chosenFigure} chosenFigureFlag={chosenFigureFlag}/>
                   </ Grid>  
               </Grid>
        </div>
    )
}

