export const converterDataObjParaDataPtBr = (data: Date): string => {
  const dia = padZero(data.getDate());
  const mes = padZero(data.getMonth() + 1);
  const ano = padZero(data.getFullYear());

  return `${dia}/${mes}/${ano}`;
};

const padZero = (valor: number): string => {
  return valor < 10 ? `0${valor}` : valor.toString();
};
