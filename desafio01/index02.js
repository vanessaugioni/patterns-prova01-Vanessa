class Window {
  generate() {
    throw new Error("Método generate() deve ser implementado.");
  }
}

class Button {
  generate() {
    throw new Error("Método generate() deve ser implementado.");
  }
}

class LightButton extends Button {
  generate() {
    return "Botão branco criado!!";
  }
}

class LightWindow extends Window {
  generate() {
    return "Janela clara aberta!!";
  }
}

class DarkButton extends Button {
  generate() {
    return "Botão preto criado!!";
  }
}

class DarkWindow  extends Window {
  generate() {
    return "Janela escura aberta!";
  }
}

class TypeFactory {
  createButton() {
    throw new Error("Método createButton() deve ser implementado.");
  }
  createWindow() {
    throw new Error("Método createWindow() deve ser implementado.");
  }
}

class LightFactory extends TypeFactory {
  createButton() {
    return new LightButton();
  }
  createWindow() {
    return new LightWindow();
  }
}

class DarkFactory extends TypeFactory {
  createButton() {
    return new DarkButton();
  }
  createWindow() {
    return new DarkWindow();
  }
}

function main(factory) {
  const button = factory.createButton();
  const window = factory.createWindow();

  console.log(button.generate());
  console.log(window.generate());
}