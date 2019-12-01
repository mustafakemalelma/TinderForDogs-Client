const xmlFetch = config => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const parsedResponse = JSON.parse(xhr.response);
        resolve(parsedResponse);
      } else if (xhr.readyState === 4) reject(xhr.response);
    };

    xhr.open(config.method, "https://api.thedogapi.com/v1" + config.path);
    xhr.setRequestHeader("x-api-key", "858a3e05-e9ea-4b82-a874-d5cd4e701d66");

    xhr.send();
  });
};

export const fetchBreeds = async () => {
  const config = {
    method: "GET",
    path: "/breeds"
  };

  return await xmlFetch(config);
};
