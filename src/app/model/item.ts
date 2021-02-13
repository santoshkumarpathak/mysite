import {MediaUrl} from '../model/mediaurl';

export interface item{
    title: string;
    link: string;
    media: MediaUrl;
    date_taken: Date;
    description: string;
    published: Date;
    author: string;
    author_id: string;
    tags: string;
}