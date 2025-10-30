class Device {
  turnOn() {
    throw new Error("Método 'turnOn()' deve ser implementado.");
  }
  turnOff() {
    throw new Error("Método 'turnOff()' deve ser implementado.");
  }
}

class TV extends Device {
  turnOn() {
    console.log("TV ligada.");
  }
  turnOff() {
    console.log("TV desligada.");
  }
}

class Alexa extends Device {
  turnOn() {
    console.log("Alexa ligada.");
  }
  turnOff() {
    console.log("Alexa desligada.");
  }
}

class RemoteControl {
  constructor(device) {
    this.device = device;
  }

  pressPowerButton(on) {
    if (on) this.device.turnOn();
    else this.device.turnOff();
  }
}

class AdvancedRemoteControl extends RemoteControl {
  mute() {
    console.log("Dispositivo no modo mudo!!!");
  }
}

const tv = new TV();
const alexa = new Alexa();

const tvRemote = new RemoteControl(tv);
tvRemote.pressPowerButton(true);
tvRemote.pressPowerButton(false);

const alexaRemote = new AdvancedRemoteControl(alexa);
alexaRemote.pressPowerButton(true);
alexaRemote.mute();
alexaRemote.pressPowerButton(false);
