import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {getAllTypes, postPokemon} from '../../redux/action'
import style from './Form.module.css'

const Form = () => {

    const history = useHistory();
    const handleHistory = () => history.push("/home");
 
    
    const [form, setForm] = useState ({
        name: '',
        image:'',
        life: '',
        attack: '',
        defense: '',
        // spped: '',
        // height: '',
        // weight: '',
        types: [],

    })


//    const handleSubmit= async(event) => {
//     event.preventDefault()
//    setForm({
//     name: '',
//     image:'',
//     life: '',
//     attack: '',
//     defense: '',
//     types: [],
//    })
// }
const handleSubmit = (e) => {
    dispatch(postPokemon(form));
    alert("Your pokémon has been created");
    history.push("/home");
  };

    
   const handleInputChange = (event) => {
    setForm({
        ...form,
        [event.target.name] : event.target.value
    })
   }

  
   const types= useSelector(state=> state.types)
   const dispatch= useDispatch()
   useEffect(() => {
    dispatch(getAllTypes())
   },[dispatch])


    return (

    <form className={style.formContainer} onSubmit={handleSubmit}>

      <button className={style.button} onClick={handleHistory}>Back To Home</button>
      <br />

        <label htmlFor='name'>Name</label>
        <input type='text' name='name' onChange={handleInputChange} value={form.name}></input>
            {/* <p className={style.error}>{errors.name}</p> */}
            <br />
        <label htmlFor='image'>Image</label>
        <input name='image' onChange={handleInputChange} value={form.image}></input>
        <br />
        <label htmlFor='life'>Life</label>
        <input name='life' onChange={handleInputChange} value={form.life}></input>
        <br />
        <label htmlFor='attack'>Attack</label>
        <input name='attack' onChange={handleInputChange} value={form.attack}></input>
        <br />
        <label htmlFor='defense'>Defense</label>
        <input name='defense' onChange={handleInputChange} value={form.defense}></input>
        <br />

        <label htmlFor='types'>CHOOSE TYPES</label>
        <select multiple={true} value={form.types} name='types' onChange={handleInputChange}>
                {types.map((type, index) => <option key={index} value={type.id}>{type.name}</option>)}
            </select>

            <button type="submit">Create</button>







    </form>
    )
    }

export default Form; 

