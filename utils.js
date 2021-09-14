/**
 * @description Función que verifica si hay elementos no numericos dentro de un arreglo
 * @param {*} array
 * @returns boolean
 */
const arrayNumberValidator = (array = []) => {
  const NaNInArray = (element) => typeof element !== 'number';
  const notANumber = array.some(NaNInArray);

  return notANumber;
};

module.exports = arrayNumberValidator;
