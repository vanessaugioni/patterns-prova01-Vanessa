class LegacyPaymentSystem {
  makePayment(amount) {
    console.log(`Pagando R$${amount} com sistema legado.`);
  }
}

class ModernPaymentAPI {
  makeTransaction(amountInCents) {
    console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
  }
}

class PaymentAdapter {
  constructor(modernAPI) {
    this.modernAPI = modernAPI;
  }

  makePayment(amount) {
    const amountInCents = amount * 100;
    this.modernAPI.makeTransaction(amountInCents);
  }
}

function payOrder(processor, amount) {
  processor.makePayment(amount);
}

const legacyProcessor = new LegacyPaymentSystem();
payOrder(legacyProcessor, 100);

const modernAPI = new ModernPaymentAPI();
const adaptedProcessor = new PaymentAdapter(modernAPI);
payOrder(adaptedProcessor, 200);
