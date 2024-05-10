/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import "./App.css";
import HomeQr from "./pages/HomeQr";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Info from "./pages/Info";
import Loader from "./loader/Loader";

const App = () => {
  const [computers, setComputers] = useState([]);
  const [phone, setPhone] = useState([]);
  const [monitor, setMonitor] = useState([]);
  const [sessionToken, setSessionToken] = useState("");
  useEffect(() => {
    const apiUrl =
      "https://mundojob.with23.glpi-network.cloud/apirest.php/initSession/";
    const appToken = import.meta.env.VITE_REACT_APP_API_TOKEN;
    console.log("token", appToken);

    // Define las credenciales de autenticación (reemplaza con tus propias credenciales)
    const login = "admin";
    const password = "6K73By@@rcugPgR";

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

  const allDataLoaded =
    computers.length > 0 && phone.length > 0 && monitor.length > 0;

  return allDataLoaded ? (
    <Routes>
      <Route
        path="/"
        element={
          <HomeQr computers={computers} phone={phone} monitor={monitor} />
        }
      />
      <Route
        path="/info/:serial"
        element={<Info computers={computers} phone={phone} monitor={monitor} />}
      />
    </Routes>
  ) : (
    <p>
      <Loader />
    </p>
  );
};

export default App;
