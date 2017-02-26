var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { Draggable } from "./directives/draggable";
import { Droppable } from "./directives/droppable";
var Ng2DragDropModule = (function () {
    function Ng2DragDropModule() {
    }
    return Ng2DragDropModule;
}());
Ng2DragDropModule = __decorate([
    NgModule({
        imports: [],
        declarations: [
            Draggable,
            Droppable
        ],
        exports: [
            Draggable,
            Droppable
        ],
        providers: [],
    })
], Ng2DragDropModule);
export { Ng2DragDropModule };
//# sourceMappingURL=ng2-drag-drop.module.js.map