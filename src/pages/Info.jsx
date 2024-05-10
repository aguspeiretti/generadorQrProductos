/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./products.css";

const Info = () => {
  const [computers, setComputers] = useState([]);
  const [phone, setPhone] = useState([]);
  const [monitor, setMonitor] = useState([]);
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    const apiUrl =
      "https://mundojob.with23.glpi-network.cloud/apirest.php/initSession/";
    const appToken = import.meta.env.VITE_REACT_APP_API_TOKEN;

    // Define las credenciales de autenticación (reemplaza con tus propias credenciales)
    const login = "admin";
    const password = "123";

    // Codifica las credenciales en Base64
    const credentials = btoa(`${login}:${password}`);

    // Realiza la solicitud GET para obtener el token de sesión
    axios
      .get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          "App-Token": appToken,
          Authorization: `Basic ${credentials}`,
        },
      })
      .then((response) => {
        setSessionToken(response.data.session_token);
      })
      .catch((error) => {
        console.error("Error al obtener el token de sesión:", error);
      });
  }, []); // Solo se ejecutará una vez al cargar el componente

  useEffect(() => {
    if (sessionToken) {
      fetchComputers();
      fetchPhones();
      fetchMonitors();
    }
  }, [sessionToken]); // Se ejecutará cada vez que sessionToken cambie

  const fetchComputers = async () => {
    // const limit = 50; // número de resultados por página
    // const offset = 0; // desplazamiento inicial
    try {
      // Solicitar activos utilizando el token de sesión
      const computerResponse = await fetch(
        `https://mundojob.with23.glpi-network.cloud/apirest.php/Computer/?range=0-100&expand_dropdowns=true`,
        {
          headers: {
            "Content-Type": "application/json",
            "Session-Token": sessionToken,
            // Reemplaza "TU_TOKEN_DE_AUTORIZACIÓN_AQUÍ" con tu token de autorización válido
            "App-Token": import.meta.env.VITE_REACT_APP_API_TOKEN,
          },
        }
      );

      const data = await computerResponse.json();
      console.log("computer", data);
      setComputers(data);
    } catch (error) {
      console.error("Error al obtener los activos:", error);
    }
  };
  const fetchPhones = async () => {
    try {
      // Solicitar activos utilizando el token de sesión
      const computerResponse = await fetch(
        "https://mundojob.with23.glpi-network.cloud/apirest.php/Phone/?range=0-100&expand_dropdowns=true",
        {
          headers: {
            "Content-Type": "application/json",
            "Session-Token": sessionToken,
            // Reemplaza "TU_TOKEN_DE_AUTORIZACIÓN_AQUÍ" con tu token de autorización válido
            "App-Token": import.meta.env.VITE_REACT_APP_API_TOKEN,
          },
        }
      );

      const data = await computerResponse.json();
      console.log("phones", data);
      setPhone(data);
    } catch (error) {
      console.error("Error al obtener los activos:", error);
    }
  };
  const fetchMonitors = async () => {
    try {
      // Solicitar activos utilizando el token de sesión
      const computerResponse = await fetch(
        "https://mundojob.with23.glpi-network.cloud/apirest.php/Monitor/?range=0-100&expand_dropdowns=true",
        {
          headers: {
            "Content-Type": "application/json",
            "Session-Token": sessionToken,
            // Reemplaza "TU_TOKEN_DE_AUTORIZACIÓN_AQUÍ" con tu token de autorización válido
            "App-Token": import.meta.env.VITE_REACT_APP_API_TOKEN,
          },
        }
      );

      const data = await computerResponse.json();
      console.log("monitor", data);
      setMonitor(data);
    } catch (error) {
      console.error("Error al obtener los activos:", error);
    }
  };

  // Extrae el número de serie de la URL
  let { serial } = useParams();

  // Encuentra el producto correspondiente al número de serie
  const product = computers
    .concat(phone, monitor)
    .find((item) => item.serial === serial);

  return (
    <div className="info">
      <div className="product-details">
        {product ? (
          <div className="card">
            <h2>Detalles del Producto</h2>
            <p>
              <strong>Número de Serie:</strong> {product.serial}
            </p>

            <p className="g">
              <strong>Grupo:</strong> <p>{product.groups_id}</p>
            </p>
            <p>
              <strong>Ubicación:</strong> {product.locations_id}
            </p>
            <p className="g">
              <strong>ID Usuario:</strong> <p>{product.users_id}</p>
            </p>
            <p>
              <strong>Nombre:</strong> {product.name}
            </p>
            <p>
              <strong>modelo:</strong> {product.computermodels_id}
            </p>
            <p>
              <strong>comentarios:</strong> {product.comment}
            </p>
          </div>
        ) : (
          <p className="espera">Esperando datos...</p>
        )}
      </div>
    </div>
  );
};

export default Info;
