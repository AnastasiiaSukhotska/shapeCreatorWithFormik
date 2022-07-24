
import '../styles/FigureItem.css';
import ClearIcon from '@mui/icons-material/Clear';
export function FigureItem ({figure, onFigureChosing, onFigureDeleteHandler}) {

    const onFigureDelete = ((event, id) => {
        onFigureDeleteHandler(id);
        event.stopPropagation();

    })
  
    return (
        <div className='list-item-container'>
            <div className='item' onClick={() => onFigureChosing(figure.id)} >{figure ? figure.name : ''} {figure ? figure.position : ''} <ClearIcon onClick={(event) => onFigureDelete(event, figure.id)} /></div>
        </div>
    )
   
}