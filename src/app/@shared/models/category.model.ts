export interface Category {
  id?: number | null;
  name?: string | null;
}

export const CategoryDefaults: Category = {
  id: null,
  name: '',
}
