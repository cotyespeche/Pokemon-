
const validate = (inputs) => {

    let errors = {};

    const regexName = /^([^0-9]*)$/;
    const regexUrl = /^(ftp|http|https):\/\/[^ "]+$/
    const regexNumber = /^\d*$/



    if (!inputs.name) errors.name = " Name field is required ";
    //  if (inputs.name === "") errors.name = " Name field is required ";
     else if (!regexName.test(inputs.name)) errors.name = " Name can't contain numbers ";

     else if (!inputs.image ) errors.image = " Image field is required ";
     else if (!regexUrl.test(inputs.image)) errors.image = " Image must be a valid URL ";

     else if (!inputs.life) errors.life = " Life field is required ";
     else if (inputs.life < 1) errors.life = " Life must be greater than or equal to 1 ";
     else if (!regexNumber.test(inputs.life)) errors.life = " Life must be a number ";


     else if (!inputs.attack) errors.attack = " Attack field is required ";
     else if (!regexNumber.test(inputs.attack)) errors.attack = " Attack must be a number ";

     else if (!inputs.defense) errors.defense = " Defense field is required ";
     else if (!regexNumber.test(inputs.defense)) errors.defense = " Defense must be a number ";

     else if (!inputs.speed) errors.speed = " Speed field is required ";
     else if (!regexNumber.test(inputs.speed)) errors.speed = " Speed must be a number ";

     else if (!inputs.height) errors.height = " Height field is required ";
     else if (!regexNumber.test(inputs.height)) errors.height = " Height must be a number ";

     else  if (!inputs.weight) errors.weight = " Weight field is required ";
     else if (!regexNumber.test(inputs.weight)) errors.weight = " Weight must be a number ";

     else if (inputs.types.length === 0 ) errors.types = "Please select at least one types";
     
    
     return errors;
}


export default validate;