import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageContentService {

  constructor() { }

  getValueByKey<T extends {[key: string]: any}, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }


  setTextData(data: object,pageContent:object) {

    for (let key in data){
      pageContent[key as keyof typeof pageContent] = data[key as keyof typeof data];

    }
    return pageContent;
  }
}
