import {Injectable} from "@angular/core"
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ajax} from "rxjs/ajax"
import {delay, pluck} from "rxjs/operators"
import { ShowbookComponent } from '../components/showbook/showbook.component';
@Injectable()

export class BookService{

    private URIS = {
        fiction: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',
        nofiction: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',
        history: 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',
        lists: 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',
        foryou:'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?title&api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6'
    };
    
    constructor(private modalBook:ModalController){}

    async openToBook(data:any) : Promise<any>{
        const bookmodal = await this.modalBook.create({
            component: ShowbookComponent,
            componentProps: {data}
        })
        bookmodal.present()
    }
    getByList():Observable<any>{
        return ajax.get(this.URIS.lists).pipe(pluck("response"),delay(1000))
    }  
 
    
    getAllLists(id:any):Observable<any>{
        
        return ajax.get(`https://api.nytimes.com/svc/books/v3/lists/current/${id}.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6`).pipe(pluck("response"),delay(1000))
    }  


    getFictionBooks():Observable<any>{
        return ajax.get(this.URIS.fiction).pipe(pluck("response"),delay(2000))
    }
 
    getNoFictionBooks():Observable<any>{
        return ajax.get(this.URIS.nofiction).pipe(pluck("response"),delay(2000))
    }
    
    forYou():Observable<any>{
        return ajax.get(this.URIS.foryou).pipe(pluck("response"),delay(2000))
    }
}