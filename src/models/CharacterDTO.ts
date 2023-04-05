export interface CharacterDTO {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
  species: string;
  url: string;

  origin: {
    name: string;
    url: string;
  };

  location: {
    name: string;
    url: string;
  };
}
