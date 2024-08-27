export interface IJobFields {
    internalTitle: string;
    name: string;
    description: string;
    internal: boolean;
    employeeList: Entry<any>;
    applicants: Entry<any>;
    salary: number;
}

export interface IPersonFields {
    internalName: string;
    name: string;
    email: string;
    cv: Entry<any>;
    job: Entry<any>;
    image: Entry<any>;
    review: Entry<any>;
    team: string;
    rss: any[];
}

export interface IValuePropositionFields {
    internalTitle: string;
    title: string;
    headline: string;
    body: Document;
    icon: Entry<any>;
    type: string;
    date: Date;
    url: string;
    propertiesList: any[];
}

export interface IBlurbFields {
    internalTitle: string;
    title: string;
    textBlurb: Document;
    list: any[];
}

// export interface IProduct/ServiceTileFields {
//     internalTitle: string;
//     title: string;
//     url: string;
//     ctaText: string;
//     allingment: any[];
//     image: Entry<any>;
//     interestedInThis: Entry<any>;
//     date: Date;
// }

export interface ICartridgeFields {
    internalTitle: string;
    items: any[];
}

export interface IFooterFields {
    internalTitle: string;
    copyright: string;
    newlesterCartridge: Entry<any>;
}

export interface ITestingModuleFields {
    simpleText: string;
    shortTextList: any[];
    longText: string;
    richText: Document;
    numberInteger: any;
    numberDecimal: number;
    dateTime: Date;
    location: any;
    mediaOneFile: Entry<any>;
    mediaManyFiles: any[];
    boolean: boolean;
    jsonObject: any;
    referenceOne: Entry<any>;
    referenceMany: any[];
}

export interface ISEOmetadataFields {
    internalTitle: string;
    pageTitle: string;
    pageDescription: Document;
    canonicalUrl: string;
    viewport: string;
    ogTitle: string;
    ogType: string;
    ogUrl: string;
    ogImage: string;
    ogDescription: string;
}

export interface IWebPageViewFields {
    pageTitle: string;
    internalTitle: string;
    slug: string;
    seoMetadata: Entry<any>;
    header: Entry<any>;
    sections: any[];
    footer: Entry<any>;
}

export interface IHeaderFields {
    internalTitle: string;
    logo: Entry<any>;
    logoUrl: string;
    navigation: Entry<any>;
}

export interface IReviewFields {
    internalTitle: string;
    mainQuote: string;
    reviewText: string;
}

export interface IMediaWrapperFields {
    internalTitle: string;
    altText: string;
    description: string;
    asset: Entry<any>;
}

export interface INavigationItemFields {
    internalTitle: string;
    label: string;
    url: string;
}