export default function controlForm (input){
   
    let errors = {}
    if(!input.name) errors.name= 'Ingrese un nombre'
    if(!input.origen) errors.origen= 'Ingrese un origen del personaje'
    if(!input.species) errors.species = 'Ingrese una especie'
    if(!input.image) errors.image = 'Ingrese una imagen '
    if(!input.episodes) errors.episodes = 'Seleccione al menos un episodio'
    
    
    return errors
}