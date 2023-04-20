import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public selectedLanguage: string = 'es';

  constructor(private firestore: AngularFirestore) { }

  setLanguage(language: string): void {
    this.selectedLanguage = language;
  }

  get textToTranslate(): string {
    const collectionName = this.selectedLanguage === 'es' ? 'PageContentSpanish' : 'PageContentEnglish';
    const documentName = 'textToTranslate';
    const document = this.firestore.collection(collectionName).doc(documentName);
    return document.get().toPromise().then(docSnapshot => docSnapshot.data().text);
  }


}
