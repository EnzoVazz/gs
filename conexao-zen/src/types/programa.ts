type EmpresaType = {
  id_empresa: number;
  nm_empresa: string;
  nr_cnpj: string;
  setor: string;
};

export type ProgramaType = {
  id_programa: number;
  nm_programa: string;
  dt_inicio_programa: string; 
  dt_fim_programa: string | null;
  descricao_programa: string;
  empresa: EmpresaType;
};