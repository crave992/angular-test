import { Category } from "./category.model";

export interface Forms {
  id? : number | null;
  title?: string | null;
  category?: string | null;
  global: boolean;
  vertical_market?: string | null;
  company? : string | null;
}

export const FormsDefaults: Forms = {
  id: null,
  title: '',
  category: '',
  global: false,
  vertical_market: '',
  company : ''
}
