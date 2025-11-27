class SensorReader {
  read() {
    const temp = Math.floor(Math.random() * 60) - 10; 
    return temp;
  }
}


class TemperatureValidator {
  validate(temp) {
    if (temp < -5) throw new Error("Temperatura muito baixa!");
    if (temp > 45) throw new Error("Temperatura muito alta!");
    return true;
  }
}


class TemperatureDisplay {
  showTemperature(temp) {
    console.log(`🌡 Temperatura atual: ${temp}°C`);
  }

  showError(error) {
    console.error("Erro:", error.message);
  }
}


class TemperatureApp {
  constructor(reader, validator, display) {
    this.reader = reader;
    this.validator = validator;
    this.display = display;
  }

  run() {
    try {
      const temp = this.reader.read();
      this.validator.validate(temp);
      this.display.showTemperature(temp);

    } catch (error) {
      this.display.showError(error);
    }
  }
}


const reader = new SensorReader();
const validator = new TemperatureValidator();
const display = new TemperatureDisplay();

const app = new TemperatureApp(reader, validator, display);

app.run();   
