export interface LocationRequestDTO {
  id: number;
  address: string;
  district: {
    name: string;
    department: {
      name: string;
    };
  };
}
