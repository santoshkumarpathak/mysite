import {item} from '../model/item';

export interface photogallery{
    title: string;
    link: string;
    description: string;
    modified: Date;
    generator: string;
    items: item[];
}