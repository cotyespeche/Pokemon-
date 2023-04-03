import React from "react";
import AllCardsPokemons from "../../components/AllCardsPokemons/AllCardsPokemons";
import { getAllPokemons } from "../../redux/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css";


const Home = () => {
 const pokemons= useSelector(state => state.pokemons)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllPokemons());
  // }, [dispatch]);
  
  useEffect(() => {
    if (!pokemons || pokemons.length === 0) dispatch(getAllPokemons())
  }, [pokemons, dispatch])


  return (
    <div className={style.home}>
      <AllCardsPokemons />
      <div className={style.footer}>
        <h2 className={style.yellow}>
          Developed by
          <a
            className={style.letras}
            href="https://www.linkedin.com/in/maria-constanza-espeche-b58573255/"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;Constanza Espeche&nbsp;
          </a>
          with <span className={style.red}>❤</span>
        </h2>
      </div>
    </div>
  );
  }  
//   return (
//     <div className={style.home}>
//       <AllCardsPokemons />

//       <h2 className={style.yellow}>
//         Developed by
//         <a
//           className={style.letras}
//           href="https://www.linkedin.com/in/maria-constanza-espeche-b58573255/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           &nbsp;Constanza Espeche&nbsp;
//         </a>
//         with <span className={style.red}>❤</span>
//       </h2>
//     </div>
    
//   );
// };


export default Home;















// import React, { Component } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllPokemons } from "../actions/pokemonActions";
// import style from "./Home.module.css";
// import AllCardsPokemons from "../components/AllCardsPokemons";

// class Home extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     const { dispatch, pokemons } = this.props;
//     if (!pokemons || pokemons.length === 0) {
//       dispatch(getAllPokemons());
//     }
//   }

//   render() {
//     return (
//       <div className={style.home}>
//         <AllCardsPokemons />
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });

// export default connect(mapStateToProps)(Home);