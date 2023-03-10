export interface Collection {
  id: string;
  name: string;
  symbol: string;
  type: string;
  chainType: string;
  chainId: number;
  subtype: string;
  description: string;
  infiniteSupply: boolean;
  maxSupply: number;
  price: number;
  pricingModel: string;
  deployed: boolean;
  isCometToken: boolean;
  backgroundUpload: string;
}

export interface CreateCollection {
  backgroundUpload: any;
  name: string;
  symbol: string;
  description: string;
  subtype?: "numbered_pass" | "static_pass";
  pricingModel?: "pay_once" | "free";
  price?: number;
  infiniteSupply?: boolean;
  maxSupply?: number;
}

export interface GetCollections {
  collections: Collection[];
}

export interface Address {
  chainType: string;
  chainId: number;
  address: string;
  primary: boolean;
  createdAt: Date;
  id: string;
}

export interface Profile {
  profilePictureKey: string;
}

export interface User {
  id: string;
  username: string;
  addresses: any[];
  profile: Profile;
}

export interface Holder {
  address: Address;
  user: User;
}

export interface Holders {
  holders: Holder[];
}
