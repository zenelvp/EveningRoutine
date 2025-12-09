import { ReactElement } from "react";

export type StepCard = {
 id?: number;
 number?: string;
 title?: string;
 text?: string;
 color?: string;
};

export type StepSection = {
 heading?: string;
 desc?: string;
 buttonText?: string;
 cards?: StepCard[];
};

export type ValueCard = {
 title?: string;
 desc?: string;
 icon?: ReactElement | string;
 iconPath?: string;
};

export type ServiceDetail = {
 id?: number;
 title?: string;
 slug?: string;
 description?: string;
 heroBtn?: string;
 steps?: StepSection[];
 valueProposition?: {
 heading?: string;
 desc?: string;
 buttonText?: string;
 cards?: ValueCard[];
 }[];
 whatYouGet?: {
 title?: string;
 text?: string;
 icon?: string;
 deliverables?: string[];
 }[];
};
