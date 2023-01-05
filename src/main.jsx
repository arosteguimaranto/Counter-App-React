import React from "react";
// llamada al React DOM para renderizar componentes
import {createRoot} from "react-dom/client"; 
//import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";
//import { HelloWorldApp } from "./HelloWorldApp";

import './styles.css';



const root = createRoot(document.getElementById('root'));


root.render(<FirstApp title="Hola, Soy Vegeta"/>);
