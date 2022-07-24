import  TextField from "@mui/material/TextField";
import * as yup from 'yup';
import '../styles/ShapeCreator.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, FormControlLabel, FormHelperText, InputLabel, Select } from "@mui/material";
import  Box from "@mui/system/Box";
import  MenuItem from "@mui/material/MenuItem";
import Checkbox  from "@mui/material/Checkbox";
import {  styled } from "@mui/system";
import { useFormik} from 'formik';



let validationSchema = yup.object().shape({
    name: yup.string().required('Fill this up!'),
    type: yup.string().required('Make your choise!'),
    position: yup.string().matches( /^(([-+]?[0-9]*[.,]?[0-9]+(,|,\s+)){2})([-+]?[0-9]*[.,]?[0-9]+)$/, 'You need to type 3 numbere devided by comma').required('Fill this up!'),
    rotation: yup.string().matches( /^(([-+]?[0-9]*[.,]?[0-9]+(,|,\s+)){2})([-+]?[0-9]*[.,]?[0-9]+)$/, 'You need to type 3 numbere devided by comma').required('Fill this up!'),
    scale: yup.string().matches( /^(([0-9]*[.,]?[0-9]+(,|,\s+)){2})([0-9]*[.,]?[0-9]+)$/, 'You need to type 3 positive numbere devided by comma').required('Fill this up!'),
    color: yup.string().required('Fill this up!'),
    wireframe: yup.boolean(),
    visibility: yup.boolean()
   

})
const theme = createTheme ({
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {   
                    color: '#fff',
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                  color: 'red'
                      
                }
            }
        }

    },
    palette: {
        primary: {
            main: '#FFFFFF'
        },
        warning: {
            main: '#d32f2f'
        }

    }
})

const styles = theme => ({
    n: {},
    input: {
        '& $n': {
            borderColor: 'yellow'
        }
    }
})


const TextFieldStyled = styled(TextField)(({theme}) => ({
    color: theme.palette.warning.main,
    cursor: 'pointer',
    


}))


export function ShapeCreatorForm ( {figures, onFigureAdd, chosenFigure, chosenFigureFlag }) {
    
    const {values, handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            name: chosenFigureFlag ? chosenFigure.name : '',
            type: chosenFigureFlag ? chosenFigure.type : '',
            position: chosenFigureFlag ? chosenFigure.position :'',
            rotation: chosenFigureFlag ? chosenFigure.rotation :'',
            scale: chosenFigureFlag ? chosenFigure.scale :'',
            color: chosenFigureFlag ? chosenFigure.color :'',
            wireframe: chosenFigureFlag ? chosenFigure.wireframe :false,
            visibility: chosenFigureFlag ? chosenFigure.visibility :false
        },
       
        onSubmit: (values, helpers) => {
            onFigureAdd(values, chosenFigureFlag ? chosenFigure.id : '');
            helpers.resetForm();
        
        },
        enableReinitialize: true, 
        validationSchema,
    })

  
    return (
        <div className='shape-creator-container'>
        <ThemeProvider theme={theme}>
             <h2 className='shape-creator__title'>Shapes</h2>
            <Box onSubmit={handleSubmit} className='form-container'
            component='form'
            sx={{
                '& .MuiTextField-root': { color: 'white', width: '25ch', display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }, 
            }}
            > 
                 <TextFieldStyled 
                 sx={{
                    width: 300,
                    color: '#fff',
                  }}
                    id="name-input" 
                    name='name'
                    value={values.name|| ''}
                    onChange={handleChange}
                    label="Name" 
                    variant="standard" 
                    color={errors.name ? 'warning' : 'primary' }
                    className='shape-creator__input'
                    helperText={errors.name ? errors.name : ''}/>
                   <InputLabel id="labelForSelect">Select</InputLabel>  
                 <Select
                      id="selected-type"
                      name='type'
                      value={values.type|| ''}
                      onChange={handleChange}
                      color={errors.type ? 'warning' : 'primary' }
                      label="Select"
                      variant="standard" 
                      labelId='labelForSelect'
                 >
                    <MenuItem value={'BOX'}>BOX</MenuItem>
                    <MenuItem value={'POLYGON'}>POLYGON</MenuItem>
                    <MenuItem value={'SPHERE'}>SPHERE</MenuItem>
                    <MenuItem value={'PLANE'}>PLANE</MenuItem>
                    <MenuItem value={'CYLINDER'}>CYLINDER</MenuItem>
                 </Select>  
                 <FormHelperText>{errors.type ? errors.type : ''}</FormHelperText>
                 <TextField 
                    
                    id="position-input" 
                    name='position'
                    value={values.position|| ''}
                    onChange={handleChange}
                    label="Position" 
                    variant="standard" 
                    color={errors.position ? 'warning' : 'primary' }
                    helperText={errors.position ? errors.position : ''}
                    className='shape-creator__input'/>
                <TextField 
                    id="rotation-input" 
                    name='rotation'
                    value={values.rotation||''}
                    onChange={handleChange}
                    label="Rotation" 
                    variant="standard" 
                    color={errors.rotation ? 'warning' : 'primary' }
                    helperText={errors.rotation ? errors.rotation : ''}
                    className='shape-creator__input'/>
                <TextField 
                    id="scale-input" 
                    name='scale'
                    value={values.scale||''}
                    onChange={handleChange}
                    label="Scale" 
                    variant="standard" 
                    color={errors.scale ? 'warning' : 'primary' }
                    helperText={errors.scale ? errors.scale : ''}
                    className='shape-creator__input'/>
                <TextField 
                    id="color-input" 
                    name='color'
                    value={values.color||''}
                    onChange={handleChange}
                    label="Color" 
                    variant="standard" 
                    color={errors.color ? 'warning' : 'primary' }
                    helperText={errors.color ? errors.color : ''}
                    className='shape-creator__input'/>
                <FormControlLabel value={values.wireframe||false} checked ={values.wireframe||false}
                    control=
                     {<Checkbox name='wireframe' checked={values.wireframe||false} onChange={handleChange} className='checkbox' style={{alignSelf: 'left', color: 'white'}}/>}
                    label='Wireframe'

                />
                 <FormControlLabel value={values.visibility||false} checked={values.visibility||false}
                    control= {<Checkbox name='visibility'  checked={values.visibility||false} onChange={handleChange} className='checkbox' style={{alignSelf: 'left', color: 'white'}}/>}
                    label='Visible on Scene'
                />
                <Button variant="outlined"  type='submit'>Save</Button>
                
                
               
            </Box>
        </ThemeProvider>
        </div>
        
    )
}


