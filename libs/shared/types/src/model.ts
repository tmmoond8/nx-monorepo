export declare type YNValue = 'Y' | 'N';

export interface Ignore {
  ignoredUser: number;
  imageUrl: string | null;
  nickname: string;
}

export interface Token {
  accessToken: string;
  refreshToken: string;
  tokenType?: string;
  expiresIn?: string;
  idToken?: string; // for apple
}

export type Provider = 'naver' | 'kakao' | 'google' | 'apple';

export interface User {
  id: number;
  idx: string;
  address: string;
  imageUrl?: string;
  name?: string;
  nickName?: string;
  phone?: string;
  role: UserRole;
  withDrawYn: YNValue;
}
export type UserRole = 'TEMPO' | 'BASIC' | 'ADMIN';

export interface Tag {
  createdAt: string;
  id: number;
  name: string;
}

export interface Image {
  createdAt: string;
  id: number;
  name: string;
}

export interface Product {
  activeYn: string;
  category: string;
  createdAt: string;
  contents?: string;
  deadLineTime: string;
  timeAttackHours: number;
  deletedAt: null;
  deliveryCost: number;
  detailName?: string;
  discountRate: number;
  id: number;
  idx: string;
  imageName: string;
  name: string;
  nameEn?: string | null;
  nameJp?: string | null;
  nameCn?: string | null;
  displayName: string;
  originPrice: number;
  price: number;
  serialNumber: null;
  status: ProductStatus;
  startTime: string | null;
  isHotYn?: YNValue;
  stock: number;
  subCategory: string;
  type: 'AUCTION' | 'BASIC' | 'TIME';
  detailType: 'BASIC' | 'TIME';
  currentCnt: number;
  limitCnt: number;
  wishCount: number;
  productHistories?: ProductionHistory[];
  productImages?: Image[];
  productTags?: Tag[];
  productOptions?: {
    createdAt: string;
    id: number;
    name: string;
    price: number;
    stock: number;
  }[];
  videoThumbnailUrl?: string;
  videoUrl?: string;
  videoWemUrl?: string;
  updatedAt: string;

  // 제안하기 기능용
  currentOwner: CurrentOwner;
  fee: string; // 옥션, BuyNow 수수료
  offerFee: string; // 제안하기 수수료
  feeCost: number; // 옥션, 마켓 공통 결제하기용 수수료
}

export interface CurrentOwner {
  id: number;
  nickName: string;
  imageUrl: string;
  fee: string;
}

export type ProductStatus =
  | 'ONSALE'
  | 'FINISH'
  | 'PREPARE'
  | 'NOTUSE'
  | 'FAIL'
  | 'TIMES'
  | 'NOSTOCK';

export interface ProductionHistory {
  country: string;
  createdAt: string;
  updatedAt: string;
  id: number;
  nickName: string;
  imageUrl: string | null;
  price: number;
}

export interface Category {
  id: number | null;
  createdAt: string;
  depth: number;
  displayOrder: number;
  name: string;
  imageUrl: string | null;
  mobileImageUrl: string | null;
  parentId: number | null;
  fee: string;
  children?: Category[];
}

export interface CategoryTag {
  category?: number;
  type: string;
  name: string;
  tagId: number;
  count: number;
}

export interface CategoryTypeFilter {
  category: number;
  type: string;
  name: string;
  tagId: number;
}

export interface Bid {
  bidSuccessUser: number | null;
  deadLineTime: string;
  detailName: string;
  startTime: string | null;
  id: number;
  imageName: string;
  myBidPrice: number;
  name: string;
  price: number;
  orderStatus: 'SUCCESS' | string;
  status: ProductStatus;
}

export interface Banner {
  type?: 'image' | 'video';
  content: string;
  createdAt: string;
  displayOrder: number;
  enableYn: string;
  id: number;
  imageUrl?: string | null;
  imageUrlEn?: string | null;
  videoUrl?: string;
  link: string;
  mobileImageUrl?: string | null;
  mobileImageUrlEn?: string | null;
  mobileVideoUrl?: string;
  subContent01: string;
  subContent02: string;
  subContent03: string;
  subContent04: string;
  subContent05: string;
  title: string;
  background: string | null;
  backgroundEn: string | null;
}

export interface RestBanner {
  categoryId: number;
  displayOrder: number;
  items: Banner[];
  name: string;
  nameCn: string;
  nameEn: string;
  nameJp: string;
}

export interface ProductOption {
  id: number;
  name: string;
  price: number;
  stock: number;
}
export interface Order {
  detailName: string;
  id: number;
  idx: string;
  imageName: string;
  name: string;
  orderStatus: 'ONGOING' | 'SUCCESS';
  orderUpdatedAt?: string;
  price: number;
  productOptions: ProductOption[];
  status: 'FINISH' | string;
  mintYn?: YNValue;
  userRegisterYn?: YNValue;
}

export interface Coupon {
  etc: null;
  holderAddress: null;
  id: number;
  numValue: number;
  phone: string;
  route: 'game' | 'nft';
  type: string;
  useYn: YNValue;
  updatedAt: string;
}

export interface Post {
  createdAt: string;
  id: number;
  thumbnail: { id: number; post: number; url: string };
  title: string;
  viewCnt: number;
}

export type SortBy =
  | 'id:DESC'
  | 'price:DESC'
  | 'price:ASC'
  | 'deadLineTime:ASC';

export interface Popup {
  createdAt: string;
  id: number;
  imageName: string;
  title: string;
  updatedAt: string;
  useYn: YNValue;
  link: string | null;
}

export interface Locale {
  label: string;
  value: string;
  flag: string;
}

export type Action = 'CREATE' | 'UPDATE';

export interface ListRequestBody {
  [key: string]: any;
}

export interface CheckTerm {
  id: number;
  title: string;
  version: string;
  url: string;
  required: boolean;
  agreed: boolean;
}
