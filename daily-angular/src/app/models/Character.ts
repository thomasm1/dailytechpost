export class Character {
 
    id: number;// (int, optional): The unique ID of the character resource.,
    name: string;// (string, optional): The name of the character.,
    description: string;// (string, optional): A short bio or description of the character.,
    modified: string;// (Date, optional): The date the resource was most recently modified.,
    resourceURI: string;// (string, optional): The canonical URL identifier for this resource.,
    urls: string;// (Array[Url], optional): A set of public web site URLs for the resource.,
    thumbnail: string;// (Image, optional): The representative image for this character.,
    comics: string;// (ComicList, optional): A resource list containing comics which feature this character.,
    stories: string;// (StoryList, optional): A resource list of stories in which this character appears.,
    events: string;// (EventList, optional): A resource list of events in which this character appears.,
    series: string;//(SeriesList, optional): A resource list of series in which this character appears.
    constructor(
        id: number,
        name: string,
        description: string,
        modified: string,
        resourceURI: string,
        urls: string,
        thumbnail: string,
        comics: string,
        stories: string,
        events: string,
        series: string,
    ) {


        this.id = id;
        this.name = name;
        this.description = description;
        this.modified = modified;
        this.resourceURI = resourceURI;
        this.urls = urls;
        this.thumbnail = thumbnail;
        this.comics = comics;
        this.stories = stories;
        this.events = events;
        this.series = series;
    }

}