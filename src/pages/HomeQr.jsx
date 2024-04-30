/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HomeQr = ({ computers, phone, monitor }) => {
  console.log("home", computers);
  const [area, setArea] = useState("Marketing");
  const [activos, setActivos] = useState("computadoras");
  // const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setActivos("computadoras");
    setArea("Marketing");
  }, []);

  //filtros computadoras

  const compuVentas = computers.filter((compu) => compu.groups_id === "Ventas");
  const compuMkt = computers.filter((compu) => compu.groups_id === "Marketing");
  const compuGestion = computers.filter(
    (compu) => compu.groups_id === "Gestión"
  );
  const compuRH = computers.filter(
    (compu) => compu.groups_id === "Recursos Humanos"
  );
  const compuConta = computers.filter(
    (compu) => compu.groups_id === "Contabilidad"
  );
  const compuCoord = computers.filter(
    (compu) => compu.groups_id === "Coordinación"
  );
  const compuAux = computers.filter(
    (compu) => compu.groups_id === "Coordinación &#62; Auxiliar Coordinación"
  );

  //filtros telefonos

  const telefVentas = phone.filter((compu) => compu.groups_id === "Ventas");
  const telefMkt = phone.filter((compu) => compu.groups_id === "Marketing");
  const telefGestion = phone.filter((compu) => compu.groups_id === "Gestión");
  const telefRH = phone.filter(
    (compu) => compu.groups_id === "Recursos Humanos"
  );
  const telefConta = phone.filter(
    (compu) => compu.groups_id === "Contabilidad"
  );
  const telefCoord = phone.filter(
    (compu) => compu.groups_id === "Coordinación"
  );
  const telefAux = phone.filter(
    (compu) => compu.groups_id === "Coordinación &#62; Auxiliar Coordinación"
  );

  //filtros monitores

  const monitfVentas = monitor.filter((compu) => compu.groups_id === "Ventas");
  const monitfMkt = monitor.filter((compu) => compu.groups_id === "Marketing");
  const monitfGestion = monitor.filter(
    (compu) => compu.groups_id === "Gestión"
  );
  const monitfRH = monitor.filter(
    (compu) => compu.groups_id === "Recursos Humanos"
  );
  const monitfConta = monitor.filter(
    (compu) => compu.groups_id === "Contabilidad"
  );
  const monitfCoord = monitor.filter(
    (compu) => compu.groups_id === "Coordinación"
  );
  const monitfAux = monitor.filter(
    (compu) => compu.groups_id === "Coordinación &#62; Auxiliar Coordinación"
  );

  return (
    <div className="App">
      <div className="nav">
        <ul>
          <li
            onClick={() => {
              setActivos("computadoras");
            }}
          >
            Computadoras
          </li>
          <li
            onClick={() => {
              setActivos("telefonos");
            }}
          >
            Telefonos
          </li>
          <li
            onClick={() => {
              setActivos("monitores");
            }}
          >
            Monitores
          </li>
          <Link to={"/info"}>
            <li>Informacion</li>
          </Link>
        </ul>
      </div>
      <div className="contenido">
        {activos === "computadoras" ? (
          <div className="qrMap">
            <div className="titular">
              <h1>Computadoras</h1>
              <ul>
                <li onClick={() => setArea("Marketing")}>Marketing</li>
                <li onClick={() => setArea("Coordinacion")}>Coordinacion</li>
                <li onClick={() => setArea("Auxiliar Coordinación")}>
                  Auxiliar Coordinación
                </li>
                <li onClick={() => setArea("Contabilidad")}>Contabilidad</li>
                <li onClick={() => setArea("Recursos Humanos")}>
                  Recursos Humanos
                </li>
                <li onClick={() => setArea("Ventas")}>Ventas</li>
                <li onClick={() => setArea("Gestión")}>Gestión</li>
              </ul>
            </div>
            {/* Renderiza los activos y genera un código QR para cada número de serie */}
            <div className="computers">
              {area === "Marketing"
                ? compuMkt.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : area === "Coordinacion"
                ? compuCoord.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : area === "Auxiliar Coordinación"
                ? compuAux.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode value={item.serial} />
                    </div>
                  ))
                : area === "Contabilidad"
                ? compuConta.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : area === "Recursos Humanos"
                ? compuRH.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : area === "Ventas"
                ? compuVentas.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : area === "Gestión"
                ? compuGestion.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
        ) : activos === "telefonos" ? (
          <div className="qrMap">
            <div className="titular">
              <h1>Telefonos</h1>
              <ul>
                <li onClick={() => setArea("Marketing")}>Marketing</li>
                <li onClick={() => setArea("Coordinacion")}>Coordinacion</li>
                <li onClick={() => setArea("Auxiliar Coordinación")}>
                  Auxiliar Coordinación
                </li>
                <li onClick={() => setArea("Contabilidad")}>Contabilidad</li>
                <li onClick={() => setArea("Recursos Humanos")}>
                  Recursos Humanos
                </li>
                <li onClick={() => setArea("Ventas")}>Ventas</li>
                <li onClick={() => setArea("Gestión")}>Gestión</li>
              </ul>
            </div>
            {/* Renderiza los activos y genera un código QR para cada número de serie */}
            <div className="computers">
              {area === "Marketing"
                ? telefMkt.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : area === "Coordinacion"
                ? telefCoord.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : area === "Auxiliar Coordinación"
                ? telefAux.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : area === "Contabilidad"
                ? telefConta.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode value={item.serial} />
                    </div>
                  ))
                : area === "Recursos Humanos"
                ? telefRH.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : area === "Ventas"
                ? telefVentas.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode value={item.serial} />
                    </div>
                  ))
                : area === "Gestión"
                ? telefGestion.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
        ) : activos === "monitores" ? (
          <div className="qrMap">
            <div className="titular">
              <h1>Monitores</h1>
              <ul>
                <li onClick={() => setArea("Marketing")}>Marketing</li>
                <li onClick={() => setArea("Coordinacion")}>Coordinacion</li>
                <li onClick={() => setArea("Auxiliar Coordinación")}>
                  Auxiliar Coordinación
                </li>
                <li onClick={() => setArea("Contabilidad")}>Contabilidad</li>
                <li onClick={() => setArea("Recursos Humanos")}>
                  Recursos Humanos
                </li>
                <li onClick={() => setArea("Ventas")}>Ventas</li>
                <li onClick={() => setArea("Gestión")}>Gestión</li>
              </ul>
            </div>
            {/* Renderiza los activos y genera un código QR para cada número de serie */}
            <div className="computers">
              {area === "Marketing"
                ? monitfMkt.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode value={item.serial} />
                    </div>
                  ))
                : area === "Coordinacion"
                ? monitfCoord.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : area === "Auxiliar Coordinación"
                ? monitfAux.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : area === "Contabilidad"
                ? monitfConta.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : area === "Recursos Humanos"
                ? monitfRH.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`hhttps://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : area === "Ventas"
                ? monitfVentas.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : area === "Gestión"
                ? monitfGestion.map((item) => (
                    <div className="qrItem" key={item.id}>
                      <div>
                        <strong>Número de Serie:</strong> <p>{item.serial}</p>
                      </div>

                      {/* Genera el código QR para el número de serie */}
                      <QRCode
                        value={`https://qragus.netlify.app/info/${item.serial}`}
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
        ) : null}
      </div>

      {/* Página de detalles del producto */}
      {/* {selectedProduct && (
        <div className="product-details">
          <h2>Detalles del Producto</h2>
          <p>
            <strong>Número de Serie:</strong> {selectedProduct.serial}
          </p>
          <p>
            <strong>ID usuario:</strong> {selectedProduct.users_id}
          </p>
          <p>
            <strong>grupo:</strong> {selectedProduct.groups_id}
          </p>
          <p>
            <strong>Ubicacion:</strong> {selectedProduct.locations_id}
          </p>
          <p>
            <strong>id producto:</strong> {selectedProduct.id}
          </p>
        </div>
      )} */}
    </div>
  );
};

export default HomeQr;
