const mockapi_url =
  "https://6384370c4ce192ac60520c79.mockapi.io/cuentaUsuarios";

const cursos_url = "https://6384370c4ce192ac60520c79.mockapi.io/cursos";

export const get = async () => {
  try {
    const response = await fetch(mockapi_url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const post = async (body) => {
  try {
    const response = await fetch(mockapi_url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getCursos = async () => {
  try {
    const response = await fetch(cursos_url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const postCursos = async (body) => {
  try {
    const response = await fetch(cursos_url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteCursos = async (id) => {
  try {
    // fetch(`cursos_url/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.text()) // or res.json()
    //   .then((res) => console.log(res));

    const response = await fetch(`${cursos_url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
