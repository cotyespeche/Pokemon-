import { orderByName, orderByAttack, filterBySource, filterByType, getAllTypes } from '../../redux/action';
import { useDispatch } from 'react-redux'
import style from './Filter.module.css'
import { useState, useSelector } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useEffect } from 'react';






function Filter () {

    const dispatch= useDispatch()
    // const history= useHistory()
    // const allTypes= useSelector ((state) => state.types)
    // // const [order, setOrder] = useState('')
    // useEffect(() => {
    //     if(!allTypes || allTypes.length === 0)
    //     dispatch(getAllTypes())
    // }, []);


    const handleChange = (e) => {
        e.target.name === "orderByName" && dispatch(orderByName(e.target.value)) 

        e.target.name === "orderByAttack" && dispatch(orderByAttack(e.target.value))
        // e.target.name === "filterBySource" && dispatch(filterBySource(e.target.value))
        e.target.name === "filterByType" && dispatch(filterByType(e.target.value))

    }
    
    // function handleTypes(e) {
    //     e.preventDefault();
    //     dispatch(filterByType(e.target.value));
    // //     history.push("/home")
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
                    {/* <option value="All">All</option> */}
                    <option value="Ascendent">- Attack</option>
                    <option value="Descendent">+ Attack</option>
                </select>


                {/* <select className={style.selectBySource} name="filterBySource" defaultValue={"default"} onChange={handleChange}>
                    <option value="default" disabled>Filter by source</option>
                    <option value="Reset">Reset filter</option>
                    <option value="Api">Api</option>
                    <option value="Db">Db</option>
                   
                </select> */}
               


                {/* <select name="filterByType" defaultValue="Default" onChange={(event) => handleTypes(event)} >
                        <option key="Types" value="" hidden>Filter By Types</option>
                        <option key="All" value="All">All</option>
                        {
                            allTypes?.map((type, i) => {
                                return <option key={type.name + i} value={type.name}>{type.name}</option>
                            })
                            }
                    </select>

{/*  */}
                <select className={style.types} name="filterByType" defaultValue={"default"} onChange={handleChange}>
                    <option value="default" disabled>FILTER BY TYPE</option>
                    <option value="All">All</option>
                    <option key="ground" value="ground ">Ground</option>
                    <option value="steel ">Steel</option>
                    <option value="dark ">Dark</option>
                    <option value="flying ">Flying</option>
                    <option value="rock ">Rock</option>
                    <option value="water ">Water</option>
                    <option value="psychic ">Psychic</option>
                    <option value="unknown ">Unknown</option>
                    <option value="poison ">Poison</option>
                    <option value="fire ">Fire</option>
                    <option value="ice ">Ice</option>
                    <option value="shadow ">Shadow</option>
                    <option value="normal ">Normal</option>
                    <option value="bug ">Bug</option>
                    <option value="grass ">Grass</option>
                    <option value="dragon ">Dragon</option>
                    <option value="fairy ">Fairy</option>
                    <option value="fighting ">Fighting</option>
                    <option value="ghost ">Ghost</option>
                    <option value="electric ">Electric</option>
                </select>
  


            </div>
    </div>
    )}
 
 
 export default Filter;

                




 

