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

class ModernPaymentAdapter extends LegacyPaymentSystem {
  constructor(modernAPI) {
    this.modernAPI = modernAPI;
  }

  makePayment(amount) {
    const amountInCents = amount * 100;
    this.modernAPI.process(amountInCents);
  }
}

class PaymentProcessor {
  constructor(system) {
    this.system = system;
  }

  pay(amount) {
    this.system.makePayment(amount);
  }
}


const legacy = new LegacyPaymentSystem();
const legacyProcessor = new PaymentProcessor(legacy);
legacyProcessor.pay(100);


const modernAPI = new ModernPaymentAPI();
const adaptedModern = new ModernPaymentAdapter(modernAPI);
const modernProcessor = new PaymentProcessor(adaptedModern);
modernProcessor.pay(200);
