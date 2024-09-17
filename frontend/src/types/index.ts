// ------------------------------------ Structural types (contentful) ----------------------------

export interface ApiRequest {
  metadata?: {
    tags?: Array<{
      sys?: Link<Tag>;
    }>;
  };
  sys?: Sys;
  fields?: {
    pageTitle?: string;
    internalTitle?: string;
    slug?: string;
    seoMetadata?: Entry<SeoMetadataFields>;
    header?: Entry<HeaderFields>;
    sections?: Array<Entry<Cartridge> | Entry<Blurb>>;
    footer?: Entry<FooterFields>;
  };
}

export interface Cartridge {
  internalTitle?: string;
  items?: Array<Entry<ValuePropositionFields | JobFields | NavigationItemFields | PersonFields | ProductServiceTileFields >>;
}

export interface ValuePropositionFields {
  internalTitle?: string;
  title?: string;
  headline?: string;
  body?: RichText;
  icon?: Entry<MediaWrapperFields>;
  type?: string;
  date?: Date;
  url?: string;
  propertiesList?: Array<string>;
}

interface MediaWrapperFields {
  internalTitle?: string;
  altText?: string;
  asset?: Entry<Asset>;
}

interface Asset {
  title?: string;
  description?: string;
  file?: AssetFile;
}

interface AssetFile {
  url?: string;
  details?: {
    size?: number;
    image?: {
      width?: number;
      height?: number;
    };
  };
  fileName?: string;
  contentType?: string;
}

export interface FooterFields {
  internalTitle?: string;
  copyright?: string;
  newlesterCartridge?: Entry<NewlesterCartridgeFields>;
  logo?: Entry<Asset>;
  logoUrl?: string;
  buttonNames?: string[]
  newsletterTexts?: string[]
}

export interface NewlesterCartridgeFields {
  internalTitle?: string;
  items?: Array<Entry<PersonFields>>;
}

export interface PersonFields {
  internalName?: string;
  name?: string;
  email?: string;
  cv?: Entry<Document>;
  job?: Entry<JobFields>;
  image?: Entry<MediaWrapperFields>;
  review?: Entry<ReviewFields>;
  team?: string;
  rss?: string[];
}

interface Sys {
  space?: EntryLink<Space>;
  id?: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
  environment?: EntryLink<Environment>;
  revision?: number;
  contentType?: EntryLink<ContentType>;
  locale?: string;
}

interface Link<T> {
  type?: "Link";
  linkType?: string;
  id?: string;
  T?: T;
}

export interface Entry<T> {
  metadata?: {
    tags?: EntryLink<T>[];
  };
  sys?: Sys;
  fields?: T;
}

//interface EntryLink<T> extends Link<T> { }
export interface EntryLink<T> {
  sys: Link<T>
 }

interface SeoMetadataFields {
  internalTitle?: string;
  pageTitle?: string;
  pageDescription?: Document;
  ogType?: string;
  ogImage?: string;
  ogDescription?: string;
}


export interface HeaderFields {
  internalTitle?: string;
  logo?: Entry<Asset>;
  logoUrl?: string;
  navigation?: Entry<NavigationFields>;
}

interface NavigationFields {
  internalTitle?: string;
  items?: Array<Entry<NavigationItemFields>>;
}

interface NavigationItemFields {
  internalTitle?: string;
  label?: string;
  url?: string
}

export type JobFields = {
  internal?: boolean;
  name?: string;
  salary?: number;
  description: RichText;
  employees?: Entry<Cartridge>; 
  applicants?: Entry<Cartridge>; // Recuerda que para usar un cartridge en concreto usamos una variable auxiliar casteada (ver Mainview: lineas 52 y 54)
  icon?: Entry<MediaWrapperFields>;
};

export interface ProductServiceTileFields {
  internalTitle: string;
  title: string;
  url: string;
  ctaText: string;
  allingment: string[];
  icon: Entry<MediaWrapperFields>;
  interestedInThis: Entry<PersonFields>;
  date: Date;
}

interface Space { }
interface Environment { }
interface ContentType { }
interface Tag { }


//-------------------------- Document related ----------------------------


interface Document {
  nodeType?: string;
  data?: any;
  content?: Array<ContentNode>;
}

interface ContentNode {
  nodeType?: string;
  data?: any;
  content?: Array<TextNode | ListNode>;
}

interface TextNode {
  nodeType?: "text";
  value?: string;
  marks?: Array<any>;
  data?: any;
}

interface ListNode {
  nodeType?: "unordered-list" | "ordered-list" | "list-item";
  data?: any;
  content?: Array<ContentNode>;
}
export type ReviewFields = {
  mainQuote: string;
  reviewText: string;
};

export type Blurb = {
  internalTitle: string;
  title: string;
  textBlurb: RichText;
  list: string[]
}



//-------------------------- Auxiliary types ----------------------------



export type RichText = {
  nodeType: string;
  data: Record<string, any>;
  content?: RichText[];
  value?: string;
  marks?: Array<{ type: string }>;
};


export type Resource = {
  element: Entry<ValuePropositionFields | JobFields | NavigationItemFields | PersonFields | ProductServiceTileFields>;
};



//----------------------- Localization -----------------

export interface Dictionary<T> {
  [Key: string]: T;
}

export type URLtranslation ={
  enUS: string;
  es: string;
}

export interface localeProp {
  locale: string; // O el tipo que necesites
}