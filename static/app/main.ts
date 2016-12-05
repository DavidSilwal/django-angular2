import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";


try{
//    enableProdMode();
    bootstrap(AppComponent);
}catch(e){
    console.log(e)
}
