export const formatarNumeroTelefone = (numeroTelefone: string): string => {
    return numeroTelefone.slice(0, -4) + "-" + numeroTelefone.slice(-4);
}