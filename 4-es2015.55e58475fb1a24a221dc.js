(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/1cH":function(t,e,i){"use strict";i.d(e,"a",(function(){return q})),i.d(e,"b",(function(){return U})),i.d(e,"c",(function(){return N}));var o=i("u47x"),n=i("8LU1"),a=i("fXoL"),s=i("FKr1"),c=i("quSY"),r=i("XNiG"),l=i("NXyV"),h=i("VRyK"),m=i("LRne"),d=i("xgIS"),u=i("ofXK"),b=i("rDax"),p=i("vxfF"),k=i("FtGj"),f=i("nLfN"),g=i("+rOU"),_=i("3Pt+"),x=i("kmnG"),v=i("IzEk"),y=i("eIep"),w=i("pLZG"),O=i("lJxs"),A=i("vkgz"),C=i("D0XW"),R=i("7o/Q"),S=i("WMd4");class z{constructor(t,e){this.delay=t,this.scheduler=e}call(t,e){return e.subscribe(new E(t,this.delay,this.scheduler))}}class E extends R.a{constructor(t,e,i){super(t),this.delay=e,this.scheduler=i,this.queue=[],this.active=!1,this.errored=!1}static dispatch(t){const e=t.source,i=e.queue,o=t.scheduler,n=t.destination;for(;i.length>0&&i[0].time-o.now()<=0;)i.shift().notification.observe(n);if(i.length>0){const e=Math.max(0,i[0].time-o.now());this.schedule(t,e)}else this.unsubscribe(),e.active=!1}_schedule(t){this.active=!0,this.destination.add(t.schedule(E.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))}scheduleNotification(t){if(!0===this.errored)return;const e=this.scheduler,i=new F(e.now()+this.delay,t);this.queue.push(i),!1===this.active&&this._schedule(e)}_next(t){this.scheduleNotification(S.a.createNext(t))}_error(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()}_complete(){this.scheduleNotification(S.a.createComplete()),this.unsubscribe()}}class F{constructor(t,e){this.time=t,this.notification=e}}var P=i("cH1L");const D=["panel"];function L(t,e){if(1&t&&(a.Ub(0,"div",0,1),a.kc(2),a.Tb()),2&t){const t=a.gc();a.mc("id",t.id)("ngClass",t._classList)}}const I=["*"];let T=0;class j{constructor(t,e){this.source=t,this.option=e}}class M{}const V=Object(s.r)(M),X=new a.r("mat-autocomplete-default-options",{providedIn:"root",factory:function(){return{autoActiveFirstOption:!1}}});let q=(()=>{class t extends V{constructor(t,e,i){super(),this._changeDetectorRef=t,this._elementRef=e,this._activeOptionChanges=c.a.EMPTY,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this.optionSelected=new a.o,this.opened=new a.o,this.closed=new a.o,this.optionActivated=new a.o,this._classList={},this.id=`mat-autocomplete-${T++}`,this._autoActiveFirstOption=!!i.autoActiveFirstOption}get isOpen(){return this._isOpen&&this.showPanel}get autoActiveFirstOption(){return this._autoActiveFirstOption}set autoActiveFirstOption(t){this._autoActiveFirstOption=Object(n.c)(t)}set classList(t){this._classList=t&&t.length?t.split(" ").reduce((t,e)=>(t[e.trim()]=!0,t),{}):{},this._setVisibilityClasses(this._classList),this._elementRef.nativeElement.className=""}ngAfterContentInit(){this._keyManager=new o.b(this.options).withWrap(),this._activeOptionChanges=this._keyManager.change.subscribe(t=>{this.optionActivated.emit({source:this,option:this.options.toArray()[t]||null})}),this._setVisibility()}ngOnDestroy(){this._activeOptionChanges.unsubscribe()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}_emitSelectEvent(t){const e=new j(this,t);this.optionSelected.emit(e)}_setVisibilityClasses(t){t["mat-autocomplete-visible"]=this.showPanel,t["mat-autocomplete-hidden"]=!this.showPanel}}return t.\u0275fac=function(e){return new(e||t)(a.Ob(a.h),a.Ob(a.l),a.Ob(X))},t.\u0275cmp=a.Ib({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(t,e,i){var o;1&t&&(a.Hb(i,s.i,!0),a.Hb(i,s.h,!0)),2&t&&(a.sc(o=a.dc())&&(e.options=o),a.sc(o=a.dc())&&(e.optionGroups=o))},viewQuery:function(t,e){var i;1&t&&(a.yc(a.M,!0),a.Fc(D,!0)),2&t&&(a.sc(i=a.dc())&&(e.template=i.first),a.sc(i=a.dc())&&(e.panel=i.first))},hostAttrs:[1,"mat-autocomplete"],inputs:{disableRipple:"disableRipple",displayWith:"displayWith",autoActiveFirstOption:"autoActiveFirstOption",classList:["class","classList"],panelWidth:"panelWidth"},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[a.Bb([{provide:s.e,useExisting:t}]),a.zb],ngContentSelectors:I,decls:1,vars:0,consts:[["role","listbox",1,"mat-autocomplete-panel",3,"id","ngClass"],["panel",""]],template:function(t,e){1&t&&(a.lc(),a.Ac(0,L,3,2,"ng-template"))},directives:[u.k],styles:[".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n"],encapsulation:2,changeDetection:0}),t})();const W=new a.r("mat-autocomplete-scroll-strategy"),B={provide:W,deps:[b.c],useFactory:function(t){return()=>t.scrollStrategies.reposition()}},H={provide:_.l,useExisting:Object(a.U)(()=>N),multi:!0};let N=(()=>{class t{constructor(t,e,i,o,n,a,s,m,d,u){this._element=t,this._overlay=e,this._viewContainerRef=i,this._zone=o,this._changeDetectorRef=n,this._dir=s,this._formField=m,this._document=d,this._viewportRuler=u,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=c.a.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new r.a,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=Object(l.a)(()=>this.autocomplete&&this.autocomplete.options?Object(h.a)(...this.autocomplete.options.map(t=>t.onSelectionChange)):this._zone.onStable.asObservable().pipe(Object(v.a)(1),Object(y.a)(()=>this.optionSelections))),this._scrollStrategy=a}get autocompleteDisabled(){return this._autocompleteDisabled}set autocompleteDisabled(t){this._autocompleteDisabled=Object(n.c)(t)}ngAfterViewInit(){const t=this._getWindow();void 0!==t&&this._zone.runOutsideAngular(()=>t.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){const t=this._getWindow();void 0!==t&&t.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._attachOverlay(),this._floatLabel()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Object(h.a)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Object(w.a)(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Object(w.a)(()=>this._overlayAttached)):Object(m.a)()).pipe(Object(O.a)(t=>t instanceof s.k?t:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return Object(h.a)(Object(d.a)(this._document,"click"),Object(d.a)(this._document,"touchend")).pipe(Object(w.a)(t=>{const e=this._isInsideShadowRoot&&t.composedPath?t.composedPath()[0]:t.target,i=this._formField?this._formField._elementRef.nativeElement:null;return this._overlayAttached&&e!==this._element.nativeElement&&(!i||!i.contains(e))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(e)}))}writeValue(t){Promise.resolve(null).then(()=>this._setTriggerValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){const e=t.keyCode;if(e===k.e&&t.preventDefault(),this.activeOption&&e===k.d&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){const i=this.autocomplete._keyManager.activeItem,o=e===k.l||e===k.b;this.panelOpen||e===k.k?this.autocomplete._keyManager.onKeydown(t):o&&this._canOpen()&&this.openPanel(),(o||this.autocomplete._keyManager.activeItem!==i)&&this._scrollToOption()}}_handleInput(t){let e=t.target,i=e.value;"number"===e.type&&(i=""==i?null:parseFloat(i)),this._previousValue!==i&&(this._previousValue=i,this._onChange(i),this._canOpen()&&this._document.activeElement===t.target&&this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_floatLabel(t=!1){this._formField&&"auto"===this._formField.floatLabel&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField.floatLabel="auto",this._manuallyFloatingLabel=!1)}_scrollToOption(){const t=this.autocomplete._keyManager.activeItemIndex||0,e=Object(s.o)(t,this.autocomplete.options,this.autocomplete.optionGroups);if(0===t&&1===e)this.autocomplete._setScrollTop(0);else{const i=Object(s.p)(t+e,48,this.autocomplete._getScrollTop(),256);this.autocomplete._setScrollTop(i)}}_subscribeToClosingActions(){const t=this._zone.onStable.asObservable().pipe(Object(v.a)(1)),e=this.autocomplete.options.changes.pipe(Object(A.a)(()=>this._positionStrategy.reapplyLastPosition()),function(t,e=C.a){var i;const o=(i=t)instanceof Date&&!isNaN(+i)?+t-e.now():Math.abs(t);return t=>t.lift(new z(o,e))}(0));return Object(h.a)(t,e).pipe(Object(y.a)(()=>{const t=this.panelOpen;return this._resetActiveItem(),this.autocomplete._setVisibility(),this.panelOpen&&(this._overlayRef.updatePosition(),t!==this.panelOpen&&this.autocomplete.opened.emit()),this.panelClosingActions}),Object(v.a)(1)).subscribe(t=>this._setValueAndClose(t))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_setTriggerValue(t){const e=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(t):t,i=null!=e?e:"";this._formField?this._formField._control.value=i:this._element.nativeElement.value=i,this._previousValue=i}_setValueAndClose(t){t&&t.source&&(this._clearPreviousSelectedOption(t.source),this._setTriggerValue(t.source.value),this._onChange(t.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(t.source)),this.closePanel()}_clearPreviousSelectedOption(t){this.autocomplete.options.forEach(e=>{e!=t&&e.selected&&e.deselect()})}_attachOverlay(){if(!this.autocomplete)throw Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");null==this._isInsideShadowRoot&&(this._isInsideShadowRoot=!!Object(f.c)(this._element.nativeElement));let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new g.h(this.autocomplete.template,this._viewContainerRef),t=this._overlay.create(this._getOverlayConfig()),this._overlayRef=t,t.keydownEvents().subscribe(t=>{(t.keyCode===k.e||t.keyCode===k.l&&t.altKey)&&(this._resetActiveItem(),this._closeKeyEventStream.next(),t.stopPropagation(),t.preventDefault())}),this._viewportRuler&&(this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}))),t&&!t.hasAttached()&&(t.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const e=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&e!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){return new b.d({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir})}_getOverlayPosition(){const t=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(t),this._positionStrategy=t,t}_setStrategyPositions(t){const e=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-autocomplete-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-autocomplete-panel-above"}];let o;o="above"===this.position?i:"below"===this.position?e:[...e,...i],t.withPositions(o)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption?0:-1)}_canOpen(){const t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this._autocompleteDisabled}_getWindow(){var t;return(null===(t=this._document)||void 0===t?void 0:t.defaultView)||window}}return t.\u0275fac=function(e){return new(e||t)(a.Ob(a.l),a.Ob(b.c),a.Ob(a.P),a.Ob(a.A),a.Ob(a.h),a.Ob(W),a.Ob(P.b,8),a.Ob(x.a,9),a.Ob(u.d,8),a.Ob(p.d))},t.\u0275dir=a.Jb({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-autocomplete-trigger"],hostVars:7,hostBindings:function(t,e){1&t&&a.cc("focusin",(function(){return e._handleFocus()}))("blur",(function(){return e._onTouched()}))("input",(function(t){return e._handleInput(t)}))("keydown",(function(t){return e._handleKeydown(t)})),2&t&&a.Db("autocomplete",e.autocompleteAttribute)("role",e.autocompleteDisabled?null:"combobox")("aria-autocomplete",e.autocompleteDisabled?null:"list")("aria-activedescendant",e.panelOpen&&e.activeOption?e.activeOption.id:null)("aria-expanded",e.autocompleteDisabled?null:e.panelOpen.toString())("aria-owns",e.autocompleteDisabled||!e.panelOpen||null==e.autocomplete?null:e.autocomplete.id)("aria-haspopup",!e.autocompleteDisabled)},inputs:{position:["matAutocompletePosition","position"],autocompleteAttribute:["autocomplete","autocompleteAttribute"],autocompleteDisabled:["matAutocompleteDisabled","autocompleteDisabled"],autocomplete:["matAutocomplete","autocomplete"],connectedTo:["matAutocompleteConnectedTo","connectedTo"]},exportAs:["matAutocompleteTrigger"],features:[a.Bb([H]),a.Ab]}),t})(),U=(()=>{class t{}return t.\u0275mod=a.Mb({type:t}),t.\u0275inj=a.Lb({factory:function(e){return new(e||t)},providers:[B],imports:[[s.j,b.f,s.g,u.c],p.a,s.j,s.g]}),t})()},bSwM:function(t,e,i){"use strict";i.d(e,"a",(function(){return x})),i.d(e,"b",(function(){return y}));var o=i("8LU1"),n=i("fXoL"),a=i("3Pt+"),s=i("FKr1"),c=i("R1ws"),r=i("GU7r"),l=i("u47x");const h=["input"],m=function(){return{enterDuration:150}},d=["*"],u=new n.r("mat-checkbox-default-options",{providedIn:"root",factory:function(){return{color:"accent",clickAction:"check-indeterminate"}}}),b=new n.r("mat-checkbox-click-action");let p=0;const k={provide:a.l,useExisting:Object(n.U)(()=>x),multi:!0};class f{}class g{constructor(t){this._elementRef=t}}const _=Object(s.v)(Object(s.q)(Object(s.r)(Object(s.s)(g))));let x=(()=>{class t extends _{constructor(t,e,i,o,a,s,c,r){super(t),this._changeDetectorRef=e,this._focusMonitor=i,this._ngZone=o,this._clickAction=s,this._animationMode=c,this._options=r,this.ariaLabel="",this.ariaLabelledby=null,this._uniqueId=`mat-checkbox-${++p}`,this.id=this._uniqueId,this.labelPosition="after",this.name=null,this.change=new n.o,this.indeterminateChange=new n.o,this._onTouched=()=>{},this._currentAnimationClass="",this._currentCheckState=0,this._controlValueAccessorChangeFn=()=>{},this._checked=!1,this._disabled=!1,this._indeterminate=!1,this._options=this._options||{},this._options.color&&(this.color=this._options.color),this.tabIndex=parseInt(a)||0,this._focusMonitor.monitor(t,!0).subscribe(t=>{t||Promise.resolve().then(()=>{this._onTouched(),e.markForCheck()})}),this._clickAction=this._clickAction||this._options.clickAction}get inputId(){return`${this.id||this._uniqueId}-input`}get required(){return this._required}set required(t){this._required=Object(o.c)(t)}ngAfterViewInit(){this._syncIndeterminate(this._indeterminate)}ngAfterViewChecked(){}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}get checked(){return this._checked}set checked(t){t!=this.checked&&(this._checked=t,this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(t){const e=Object(o.c)(t);e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}get indeterminate(){return this._indeterminate}set indeterminate(t){const e=t!=this._indeterminate;this._indeterminate=Object(o.c)(t),e&&(this._transitionCheckState(this._indeterminate?3:this.checked?1:2),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(t){this.checked=!!t}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_getAriaChecked(){return this.checked?"true":this.indeterminate?"mixed":"false"}_transitionCheckState(t){let e=this._currentCheckState,i=this._elementRef.nativeElement;if(e!==t&&(this._currentAnimationClass.length>0&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(e,t),this._currentCheckState=t,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);const t=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(t)},1e3)})}}_emitChangeEvent(){const t=new f;t.source=this,t.checked=this.checked,this._controlValueAccessorChangeFn(this.checked),this.change.emit(t)}toggle(){this.checked=!this.checked}_onInputClick(t){t.stopPropagation(),this.disabled||"noop"===this._clickAction?this.disabled||"noop"!==this._clickAction||(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==this._clickAction&&Promise.resolve().then(()=>{this._indeterminate=!1,this.indeterminateChange.emit(this._indeterminate)}),this.toggle(),this._transitionCheckState(this._checked?1:2),this._emitChangeEvent())}focus(t="keyboard",e){this._focusMonitor.focusVia(this._inputElement,t,e)}_onInteractionEvent(t){t.stopPropagation()}_getAnimationClassForCheckStateTransition(t,e){if("NoopAnimations"===this._animationMode)return"";let i="";switch(t){case 0:if(1===e)i="unchecked-checked";else{if(3!=e)return"";i="unchecked-indeterminate"}break;case 2:i=1===e?"unchecked-checked":"unchecked-indeterminate";break;case 1:i=2===e?"checked-unchecked":"checked-indeterminate";break;case 3:i=1===e?"indeterminate-checked":"indeterminate-unchecked"}return`mat-checkbox-anim-${i}`}_syncIndeterminate(t){const e=this._inputElement;e&&(e.nativeElement.indeterminate=t)}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(n.l),n.Ob(n.h),n.Ob(l.e),n.Ob(n.A),n.Zb("tabindex"),n.Ob(b,8),n.Ob(c.a,8),n.Ob(u,8))},t.\u0275cmp=n.Ib({type:t,selectors:[["mat-checkbox"]],viewQuery:function(t,e){var i;1&t&&(n.Fc(h,!0),n.Fc(s.l,!0)),2&t&&(n.sc(i=n.dc())&&(e._inputElement=i.first),n.sc(i=n.dc())&&(e.ripple=i.first))},hostAttrs:[1,"mat-checkbox"],hostVars:12,hostBindings:function(t,e){2&t&&(n.Xb("id",e.id),n.Db("tabindex",null),n.Fb("mat-checkbox-indeterminate",e.indeterminate)("mat-checkbox-checked",e.checked)("mat-checkbox-disabled",e.disabled)("mat-checkbox-label-before","before"==e.labelPosition)("_mat-animation-noopable","NoopAnimations"===e._animationMode))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],id:"id",labelPosition:"labelPosition",name:"name",required:"required",checked:"checked",disabled:"disabled",indeterminate:"indeterminate",value:"value"},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[n.Bb([k]),n.zb],ngContentSelectors:d,decls:17,vars:19,consts:[[1,"mat-checkbox-layout"],["label",""],[1,"mat-checkbox-inner-container"],["type","checkbox",1,"mat-checkbox-input","cdk-visually-hidden",3,"id","required","checked","disabled","tabIndex","change","click"],["input",""],["matRipple","",1,"mat-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleRadius","matRippleCentered","matRippleAnimation"],[1,"mat-ripple-element","mat-checkbox-persistent-ripple"],[1,"mat-checkbox-frame"],[1,"mat-checkbox-background"],["version","1.1","focusable","false","viewBox","0 0 24 24",0,"xml","space","preserve",1,"mat-checkbox-checkmark"],["fill","none","stroke","white","d","M4.1,12.7 9,17.6 20.3,6.3",1,"mat-checkbox-checkmark-path"],[1,"mat-checkbox-mixedmark"],[1,"mat-checkbox-label",3,"cdkObserveContent"],["checkboxLabel",""],[2,"display","none"]],template:function(t,e){if(1&t&&(n.lc(),n.Ub(0,"label",0,1),n.Ub(2,"div",2),n.Ub(3,"input",3,4),n.cc("change",(function(t){return e._onInteractionEvent(t)}))("click",(function(t){return e._onInputClick(t)})),n.Tb(),n.Ub(5,"div",5),n.Pb(6,"div",6),n.Tb(),n.Pb(7,"div",7),n.Ub(8,"div",8),n.fc(),n.Ub(9,"svg",9),n.Pb(10,"path",10),n.Tb(),n.ec(),n.Pb(11,"div",11),n.Tb(),n.Tb(),n.Ub(12,"span",12,13),n.cc("cdkObserveContent",(function(){return e._onLabelTextChange()})),n.Ub(14,"span",14),n.Bc(15,"\xa0"),n.Tb(),n.kc(16),n.Tb(),n.Tb()),2&t){const t=n.tc(1),i=n.tc(13);n.Db("for",e.inputId),n.Cb(2),n.Fb("mat-checkbox-inner-container-no-side-margin",!i.textContent||!i.textContent.trim()),n.Cb(1),n.mc("id",e.inputId)("required",e.required)("checked",e.checked)("disabled",e.disabled)("tabIndex",e.tabIndex),n.Db("value",e.value)("name",e.name)("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby)("aria-checked",e._getAriaChecked()),n.Cb(2),n.mc("matRippleTrigger",t)("matRippleDisabled",e._isRippleDisabled())("matRippleRadius",20)("matRippleCentered",!0)("matRippleAnimation",n.pc(18,m))}},directives:[s.l,r.a],styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox.cdk-keyboard-focused .cdk-high-contrast-active .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"],encapsulation:2,changeDetection:0}),t})(),v=(()=>{class t{}return t.\u0275mod=n.Mb({type:t}),t.\u0275inj=n.Lb({factory:function(e){return new(e||t)}}),t})(),y=(()=>{class t{}return t.\u0275mod=n.Mb({type:t}),t.\u0275inj=n.Lb({factory:function(e){return new(e||t)},imports:[[s.m,s.g,r.c,v],s.g,v]}),t})()},bTqV:function(t,e,i){"use strict";i.d(e,"a",(function(){return d})),i.d(e,"b",(function(){return u}));var o=i("FKr1"),n=i("R1ws"),a=i("fXoL"),s=i("u47x");const c=["mat-button",""],r=["*"],l=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"];class h{constructor(t){this._elementRef=t}}const m=Object(o.q)(Object(o.s)(Object(o.r)(h)));let d=(()=>{class t extends m{constructor(t,e,i){super(t),this._focusMonitor=e,this._animationMode=i,this.isRoundButton=this._hasHostAttributes("mat-fab","mat-mini-fab"),this.isIconButton=this._hasHostAttributes("mat-icon-button");for(const o of l)this._hasHostAttributes(o)&&this._getHostElement().classList.add(o);t.nativeElement.classList.add("mat-button-base"),this._focusMonitor.monitor(this._elementRef,!0),this.isRoundButton&&(this.color="accent")}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(t="program",e){this._focusMonitor.focusVia(this._getHostElement(),t,e)}_getHostElement(){return this._elementRef.nativeElement}_isRippleDisabled(){return this.disableRipple||this.disabled}_hasHostAttributes(...t){return t.some(t=>this._getHostElement().hasAttribute(t))}}return t.\u0275fac=function(e){return new(e||t)(a.Ob(a.l),a.Ob(s.e),a.Ob(n.a,8))},t.\u0275cmp=a.Ib({type:t,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(t,e){var i;1&t&&a.Fc(o.l,!0),2&t&&a.sc(i=a.dc())&&(e.ripple=i.first)},hostAttrs:[1,"mat-focus-indicator"],hostVars:3,hostBindings:function(t,e){2&t&&(a.Db("disabled",e.disabled||null),a.Fb("_mat-animation-noopable","NoopAnimations"===e._animationMode))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[a.zb],attrs:c,ngContentSelectors:r,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(t,e){1&t&&(a.lc(),a.Ub(0,"span",0),a.kc(1),a.Tb(),a.Pb(2,"div",1),a.Pb(3,"div",2)),2&t&&(a.Cb(2),a.Fb("mat-button-ripple-round",e.isRoundButton||e.isIconButton),a.mc("matRippleDisabled",e._isRippleDisabled())("matRippleCentered",e.isIconButton)("matRippleTrigger",e._getHostElement()))},directives:[o.l],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"],encapsulation:2,changeDetection:0}),t})(),u=(()=>{class t{}return t.\u0275mod=a.Mb({type:t}),t.\u0275inj=a.Lb({factory:function(e){return new(e||t)},imports:[[o.m,o.g],o.g]}),t})()}}]);