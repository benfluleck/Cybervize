export interface Drug {
  id?: string;
  description: string;
  name: string;
  released: string;
  diseases: String[];
}

export interface DrugData {
  drugs: Drug[]
}
