export interface ApiRequest {
<<<<<<< HEAD
  metadata: {
    tags: Array<{
      sys: Link<Tag>;
    }>;
  };
  sys: Sys;
  fields: {
=======
    metadata: {
      tags: Array<{
        sys: Link<Tag>;
      }>;
    };
    sys: Sys;
    fields: {
      pageTitle: string;
      internalTitle: string;
      slug: string;
      seoMetadata: Entry<SeoMetadataFields>;
      header: Entry<HeaderFields>;
      sections: Array<Entry<SectionFields>>;
      footer: Entry<FooterFields>;
    };
  }
  
  interface SectionFields {
    internalTitle: string;
    items: Array<Entry<ValuePropositionFields>>;
  }
  
  interface ValuePropositionFields {
    internalTitle: string;
    title: string;
    headline: string;
    body: Document;
    icon: Entry<MediaWrapperFields>;
  }
  
  interface MediaWrapperFields {
    internalTitle: string;
    altText: string;
    asset: Entry<AssetFields>;
  }
  
  interface AssetFields {
    title: string;
    description: string;
    file: AssetFile;
  }
  
  interface AssetFile {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  }
  
  export interface FooterFields {
    internalTitle: string;
    copyright: string;
    newlesterCartridge: Entry<NewlesterCartridgeFields>;
  }
  
  interface NewlesterCartridgeFields {
    internalTitle: string;
    items: Array<Entry<PersonFields>>;
  }
  
  interface PersonFields {
    internalName: string;
    name: string;
    email: string;
  }
  
  interface Sys {
    space: EntryLink<Space>;
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: EntryLink<Environment>;
    revision: number;
    contentType: EntryLink<ContentType>;
    locale: string;
  }
  
  interface Link<T> {
    type: "Link";
    linkType: string;
    id: string;
  }
  
  export interface Entry<T> {
    metadata: {
      tags: Array<any>;
    };
    sys: Sys;
    fields: T;
  }
  
  interface EntryLink<T> extends Link<T> {}
  
  interface SeoMetadataFields {
    internalTitle: string;
>>>>>>> 664512b65c13970550148c1c9545a2283ba3b29b
    pageTitle: string;
    internalTitle: string;
    slug: string;
    seoMetadata: Entry<SeoMetadataFields>;
    header: Entry<HeaderFields>;
    sections: Array<Entry<SectionFields>>;
    footer: Entry<FooterFields>;
  };
}

interface SectionFields {
  internalTitle: string;
  items: Array<Entry<ValuePropositionFields>>;
}

interface ValuePropositionFields {
  internalTitle: string;
  title: string;
  headline: string;
  body: Document;
  icon: Entry<MediaWrapperFields>;
}

interface MediaWrapperFields {
  internalTitle: string;
  altText: string;
  asset: Entry<AssetFields>;
}

interface AssetFields {
  title: string;
  description: string;
  file: AssetFile;
}

interface AssetFile {
  url: string;
  details: {
    size: number;
    image: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
}

export interface FooterFields {
  internalTitle: string;
  copyright: string;
  newlesterCartridge: Entry<NewlesterCartridgeFields>;
}

interface NewlesterCartridgeFields {
  internalTitle: string;
  items: Array<Entry<PersonFields>>;
}

interface PersonFields {
  internalName: string;
  name: string;
  email: string;
}

interface Sys {
  space: EntryLink<Space>;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: EntryLink<Environment>;
  revision: number;
  contentType: EntryLink<ContentType>;
  locale: string;
}

interface Link<T> {
  type: "Link";
  linkType: string;
  id: string;
}

interface Entry<T> {
  metadata: {
    tags: Array<any>;
  };
  sys: Sys;
  fields: T;
}

interface EntryLink<T> extends Link<T> {}

interface SeoMetadataFields {
  internalTitle: string;
  pageTitle: string;
  pageDescription: Document;
  ogType: string;
  ogImage: string;
  ogDescription: string;
}

interface Document {
  nodeType: string;
  data: any;
  content: Array<ContentNode>;
}

interface ContentNode {
  nodeType: string;
  data: any;
  content: Array<TextNode | ListNode>;
}

interface TextNode {
  nodeType: "text";
  value: string;
  marks: Array<any>;
  data: any;
}

interface ListNode {
  nodeType: "unordered-list" | "ordered-list" | "list-item";
  data: any;
  content: Array<ContentNode>;
}

export interface HeaderFields {
  internalTitle: string;
  logo: Entry<AssetFields>;
  logoUrl: string;
  navigation: Entry<NavigationFields>;
}

interface NavigationFields {
  internalTitle: string;
  items: Array<Entry<NavigationItemFields>>;
}

interface NavigationItemFields {
  internalTitle: string;
  label: string;
}

interface Space {}
interface Environment {}
interface ContentType {}
interface Tag {}

export type sys = {
  contentType: {
    sys: {
      id: string;
      linkType: string;
      type: string;
    };
  };

  id: string;
  locale: string;
  revision: number;
  // contentType:EntryLink<ContentType>
};

export type ContentNodeRT = {
  data: Record<string, any>;
  content?: ContentNodeRT[];
  marks?: any[];
  value?: string;
  nodeType: string;
};

export type RichText = {
  data: Record<string, any>;
  content: ContentNodeRT[];
};


export type PortfolioElement = {
  sys: sys;
  fields: PortfolioFieldElement;
};
export type PortfolioFieldElement = {
  body: RichText;
  title: string;
  headline: string;
  type: string;
  icon: string; //TODO implementar ImagesAPI
};


export type Person ={
  sys: sys;
  fields: PersonFields;
}

export type Job = {
  sys : sys;
  fields: JobFields;
}

export type JobFields = {
  internal:boolean
  name:string
  description:RichText
  employees:Person[]
  applicants:Person[]
}

export type Review={
  sys:sys
  fields:ReviewFields
}

export type ReviewFields={
  mainQuote:string
  reviewText:string
}
export type PersonReview = {
  sys: sys;
  fields: PersonFieldsReview;
}
export type PersonFieldsReview = {
  image: string;//TODO implementar ImagesAPI
  name: string;
  email: string;
  review:Review
  job:Job
}