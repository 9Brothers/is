export class IsCnpj {
  public static Check(value: string): boolean {
    value = value.trim();
    value = value.replace(/\D/g, '');

    let numeros: any, resultado: any;

    let digitos, soma, i, pos, tamanho, digitos_iguais;
    digitos_iguais = 1;

    if (value.length < 14 && value.length < 15) {
      return false;
    }
    for (i = 0; i < value.length - 1; i++) {
      if (value.charAt(i) != value.charAt(i + 1)) {
        digitos_iguais = 0;
        break;
      }
    }

    if (!digitos_iguais) {
      tamanho = value.length - 2
      numeros = value.substring(0, tamanho);
      digitos = value.substring(tamanho);
      soma = 0;
      pos = tamanho - 7;

      for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
          pos = 9;
        }
      }
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(0)) {
        return false;
      }
      tamanho = tamanho + 1;
      numeros = value.substring(0, tamanho);
      soma = 0;
      pos = tamanho - 7;

      for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
          pos = 9;
        }
      }
      
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(1)) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
}