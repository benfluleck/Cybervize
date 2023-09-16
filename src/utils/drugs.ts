import { Drug, DrugData } from "@/entities/drugs";


export const handleDrugFilterByParameters = (filterValue: string, data: DrugData): Drug[] => {
  if (!filterValue) return [];

  return [
     ...new Set([...data.drugs.filter((drug) => drug.name.toLowerCase().startsWith(filterValue.toLowerCase())),
    ...data.drugs.filter((drug) =>
      drug.diseases.some((disease) => disease.toLowerCase().startsWith(filterValue.toLowerCase()))
    )
     ])]
};
