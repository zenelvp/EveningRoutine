export interface ProjectType {
 id: number;
 title: string;
 slug: string;
 coverImage: string;
 company: string;
 category: string;
 liveview: string;
 timelines: string;
 service: string[];
 keywords: string[];
 sections: {
 heading: string;
 content: string[];
 images?: string[];
 list?: string[];
 }[];
}
