import { Document } from "mongoose";

export interface IPlayLinks {
  _id?: any;
  spotify: string;
  youtube: string;
  bandcamp: string;
}

export interface IAlbumArt {
  _id?: any;
  source: string;
  url: string;
}

export interface IRating extends Document {
  _id: number;
  artistIds: number[];
  artistNames: string[];
  albumName: string;
  genres: string[];
  releaseYear: number;
  releaseType: string;
  rymUrl: string;
  playLinks: IPlayLinks;
  score: number;
  dateAdded: Date | Number;
  createdAt?: Date | Number;
  updatedAt?: Date | Number;
  albumArt: IAlbumArt;
}

export interface AlbumPage {
  playLinks: IPlayLinks;
  artistUrls?: string[];
  albumArtUrl?: string;
}

export interface ScrapeOptions {
  art: boolean;
  playLinks: boolean;
  artistIds: boolean;
}

export interface ScoreUpdate {
  _id: number;
  score: number;
}

export interface AlbumScrape {
  _id: number;
  playLinks?: IPlayLinks;
  artistIds?: number[];
  albumArt?: IAlbumArt;
  options: ScrapeOptions;
}

export interface RecentsChanges {
  newRatings?: IRating[];
  updatedScores?: { _id: number; score: number }[];
  updatedRatings?: AlbumScrape[];
}
