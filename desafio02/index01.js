class LegacyPaymentSystem {
  makePayment(amount) {
    console.log(`Pagando R$${amount} com sistema legado.`);
  }
}

class ModernPaymentAPI {
  process(amountInCents) {
    console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
  }
}

class Paydapter extends LegacyPaymentSystem {
  constructor(payService) {
    super();
    this.payService = payService;
  }

  send(amount) {
    this.payService.process(amount);
  }
}


function typePay(legacy, modern) {
  legacy.send(modern);
}


const payType = new LegacyPaymentSystem();
notifyUser(payType, 100); 


const payService = new ModernPaymentAPI();
const payMod = new Paydapter(payService);


notifyUser(payMod, 200); 
