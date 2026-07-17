export interface SidebarItem {

  label: string;

  icon: string;

  route: string;

}


export interface SidebarSection {

  heading: string;

  items: SidebarItem[];

}


export interface SidebarModule {

  consoleTitle: string;

  sections: SidebarSection[];

}


export interface SidebarConfig {

  [key: string]: SidebarModule;

}