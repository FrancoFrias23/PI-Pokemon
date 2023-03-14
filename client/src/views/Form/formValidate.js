const formValidate =(input,pokemons)=>{
    let errors ={};
    let pokemonsNames=pokemons.map((p)=>p.name)
 //   console.log(pokemonsNames)
    if(!input.name){
        errors.name ="Name is required"
    }
    if(!(/^[a-zA-Z\s]*$/).test(input.name)){
        errors.name = "The name cannot have special characters or numbers" 
    }
    if(input.name.length>15){
        errors.name= "The input cannot be longer than 15 characters"
    }
    if(pokemonsNames.includes(input.name)){
        errors.name = "The name must be different"
    }
    if(input.hp < 9 || input.hp > 260){
        if(input.hp < 9 ){
            errors.hp = 'HP should be greater than 9'
        }
        if( input.hp > 260){
            errors.hp = 'HP should be less than 260'
        } 
    }
    if(input.hp.toString().length>15){
        errors.hp= "The input cannot be longer than 15 characters"
    }
    if(input.attack < 5 || input.attack > 160){
        if(input.attack < 5 ){
            errors.attack = 'Attack should be greater than  5'
        }
        if( input.attack > 160){
            errors.attack = 'Attack should be less than  160'
        } 
    }
    if(input.attack.toString().length>15){
        errors.attack= "The input cannot be longer than 15 characters"
    }
    if(input.defense < 5 || input.defense > 190){
        if(input.defense < 5 ){
            errors.defense = 'Defense should be greater than  5'
        }
        if( input.defense > 190){
            errors.defense = 'Defense should be less than  190'
        } 
    }
    if(input.defense.toString().length>15){
        errors.defense= "The input cannot be longer than 15 characters"
    }
    if(input.speed < 10 || input.speed > 150){
        if(input.speed < 10 ){
            errors.speed = 'Speed should be greater than  10'
        }
        if( input.speed > 150){
            errors.speed = 'Speed should be less than 150'
        } 
    }
    if(input.speed.toString().length>15){
        errors.speed= "The input cannot be longer than 15 characters"
    }
    if(input.weight < 1 || input.weight > 9999){
        if(input.weight < 1 ){
            errors.weight = 'Weight should be greater than  1 Hg'
        }
        if( input.weight > 9999){
            errors.weight = 'Weight should be less than  9999 Hg'
        } 
    }
    if(input.weight.toString().length>15){
        errors.weight= "The input cannot be longer than 15 characters"
    }
    if(input.height < 1 || input.height > 200){
        if(input.height < 1 ){
            errors.height = 'Height should be greater than  1 dm'
        }
        if( input.height > 200){
            errors.height = 'Height should be less than  200 dm'
        } 
    }
    if(input.height.toString().length>15){
        errors.height= "The input cannot be longer than 15 characters"
    }
    if(!parseInt(input.IdType1)){
        errors.types= "You must select at least one type"
    }
    return errors
}
export default formValidate