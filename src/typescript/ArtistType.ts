export interface RootObject {
  data: Datum9[];
}

interface Datum9 {
  id: string;
  type: string;
  href: string;
  attributes: Attributes;
  relationships: Relationships;
  views: Views;
  meta: Meta2;
  avatar: string;
}

interface Meta2 {
  views: Views2;
}

interface Views2 {
  order: string[];
}

interface Views {
  playlists: Playlists;
  'featured-albums': Featuredalbums;
  'top-music-videos': Topmusicvideos;
  'full-albums': Fullalbums;
  'latest-release': Latestrelease;
  'similar-artists': Similarartists;
  'top-songs': Topsongs;
}

interface Topsongs {
  href: string;
  next: string;
  attributes: Attributes2;
  data: Datum8[];
}

interface Datum8 {
  id: string;
  type: string;
  href: string;
  attributes: Attributes9;
  meta?: Meta;
}

interface Meta {
  formerIds: string[];
}

interface Attributes9 {
  hasTimeSyncedLyrics: boolean;
  albumName: string;
  genreNames: string[];
  trackNumber: number;
  releaseDate: string;
  durationInMillis: number;
  isVocalAttenuationAllowed: boolean;
  isMasteredForItunes: boolean;
  isrc: string;
  artwork: OriginalFlowcaseBrick;
  composerName: string;
  audioLocale: string;
  playParams: PlayParams2;
  url: string;
  discNumber: number;
  isAppleDigitalMaster: boolean;
  hasLyrics: boolean;
  audioTraits: string[];
  editorialArtwork: EditorialArtwork8;
  name: string;
  previews: Preview2[];
  artistName: string;
}

interface Preview2 {
  url: string;
}

interface EditorialArtwork8 {
  subscriptionHero?: OriginalFlowcaseBrick;
}

interface Similarartists {
  href: string;
  next: string;
  attributes: Attributes2;
  data: Datum7[];
}

interface Datum7 {
  id: string;
  type: string;
  href: string;
  attributes: Attributes8;
  relationships: Relationships2;
}

interface Relationships2 {
  albums: Albums2;
}

interface Albums2 {
  href: string;
  next?: string;
  data: Datum[];
}

interface Attributes8 {
  bornOrFormed: string;
  genreNames: string[];
  editorialArtwork: EditorialArtwork7;
  origin: string;
  name: string;
  artwork: OriginalFlowcaseBrick;
  url: string;
  artistBio: string;
}

interface EditorialArtwork7 {
  originalFlowcaseBrick?: OriginalFlowcaseBrick;
  centeredFullscreenBackground?: OriginalFlowcaseBrick;
  storeFlowcase?: OriginalFlowcaseBrick;
  subscriptionHero?: OriginalFlowcaseBrick;
  bannerUber?: OriginalFlowcaseBrick;
  vipSquare?: OriginalFlowcaseBrick;
}

interface Latestrelease {
  href: string;
  attributes: Attributes2;
  data: Datum6[];
}

interface Datum6 {
  id: string;
  type: string;
  href: string;
  attributes: Attributes7;
}

interface Attributes7 {
  copyright: string;
  genreNames: string[];
  releaseDate: string;
  isMasteredForItunes: boolean;
  upc: string;
  artwork: OriginalFlowcaseBrick;
  url: string;
  playParams: PlayParams2;
  recordLabel: string;
  trackCount: number;
  isCompilation: boolean;
  isPrerelease: boolean;
  audioTraits: string[];
  editorialArtwork: EditorialArtwork6;
  isSingle: boolean;
  name: string;
  artistName: string;
  editorialNotes: EditorialNotes3;
  isComplete: boolean;
}

interface EditorialNotes3 {
  standard: string;
  short: string;
  tagline: string;
}

interface EditorialArtwork6 {
  staticDetailTall: StaticDetailTall;
  subscriptionHero: OriginalFlowcaseBrick;
  staticDetailSquare: OriginalFlowcaseBrick;
  superHeroTall: OriginalFlowcaseBrick;
  storeFlowcase: OriginalFlowcaseBrick;
}

interface Fullalbums {
  href: string;
  next: string;
  attributes: Attributes2;
  data: Datum5[];
}

interface Datum5 {
  id: string;
  type: string;
  href: string;
  attributes: Attributes6;
}

interface Attributes6 {
  copyright: string;
  genreNames: string[];
  releaseDate: string;
  isMasteredForItunes: boolean;
  upc: string;
  artwork: OriginalFlowcaseBrick;
  url: string;
  playParams: PlayParams2;
  recordLabel: string;
  trackCount: number;
  isCompilation: boolean;
  isPrerelease: boolean;
  audioTraits: string[];
  editorialArtwork: EditorialArtwork5;
  isSingle: boolean;
  name: string;
  artistName: string;
  editorialNotes?: EditorialNotes2;
  isComplete: boolean;
}

interface EditorialArtwork5 {
  staticDetailTall?: StaticDetailTall;
  subscriptionHero?: OriginalFlowcaseBrick;
  staticDetailSquare?: OriginalFlowcaseBrick;
  superHeroTall?: OriginalFlowcaseBrick;
  storeFlowcase?: OriginalFlowcaseBrick;
  originalFlowcaseBrick?: OriginalFlowcaseBrick;
  bannerUber?: OriginalFlowcaseBrick;
}

interface Topmusicvideos {
  href: string;
  next: string;
  attributes: Attributes2;
  data: Datum4[];
}

interface Datum4 {
  id: string;
  type: string;
  href: string;
  attributes: Attributes5;
}

interface Attributes5 {
  albumName: string;
  genreNames: string[];
  trackNumber: number;
  releaseDate: string;
  durationInMillis: number;
  isrc: string;
  artwork: OriginalFlowcaseBrick;
  playParams: PlayParams2;
  url: string;
  has4K: boolean;
  editorialArtwork: EditorialArtwork4;
  hasHDR: boolean;
  name: string;
  previews: Preview[];
  artistName: string;
}

interface Preview {
  url: string;
  hlsUrl: string;
  artwork: OriginalFlowcaseBrick;
}

interface EditorialArtwork4 {
}

interface Featuredalbums {
  href: string;
  attributes: Attributes2;
  data: Datum3[];
}

interface Datum3 {
  id: string;
  type: string;
  href: string;
  attributes: Attributes4;
}

interface Attributes4 {
  copyright: string;
  genreNames: string[];
  releaseDate: string;
  isMasteredForItunes: boolean;
  upc: string;
  artwork: OriginalFlowcaseBrick;
  url: string;
  playParams: PlayParams2;
  recordLabel: string;
  trackCount: number;
  isCompilation: boolean;
  isPrerelease: boolean;
  audioTraits: string[];
  editorialArtwork: EditorialArtwork3;
  isSingle: boolean;
  name: string;
  artistName: string;
  editorialNotes?: EditorialNotes2;
  isComplete: boolean;
}

interface EditorialNotes2 {
  standard: string;
  short: string;
  tagline?: string;
}

interface EditorialArtwork3 {
  staticDetailTall?: StaticDetailTall;
  subscriptionHero: OriginalFlowcaseBrick;
  staticDetailSquare?: OriginalFlowcaseBrick;
  superHeroTall?: OriginalFlowcaseBrick;
  storeFlowcase: OriginalFlowcaseBrick;
  originalFlowcaseBrick?: OriginalFlowcaseBrick;
  bannerUber?: OriginalFlowcaseBrick;
}

interface StaticDetailTall {
  width: number;
  url: string;
  textGradient: string[];
  height: number;
  textColor3: string;
  textColor2: string;
  textColor4: string;
  textColor1: string;
  bgColor: string;
  hasP3: boolean;
}

interface PlayParams2 {
  id: string;
  kind: string;
}

interface Playlists {
  href: string;
  next: string;
  attributes: Attributes2;
  data: Datum2[];
}

interface Datum2 {
  id: string;
  type: string;
  href: string;
  attributes: Attributes3;
}

interface Attributes3 {
  curatorName: string;
  lastModifiedDate: string;
  audioTraits: any[];
  editorialArtwork: EditorialArtwork2;
  name: string;
  isChart: boolean;
  playlistType: string;
  description: Description;
  editorialNotes: EditorialNotes;
  artwork: OriginalFlowcaseBrick;
  url: string;
  playParams: PlayParams;
}

interface PlayParams {
  id: string;
  kind: string;
  versionHash: string;
}

interface EditorialNotes {
  name?: string;
  standard: string;
  short: string;
}

interface Description {
  standard: string;
  short: string;
}

interface EditorialArtwork2 {
  superHeroTall?: OriginalFlowcaseBrick;
  subscriptionHero: OriginalFlowcaseBrick;
  subscriptionCover: OriginalFlowcaseBrick;
  staticDetailSquare?: OriginalFlowcaseBrick;
  staticDetailTall?: OriginalFlowcaseBrick;
  superHeroWide?: OriginalFlowcaseBrick;
}

interface Attributes2 {
  title: string;
}

interface Relationships {
  albums: Albums;
}

interface Albums {
  href: string;
  next: string;
  data: Datum[];
}

interface Datum {
  id: string;
  type: string;
  href: string;
}

interface Attributes {
  bornOrFormed: string;
  genreNames: string[];
  editorialArtwork: EditorialArtwork;
  origin: string;
  name: string;
  artwork: OriginalFlowcaseBrick;
  url: string;
  artistBio: string;
}

interface EditorialArtwork {
  originalFlowcaseBrick: OriginalFlowcaseBrick;
  centeredFullscreenBackground: OriginalFlowcaseBrick;
  storeFlowcase: OriginalFlowcaseBrick;
  subscriptionHero: OriginalFlowcaseBrick;
  bannerUber: OriginalFlowcaseBrick;
  vipSquare: OriginalFlowcaseBrick;
}

interface OriginalFlowcaseBrick {
  width: number;
  url: string;
  height: number;
  textColor3: string;
  textColor2: string;
  textColor4: string;
  textColor1: string;
  bgColor: string;
  hasP3: boolean;
}