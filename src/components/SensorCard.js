import { SENSORS } from "../modules/sensors";

class SensorCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        
      }
      .card {
        background-color: var(--bg-card-color);
        border-radius: var(--border-radius);
        width: 270px;
        height: 265px;
        overflow: hidden;
        margin: 0 auto;
        box-shadow: 0px 3.38px 5.64px 0px var(--box-shadow);
        ;
      }

      .card__title {
        margin: 0;
        padding-top: 2rem;
        font-size: 1.8em;
        font-weight: 500;
        text-align: center;
      }

      .card__value {
        font-family: Roboto, sans-serif;
        font-size: 44px;
        font-weight: 500;
        text-align: center;
        margin: 0;
        margin: 1.8rem 0px;
        color: var(--primary-color);
      }

      .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 2rem;
      }

      .value {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 4rem;
        height: auto;
        padding-left: 0.9rem;
        padding-right: 1rem;
        font-family: Roboto, sans-serif;
      }

      .value__min-icon ,
      .clock__clock-icon{
        padding-right: 0.25rem;
      }
      .value__max-icon {
        padding-left: 0.15rem;
      }

      .value__value {
        font-size: 19px;
      }

      .clock {
        display: flex;
        align-items: center;
        font-size: 12px;
        margin-top: 0.4rem;
        text-align: right;
      }
      .clock__clock-icon {
        margin: auto 0;
      }
    `;
  }

  connectedCallback() {
    this.sensor = this.getAttribute("sensor");
    this.sensors = SENSORS[this.sensor];
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SensorCard.styles}</style>
    <div class="card">
      <h1 class="card__title">${this.sensor.charAt(0).toUpperCase() + this.sensor.slice(1)}</h1>
      <h2 class="card__value">${this.sensors.value}<span class="card__value--unit">${this.sensors.unit}</span></h2>
      <footer class="footer">
        <div class="value">
          <img src="./assets/min.svg" alt="min value" class="value__min-icon">
          <span class="value__value">${this.sensors.min + this.sensors.unit}</span>
          <div class="clock">
            <img src="./assets/clock.svg" alt="clock" class="clock__clock-icon">
            <span class="clock__clock-value">${this.sensors.clockMin}</span>
          </div>
        </div>
        <img src="${this.sensors.icon}" alt="icon sensor">
        <div class="value">
          <span class="value__value">${this.sensors.max + this.sensors.unit}</span>
          <img src="./assets/max.svg" alt="max value" class="value__max-icon">
          <div class="clock">
            <img src="./assets/clock.svg" alt="clock" class="clock__clock-icon">
            <span class="clock__clock-value">${this.sensors.clockMax}</span>
          </div>
        </div>
      </footer>
    </div>`;
  }
}

customElements.define("sensor-card", SensorCard);