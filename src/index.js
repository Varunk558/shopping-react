import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {LoginComponent} from './components/login/login.component';
import {NetflixIndex} from './netflix/netflix-index/netflix-index';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StateDataBindingComponent } from './components/data-binding/state-data-binding.component';
import { NasaComponent } from './components/nasa/nasa.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { StyleDemoComponent } from './components/style-demo/styledemo.component';
import { EventDemoComponent } from './components/event-demo/event-demo.component';
import { MouseEventDemoComponent } from './components/event-demo/mouse-event-demo.component';
import { KeyboardEventDemoComponent } from './components/event-demo/keyboard-event-demo.component';
import { ElementStateEventDemoComponent } from './components/event-demo/element-state-event-demo.component';
import { FormEventDemoComponent } from './components/event-demo/form-event-demo.component';
import { TimerEventsDemoComponent } from './components/event-demo/timer-events-demo.component';
import { TimerMemoryEventComponent } from './components/event-demo/timer-memory-event.component';
import { EmiCalculatorComponent } from './components/emi-calculator/emi-calculator.component';
import { SampleComponent } from './components/sample/sample.component';
import { PropertiesDemoComponent } from './components/properties-demo/properties.component';
import { ConditionalRenderingComponent } from './components/properties-demo/conditional-rendering.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConditionalRenderingComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
