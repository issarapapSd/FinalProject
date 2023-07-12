export enum SelectedPage {
    Home = "home",
    Courses = "courses",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
    VideoDataSci = 'video-data-science'

  }
  
  export interface CourseType {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  
  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }