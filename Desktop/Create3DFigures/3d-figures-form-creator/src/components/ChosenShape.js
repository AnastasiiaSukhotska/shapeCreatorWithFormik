import '../styles/ChosenComponent.css';
export function ChosenShape ({chosenFigure, chosenFigureFlag}) {
    return (
        <div className='chosen-shape-container'>
            <h2>{chosenFigure ? '' : 'Nothing is selected'}</h2>
            <div>{chosenFigure && chosenFigureFlag ? `id: ${chosenFigure.id}` : ''}</div> 
            <div>{chosenFigure && chosenFigureFlag ? `name: ${chosenFigure.name}` : ''}</div>  
            <div>{chosenFigure && chosenFigureFlag ? `type: ${chosenFigure.type}` : ''}</div> 
            <div>{chosenFigure && chosenFigureFlag ? `position: ${chosenFigure.position}` : ''}</div> 
            <div>{chosenFigure && chosenFigureFlag ? `rotation: ${chosenFigure.rotation}` : ''}</div> 
            <div>{chosenFigure && chosenFigureFlag ? `scale: ${chosenFigure.scale}` : ''}</div> 
            <div>{chosenFigure && chosenFigureFlag ? `color: ${chosenFigure.color}` : ''}</div> 
            <div>{chosenFigure && chosenFigureFlag ? `wireframe: ${chosenFigure.wireframe}` : ''}</div> 
            <div>{chosenFigure && chosenFigureFlag ? `visble: ${chosenFigure.visibility}` : ''}</div> 
        </div>
    )
}