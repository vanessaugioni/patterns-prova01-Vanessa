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

class Radio extends Device {
  turnOn() {
    console.log("Rádio ligado.");
  }
  turnOff() {
    console.log("Rádio desligado.");
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
    console.log("Dispositivo no modo mudo.");
  }
}


const tv = new TV();
const radio = new Radio();

const tvRemote = new RemoteControl(tv);
tvRemote.pressPowerButton(true);
tvRemote.pressPowerButton(false);

const radioRemote = new AdvancedRemoteControl(radio);
radioRemote.pressPowerButton(true);
radioRemote.mute();
radioRemote.pressPowerButton(false);
