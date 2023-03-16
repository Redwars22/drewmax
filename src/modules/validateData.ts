import { toast } from "react-toastify";
import {
  cpf_regex,
  cpf_regex2,
  elo_regex,
  hipercard_regex,
  mastercard_regex,
  visa_regex,
} from "../utils/regex";

function throwError(err: string) {
  toast(err);
}

/**
 * Verifica se o cartão de crédito informado é válido e se é de uma bandeira suportada
 * @param CC Recebe o número do cartão de crédito
 * @returns {boolean} Retorna true se o cartão for válido e false se for inválido
 */

function isCreditCardValid(CC: string): boolean {
  if (CC.length === 16)
    if (
      CC.match(elo_regex) ||
      CC.match(hipercard_regex) ||
      CC.match(visa_regex) ||
      CC.match(mastercard_regex)
    ) {
      return true;
    }

  throwError(
    "Cartão inválido ou bandeira não aceita. Insira um cartão de crédito válido."
  );
  return false;
}

function isCPFValid(CPF: string): boolean {
  if (Boolean(CPF.match(cpf_regex2))) return true;

  throwError("Insira um CPF válido!");
  return false;
}

function isNameValid(name: string): boolean {
  if (name !== undefined && name !== null && name !== "") return true;

  throwError("Por favor insira seu nome!");
  return false;
}

/**
 *
 * @param CC
 * @param CCOwner
 * @param validity
 * @param ownerCPF
 * @returns
 */
export function validatePaymentData(
  CC: string,
  CCOwner: string,
  validity: string,
  ownerCPF: string
): boolean {
  return (
    isCreditCardValid(CC) &&
    isCPFValid(ownerCPF) &&
    validity !== null &&
    isNameValid(CCOwner)
  );
}
