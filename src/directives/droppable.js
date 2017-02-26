var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DropEvent } from "../shared/drop-event.model";
var Droppable = (function () {
    function Droppable(el) {
        this.el = el;
        /**
         *  Event fired when Drag dragged element enters a valid drop target.
         */
        this.onDragEnter = new EventEmitter();
        /**
         * Event fired when an element is being dragged over a valid drop target
         */
        this.onDragOver = new EventEmitter();
        /**
         * Event fired when a dragged element leaves a valid drop target.
         */
        this.onDragLeave = new EventEmitter();
        /**
         * Event fired when an element is dropped on a valid drop target.
         */
        this.onDrop = new EventEmitter();
        /**
         * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
         */
        this.dropScope = 'default';
    }
    Droppable.prototype.dragEnter = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.onDragEnter.emit(e);
    };
    Droppable.prototype.dragOver = function (e) {
        if (this.allowDrop(e)) {
            if (e.target.classList != undefined && e.target.classList != null)
                e.target.classList.add(this.dragOverClass);
            e.preventDefault();
            this.onDragOver.emit(e);
        }
    };
    Droppable.prototype.dragLeave = function (e) {
        if (e.target.classList != undefined && e.target.classList != null)
            e.target.classList.remove(this.dragOverClass);
        e.preventDefault();
        this.onDragLeave.emit(e);
    };
    Droppable.prototype.drop = function (e) {
        if (e.target.classList != undefined && e.target.classList != null)
            e.target.classList.remove(this.dragOverClass);
        e.preventDefault();
        e.stopPropagation();
        var data;
        try {
            data = JSON.parse(e.dataTransfer.getData('application/json'));
        }
        catch (e) {
            data = e;
        }
        this.onDrop.emit(new DropEvent(e, data));
    };
    Droppable.prototype.allowDrop = function (e) {
        var allow = false;
        var types = e.dataTransfer.types;
        if (types && types.length) {
            for (var i = 0; i < types.length; i++) {
                if (types[i] == this.dropScope) {
                    allow = true;
                    break;
                }
            }
        }
        return allow;
    };
    return Droppable;
}());
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Droppable.prototype, "onDragEnter", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Droppable.prototype, "onDragOver", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Droppable.prototype, "onDragLeave", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], Droppable.prototype, "onDrop", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Droppable.prototype, "dragOverClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], Droppable.prototype, "dropScope", void 0);
__decorate([
    HostListener('dragenter', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Droppable.prototype, "dragEnter", null);
__decorate([
    HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Droppable.prototype, "dragOver", null);
__decorate([
    HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Droppable.prototype, "dragLeave", null);
__decorate([
    HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Droppable.prototype, "drop", null);
Droppable = __decorate([
    Directive({
        selector: '[droppable]',
        host: {
            '[draggable]': 'true'
        }
    }),
    __metadata("design:paramtypes", [ElementRef])
], Droppable);
export { Droppable };
//# sourceMappingURL=droppable.js.map