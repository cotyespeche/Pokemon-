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

    // function handleByAttack(e) {
    //     e.preventDefault();
    //     dispatch(filterByType(e.target.value));
    // //     history.push("/home")
    //   }
    
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
                    <option key="All" value="All">All</option>
                    <option key="ground " value="ground">Ground</option>
                    <option key="steel" value="steel">Steel</option>
                    {/* <option key="dark" value="dark">Dark</option> */}
                    <option key="flying" value="flying">Flying</option>
                    <option key="rock" value="rock">Rock</option>
                    <option key="water" value="water">Water</option>
                    <option key="psychic" value="psychic">Psychic</option>
                    {/* <option key="unknown" value="unknown">Unknown</option> */}
                    <option key="poison" value="poison">Poison</option>
                    <option key="fire" value="fire">Fire</option>
                    <option key="ice" value="ice">Ice</option>
                    {/* <option key="shadow" value="shadow">Shadow</option> */}
                    <option key="normal" value="normal">Normal</option>
                    <option key="bug" value="bug">Bug</option>
                   
                    {/* <option key="grass" value="grass ">Grass</option> */}
                    {/* <option key="dragon" value="dragon ">Dragon</option> */}
                    {/* <option key="fairy" value="fairy ">Fairy</option> */}
                    {/* <option key="fighting" value="fighting ">Fighting</option> */}
                    {/* <option key="ghost" value="ghost ">Ghost</option> */}
                    {/* <option key="electric" value="electric ">Electric</option> */}
                </select>
  


            </div>
    </div>
    )}
 
 
 export default Filter;

                




 

