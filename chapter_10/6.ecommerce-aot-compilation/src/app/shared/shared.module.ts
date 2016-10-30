import {NgModule} from "@angular/core";

import {IfDirective} from "./if.directive";
import {ZipValidator} from "./zip.validator";

@NgModule({
    declarations: [IfDirective, ZipValidator],
    exports: [IfDirective, ZipValidator]
})
export class SharedModule {}