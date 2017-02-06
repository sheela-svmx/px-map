'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}(function(){'use strict';var PxMapInfoPopup=function(){function PxMapInfoPopup(){_classCallCheck(this,PxMapInfoPopup)}_createClass(PxMapInfoPopup,[{key:'attached',value:function attached(){window.requestAnimationFrame(this._drawPopup.bind(this));this.__boundPopupUpdate=this._updatePopupContent.bind(this);Polymer.dom(this.root).observeNodes(this.__boundPopupUpdate)}},{key:'detached',value:function detached(){Polymer.dom(this.root).unobserveNodes(this.__boundPopupUpdate)}},{key:'_drawPopup',value:function _drawPopup(){if(!this.popupInstance){var popup=this._createPopup();this._setPopupInstance(popup)}if(this.markerInstance){this._attachPopupToMarker()}}},{key:'_attachPopupToMarker',value:function _attachPopupToMarker(){if(this.popupInstance&&this.markerInstance&&this.markerInstance.getPopup&&this.markerInstance.getPopup()!==this.popupInstance){this.markerInstance.bindPopup(this.popupInstance);this._captureMarkerPopupEvents(this.markerInstance)}}},{key:'_createPopup',value:function _createPopup(){var content=Polymer.dom(this.root).innerHTML.trim();var popup=L.popup().setContent(content);this._capturePopupEvents(popup);return popup}},{key:'_updatePopupContent',value:function _updatePopupContent(){var _this=this;if(this.popupInstance){var updateFn=function updateFn(){var newContent=Polymer.dom(_this.root).innerHTML.trim();var existingContent=_this.popupInstance.getContent();if(newContent!==existingContent){_this.popupInstance.setContent(newContent)}};this.debounce('update-popup-content',updateFn,1)}}},{key:'_capturePopupEvents',value:function _capturePopupEvents(popup){popup.on('popupopen',function(){debugger},this)}},{key:'_captureMarkerPopupEvents',value:function _captureMarkerPopupEvents(marker){var _this2=this;marker.on('popupopen',function(evt){_this2._setActive(true);_this2.fire('px-map-popup-open',{popup:_this2.popupInstance,marker:_this2.markerInstance})},this);marker.on('popupclose',function(evt){_this2._setActive(false);_this2.fire('px-map-popup-close',{popup:_this2.popupInstance,marker:_this2.markerInstance})},this)}},{key:'is',get:function get(){return'px-map-info-popup'}},{key:'properties',get:function get(){return{title:{type:String,observer:'_updatePopupContent'},description:{type:String,observer:'_updatePopupContent'},active:{type:Boolean,value:false,readOnly:true},popupInstance:{type:Object,notify:true,readOnly:true},markerInstance:{type:Object,notify:true,observer:'_drawPopup'}}}}]);return PxMapInfoPopup}();Polymer(PxMapInfoPopup)})();
//# sourceMappingURL=px-map-info-popup.js.map
