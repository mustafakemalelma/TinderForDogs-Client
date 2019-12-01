export const API_URL = "http://localhost:5000";

//This function is getting the images from the api.
export const getStaticImage = path => `${API_URL}/images/${path}`;

//This function tells if there is errors in forms or not.
export const hasErrors = fieldsError => {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
};
