// Produtos Abstratos
class Report {
  generate() {
    throw new Error("Método generate() deve ser implementado.");
  }
}

class Invoice {
  generate() {
    throw new Error("Método generate() deve ser implementado.");
  }
}

// Produtos Concretos PDF
class PdfReport extends Report {
  generate() {
    return "Relatório em PDF gerado!";
  }
}

class PdfInvoice extends Invoice {
  generate() {
    return "Fatura em PDF gerada!";
  }
}

// Produtos Concretos DOCX
class DocxReport extends Report {
  generate() {
    return "Relatório em DOCX gerado!";
  }
}

class DocxInvoice extends Invoice {
  generate() {
    return "Fatura em DOCX gerada!";
  }
}

// Abstract Factory
class DocumentFactory {
  createReport() {
    throw new Error("Método createReport() deve ser implementado.");
  }
  createInvoice() {
    throw new Error("Método createInvoice() deve ser implementado.");
  }
}

// Concrete Factory PDF
class PdfFactory extends DocumentFactory {
  createReport() {
    return new PdfReport();
  }
  createInvoice() {
    return new PdfInvoice();
  }
}

// Concrete Factory DOCX
class DocxFactory extends DocumentFactory {
  createReport() {
    return new DocxReport();
  }
  createInvoice() {
    return new DocxInvoice();
  }
}

// Cliente
function main(factory) {
  const report = factory.createReport();
  const invoice = factory.createInvoice();

  console.log(report.generate());
  console.log(invoice.generate());
}

// Testando
console.log("---- Usando PDF Factory ----");
main(new PdfFactory());

console.log("\n---- Usando DOCX Factory ----");
main(new DocxFactory());

