import { orderByName, orderByAttack } from '../../redux/action';
import { useDispatch } from 'react-redux'
import style from './Filter.module.css'
import { useState } from 'react';





function Filter () {

    const dispatch= useDispatch()
    const [order, setOrder] = useState('')

    const handleChange = (e) => {
        e.target.name === "orderByName" && dispatch(orderByName(e.target.value))

        e.target.name === "orderByAttack" && dispatch(orderByAttack(e.target.value))
    }
    
    // function handleChange(e) {
    //     e.preventDefault();
    //     dispatch(orderByName(e.target.value));
    //     setOrder(`Ordenado ${e.target.value}`)
    //   }

    return (
    
    <div className= {style.home}>
            
            <div className={style.selectContainer}>
                <select className={style.selecByName} name="orderByName" defaultValue={"default"} onChange={handleChange}>
                    <option value="default" disabled>ORDER BY NAME</option>
                    <option value="Ascendent">A-Z</option>
                    <option value="Descendent">Z-A</option>
                </select>


                <select className={style.selectByAttack} name="orderByAttack" defaultValue={"default"} onChange={handleChange}>
                    <option value="default" disabled>ORDER BY ATTACK</option>
                    <option value="All">All</option>
                    <option value="Ascendent">Lowest Attack</option>
                    <option value="Descendent">Highest Attack</option>
                </select>



            </div>
    </div>
    )}
 
 
 export default Filter;

                




