import { EstadoCivilEnum } from "../enums/estado-civil.enum";

export const descricaoEstadoCivilMap: { [key in EstadoCivilEnum]: string } = {
  [EstadoCivilEnum.Solteiro]: 'Solteiro(a)',
  [EstadoCivilEnum.Casado]: 'Casado(a)',
  [EstadoCivilEnum.Divorciado]: 'Divorciado(a)',
};

export const estadoCivilArray = Object.keys(descricaoEstadoCivilMap).map(Number).map((key) => {
    return { id: key, nome: descricaoEstadoCivilMap[key as EstadoCivilEnum] };
});