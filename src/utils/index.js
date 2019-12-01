export const API_URL = "http://localhost:5000";

export const getStaticImage = path => `${API_URL}/images/${path}`;

export const hasErrors = fieldsError => {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
};
