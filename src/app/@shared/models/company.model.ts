export interface Company {
  id?: number | null;
  name?: string | null;
}

export const CompanyDefaults: Company = {
  id: null,
  name: ''
}
