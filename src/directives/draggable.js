var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
var Draggable = (function () {
    function Draggable() {
        /**
         * Currently not used
         */
        this.dragEffect = 'move';
        /**
         * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
         */
        this.dragScope = 'default';
        /**
         * Event fired when Drag is started
         */
        this.onDragStart = new EventEmitter();
        /**
         * Event fired while the element is being dragged
         */
        this.onDrag = new EventEmitter();
        /**
         * Event fired when dragged ends
         */
        this.onDragEnd = new EventEmitter();
    }
    Draggable.prototype.dragStart = function (e) {
        if (this.allowDrag()) {
            if (e.target.classList != undefined && e.target.classList != null)
                e.target.classList.add(this.dragOverClass);
            e.dataTransfer.setData('application/json', JSON.stringify(this.dragData));
            e.dataTransfer.setData(this.dragScope, this.dragScope);
            e.stopPropagation();
            this.onDragStart.emit(e);
        }
        else {
            e.preventDefault();
        }
    };
    Draggable.prototype.drag = function (e) {
        this.onDrag.emit(e);
    };
    Draggable.prototype.dragEnd = function (e) {
        if (e.target.classList != undefined && e.target.classList != null)
            e.target.classList.remove(this.dragOverClass);
        this.onDragEnd.emit(e);
        e.stopPropagation();
        e.preventDefault();
    };
    Draggable.prototype.mouseover = function (e) {
        this.mouseOverElement = e.target;
    };
    Draggable.prototype.allowDrag = function () {
        if (this.dragHandle)
            return this.mouseOverElement.matches(this.dragHandle);
        else
            return true;
    };
    return Draggable;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], Draggable.prototype, "dragData", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Draggable.prototype, "dragHandle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], Draggable.prototype, "dragEffect", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Draggable.prototype, "dragScope", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Draggable.prototype, "dragOverClass", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Draggable.prototype, "onDragStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Draggable.prototype, "onDrag", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Draggable.prototype, "onDragEnd", void 0);
__decorate([
    HostListener('dragstart', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Draggable.prototype, "dragStart", null);
__decorate([
    HostListener('drag', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Draggable.prototype, "drag", null);
__decorate([
    HostListener('dragend', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Draggable.prototype, "dragEnd", null);
__decorate([
    HostListener('mouseover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Draggable.prototype, "mouseover", null);
Draggable = __decorate([
    Directive({
        selector: '[draggable]',
        host: {
            '[draggable]': 'true'
        }
    })
], Draggable);
export { Draggable };
//# sourceMappingURL=draggable.js.map