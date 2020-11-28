import { INews } from "./INews";
export class ClassNews{
    public Title:string;
    public Description:string;
    public Link:string;
    public Created:string;
    public BannerImageUrl:string;
   


    constructor(item: INews){
        this.Title = item.Title;
        this.Description = item.Description;
        this.Link = item.Link;
        this.Created = item.Created;
        this.BannerImageUrl = item.BannerImageUrl;
       
    }
}