export interface InfoEstado {
  estado: string;
  regiao: string;
}

const UF_PARA_ESTADO: Readonly<Record<string, InfoEstado>> = {
  AC: { estado: 'Acre', regiao: 'Norte' },
  AL: { estado: 'Alagoas', regiao: 'Nordeste' },
  AP: { estado: 'Amapá', regiao: 'Norte' },
  AM: { estado: 'Amazonas', regiao: 'Norte' },
  BA: { estado: 'Bahia', regiao: 'Nordeste' },
  CE: { estado: 'Ceará', regiao: 'Nordeste' },
  DF: { estado: 'Distrito Federal', regiao: 'Centro-Oeste' },
  ES: { estado: 'Espírito Santo', regiao: 'Sudeste' },
  GO: { estado: 'Goiás', regiao: 'Centro-Oeste' },
  MA: { estado: 'Maranhão', regiao: 'Nordeste' },
  MT: { estado: 'Mato Grosso', regiao: 'Centro-Oeste' },
  MS: { estado: 'Mato Grosso do Sul', regiao: 'Centro-Oeste' },
  MG: { estado: 'Minas Gerais', regiao: 'Sudeste' },
  PA: { estado: 'Pará', regiao: 'Norte' },
  PB: { estado: 'Paraíba', regiao: 'Nordeste' },
  PR: { estado: 'Paraná', regiao: 'Sul' },
  PE: { estado: 'Pernambuco', regiao: 'Nordeste' },
  PI: { estado: 'Piauí', regiao: 'Nordeste' },
  RJ: { estado: 'Rio de Janeiro', regiao: 'Sudeste' },
  RN: { estado: 'Rio Grande do Norte', regiao: 'Nordeste' },
  RS: { estado: 'Rio Grande do Sul', regiao: 'Sul' },
  RO: { estado: 'Rondônia', regiao: 'Norte' },
  RR: { estado: 'Roraima', regiao: 'Norte' },
  SC: { estado: 'Santa Catarina', regiao: 'Sul' },
  SP: { estado: 'São Paulo', regiao: 'Sudeste' },
  SE: { estado: 'Sergipe', regiao: 'Nordeste' },
  TO: { estado: 'Tocantins', regiao: 'Norte' },
};

/**
 * Deriva o nome do estado e a região a partir da sigla (UF).
 * A API ViaCEP não retorna esses dois campos diretamente.
 */
export function obterInfoEstado(uf: string): InfoEstado | undefined {
  return UF_PARA_ESTADO[uf.toUpperCase()];
}