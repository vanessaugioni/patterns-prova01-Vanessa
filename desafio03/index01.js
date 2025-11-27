
class Call {
  print(num) {}
}

class Video {
  scan(num) {}
}

class Faax {
  faxes(num) {}
}

class BasicCall extends Call {
  print(num) {
    console.log("🖨️ Ligando:", num);
  }
}

class BasicVideo extends Video {
  scan(num) {
    console.log("📄 Chamando:", num);
  }
}

class BasicFax extends Faax {
  faxes(num) {
    console.log("📠 Enviando fax:", num);
  }
}


class MultiFunctionCall {
  constructor(call, video, fax) {
    this.call = call;
    this.video = video;
    this.fax = fax;
  }

  print(num) {
    this.call.print(num);
  }

  scan(num) {
    this.video.scan(num);
  }

  faxes(num) {
    this.fax.faxes(num);
  }
}


const call = new BasicCall();
const video = new BasicVideo();
const fax = new BasicFax();

const multi = new MultiFunctionCall(call, video, fax);
multi.print("Contrato.pdf");
multi.scan("Relatório.pdf");
multi.faxes("Assinatura.png");
