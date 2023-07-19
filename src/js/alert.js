export default class Alert {
  constructor() {
    this.alerts = require("./alerts.json");
  }

  render() {
    // Create the alert list section
    const alertList = document.createElement("section");
    alertList.className = "alert-list";

    // Loop through the alerts and build a paragraph for each one
    this.alerts.forEach((alert) => {
      const p = document.createElement("p");
      p.textContent = alert.message;
      p.style.backgroundColor = alert.background;
      p.style.color = alert.color;

      alertList.appendChild(p);
    });

    // Prepend the alert list to the main element
    const main = document.querySelector("main");
    main.prepend(alertList);
  }
}
