export interface TrackType {
    tracks: Tracks;
    artists: Artists;
  }
  
  interface Artists {
    hits: Hit2[];
  }
  
  interface Hit2 {
    artist: Artist2;
  }
  
  interface Artist2 {
    avatar: string;
    name: string;
    verified: boolean;
    weburl: string;
    adamid: string;
  }
  
  interface Tracks {
    hits: Hit[];
  }
  
  interface Hit {
    track: Track;
  }
  
  interface Track {
    layout: string;
    type: string;
    key: string;
    title: string;
    subtitle: string;
    share: Share;
    images: Images;
    hub: Hub;
    artists: Artist[];
    url: string;
  }
  
  interface Artist {
    id: string;
    adamid: string;
  }
  
  interface Hub {
    type: string;
    image: string;
    actions: Action[];
    options: Option[];
    providers: Provider[];
    explicit: boolean;
    displayname: string;
  }
  
  interface Provider {
    caption: string;
    images: Images2;
    actions: Action3[];
    type: string;
  }
  
  interface Action3 {
    name: string;
    type: string;
    uri: string;
  }
  
  interface Images2 {
    overflow: string;
    default: string;
  }
  
  interface Option {
    caption: string;
    actions: Action2[];
    beacondata: Beacondata;
    image: string;
    type: string;
    listcaption: string;
    overflowimage: string;
    colouroverflowimage: boolean;
    providername: string;
  }
  
  interface Beacondata {
    type: string;
    providername: string;
  }
  
  interface Action2 {
    name: string;
    type: string;
    uri: string;
    id?: string;
  }
  
  interface Action {
    name: string;
    type: string;
    id?: string;
    uri?: string;
  }
  
  interface Images {
    background: string;
    coverart: string;
    coverarthq: string;
    joecolor: string;
  }
  
  interface Share {
    subject: string;
    text: string;
    href: string;
    image: string;
    twitter: string;
    html: string;
    avatar: string;
    snapchat: string;
  }