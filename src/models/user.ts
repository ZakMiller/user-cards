export interface Address {
  street: string;
  suite?: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserDto {
  id: string;
  name: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export class User {
  dto: UserDto;

  constructor(dto: UserDto) {
    this.dto = dto;
  }

  get name(): string {
    return this.dto.name;
  }

  get nameWithUsername(): string {
    return `${this.dto.name} (@${this.dto.username})`;
  }

  get id(): string {
    return this.dto.id;
  }
  get phone(): string {
    return this.dto.phone;
  }
  get email(): string {
    return this.dto.email;
  }
  get website(): string {
    return this.dto.website;
  }
  get company(): string {
    return this.dto.company.name;
  }
  get addressStreet(): string {
    return this.dto.address.street;
  }
  get addressSuite(): string | undefined {
    return this.dto.address.suite;
  }
  get addressLineTwo(): string {
    return `${this.dto.address.city} ${this.dto.address.zipcode}`;
  }
}
