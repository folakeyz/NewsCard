import { WebPartContext } from "@microsoft/sp-webpart-base"; 
export interface IGeneralNewsProps {
  description: string;
  Title: string;
  Description: string;
  Link: string;
  BannerImageUrl: string;
  Created: string;
  context:WebPartContext; 
}
