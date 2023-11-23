export interface ILocationRequestDTO {
  id: number;
  address: string;
  district: {
    name: string;
    department: {
      name: string;
    };
  };
}
