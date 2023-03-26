// import axios from 'axios'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllTypes, postPokemon } from "../../redux/action";
import validate from "./Validate";
import style from "./Form.module.css";

const Form = () => {
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();

  const history = useHistory();
  const handleHistory = () => history.push("/home");

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  const [form, setForm] = useState({
    name: "",
    image: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
    // selected: '',
  });
  // const [showDefaultImage, setShowDefaultImage] = useState(false);

  const [errors, setErrors] = useState({});
  //   name: "",
  //   image: "",
  //   life: "",
  //   attack: "",
  //   defense: "",
  //   speed: "",
  //   height: "",
  //   weight: "",
  //   types: "",

  const handleInputChange = (event) => {
    // event.preventDefault()
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setErrors(validate({ ...form, [event.target.name]: event.target.value }));
  };
  const handleSelect = (event) => {
    setForm({
      ...form,
      types: [...form.types, event.target.value],
    });
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      postPokemon(form))
    //     {
    //     ...form,
    //     image:
    //       form.image === ""
    //         ? "https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
    //         : form.image,
    //   })

    alert("Your pokémon has been created");
    setForm({
      name: "",
      image: "",
      life: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
    history.push("/home");
  };

  return (
    <div className={style.body}>
      <div className={style.formContainer}></div>
      <br></br>
      <h1 className={style.inputTitulo}>FORM TO CREATE POKEMON</h1>

      <form onSubmit={(event) => handleSubmit(event)}>
        <button className={style.btn1} onClick={handleHistory}>
          Back To Home
        </button>
        <br />

        <label htmlFor="name" className={style.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={form.name}
          className={style.inputName}
        ></input>
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

        <br />

        <label htmlFor="image" className={style.label}>
          Image
        </label>
        <input
          name="image"
          type="url"
          id="url"
          onChange={handleInputChange}
          value={form.image}
        //   placeholder="URL de imagen"
          className={style.inputName}
        ></input>
        {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
        <br />

        <label htmlFor="life" className={style.label}>
          Life
        </label>
        <input
          name="life"
          type="number"
          onChange={handleInputChange}
          value={form.life}
          className={style.inputName}
        ></input>
        {errors.life && <p style={{ color: "red" }}>{errors.life}</p>}
        <br />

        <label htmlFor="attack" className={style.label}>
          Attack
        </label>
        <input
          name="attack"
          type="number"
          onChange={handleInputChange}
          value={form.attack}
          className={style.inputName}
        ></input>
        {errors.attack && <p style={{ color: "red" }}>{errors.attack}</p>}
        <br />

        <label htmlFor="defense" className={style.label}>
          Defense
        </label>
        <input
          name="defense"
          type="number"
          onChange={handleInputChange}
          value={form.defense}
          className={style.inputName}
        ></input>
        {errors.defense && <p style={{ color: "red" }}>{errors.defense}</p>}
        <br />

        <label htmlFor="speed" className={style.label}>
          Speed
        </label>
        <input
          name="speed"
          type="number"
          onChange={handleInputChange}
          value={form.speed}
          className={style.inputName}
        ></input>
        {errors.speed && <p style={{ color: "red" }}>{errors.speed}</p>}
        <br />

        <label htmlFor="height" className={style.label}>
          Height
        </label>
        <input
          name="height"
          type="number"
          onChange={handleInputChange}
          value={form.height}
          className={style.inputName}
        ></input>
        {errors.height && <p style={{ color: "red" }}>{errors.height}</p>}
        <br />

        <label htmlFor="weight" className={style.label}>
          Weight
        </label>
        <input
          name="weight"
          type="number"
          onChange={handleInputChange}
          value={form.weight}
          className={style.inputName}
        ></input>
        {errors.weight && <p style={{ color: "red" }}>{errors.weight}</p>}
        <br />
        <select
          className={style.selectT}
          onChange={(selection) => handleSelect(selection)}
        >
          {types.map((typ) => (
            <option value={typ.id}>{typ.name}</option>
          ))}
        </select>
        <div>{form.types.map((seleccionado) => seleccionado + " ")}</div>

        <button
          type="submit"
          //  onClick={handleInputChange}
          disabled={
            form.name === "" ||
            form.image === "" ||
            form.life === "" ||
            form.attack === "" ||
            form.defense === "" ||
            form.speed === "" ||
            form.height === "" ||
            form.weight === "" ||
            form.types.length === 0
          }
          className={style.btn}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;









// const findTypeId = (name) => {
  //     const tipos = types.find((t) => t.name === name);
  //     return tipos ? tipos.id : null;
  //   };

  //   const handleSelect= (event) => {
  //     const typeName = event.target.value;
  //     const typeId = findTypeId(typeName);
  //     if (typeId) {
  //       setForm({
  //         ...form,
  //         selected: typeName,
  //         types: [...form.types, typeId],
  //       });
  //     }
  //   };