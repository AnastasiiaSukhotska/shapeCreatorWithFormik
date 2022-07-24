import { useMemo } from "react";
import { connect } from "react-redux";
import {FigureItem} from './FigureItem';
import '../styles/List.css';
export function List ({figures, onFigureChosing, onChosenFigureFlagHandler, onFigureDeleteHandler, chosenFigure}) {
 //   const showList = useMemo (() => figures.map(figure => (<FigureItem key={figure.name} figures={figures} figure={figure} onFigureChosing={onFigureChosing} onChosenFigureFlagHandler={onChosenFigureFlagHandler}/>)), [figures]);
    return (
        <div className='list-container'>
            <h2>List</h2>
           { figures.map(figure => (<FigureItem key={figure.id} figures={figures} figure={figure} onFigureChosing={onFigureChosing} onChosenFigureFlagHandler={onChosenFigureFlagHandler} onFigureDeleteHandler={onFigureDeleteHandler} chosenFigure={chosenFigure} className='list-item-container'/>))}
        </div>
    )
}
/*
const mapStateToProps = (state) => ({figures: state.figures});
export default connect (mapStateToProps)(List);
 {figures ? figures.map(figure => <div key={figure.name} figure={figure}>{figure.name} onClick={()=>onFigureChosing(figures, figure.name)}</div>) : 'hi'}
*/