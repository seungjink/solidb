(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3bsP":function(t,e,n){"use strict";n.r(e),n.d(e,"DevEquipModule",(function(){return y}));var o=n("ofXK"),i=n("tyNb"),a=n("3Pt+"),m=n("JX91"),l=n("lJxs"),b=n("fXoL"),r=n("jaz8"),c=n("kmnG"),p=n("qFsG"),d=n("/1cH"),u=n("bTqV"),f=n("bSwM"),h=n("UXJo"),s=n("FKr1");function g(t,e){if(1&t&&(b.Ub(0,"mat-option",59),b.Bc(1),b.Tb()),2&t){const t=e.$implicit;b.mc("value",t),b.Cb(1),b.Dc(" ",t.name," ")}}function T(t,e){if(1&t){const t=b.Vb();b.Ub(0,"div"),b.Ub(1,"mat-form-field",28),b.Pb(2,"input",60),b.Tb(),b.Ub(3,"button",61),b.cc("click",(function(){b.uc(t);const n=e.index;return b.gc().removeTextPlain(n)})),b.Bc(4," \uc81c\uac70 "),b.Tb(),b.Tb()}if(2&t){const t=e.index;b.Cb(2),b.mc("formControlName",t)}}function C(t,e){if(1&t){const t=b.Vb();b.Ub(0,"div"),b.Ub(1,"div",62),b.Ub(2,"mat-form-field",63),b.Pb(3,"input",64),b.Tb(),b.Ub(4,"mat-form-field",65),b.Pb(5,"input",66),b.Tb(),b.Ub(6,"mat-form-field",65),b.Pb(7,"input",67),b.Tb(),b.Ub(8,"mat-form-field",63),b.Pb(9,"input",68),b.Tb(),b.Ub(10,"button",61),b.cc("click",(function(){b.uc(t);const n=e.index;return b.gc().removeTextFormatted(n)})),b.Bc(11," \uc81c\uac70 "),b.Tb(),b.Tb(),b.Tb()}if(2&t){const t=e.index;b.Cb(1),b.mc("formGroupName",t)}}function P(t,e){if(1&t){const t=b.Vb();b.Ub(0,"div"),b.Ub(1,"div",62),b.Ub(2,"mat-form-field",65),b.Pb(3,"input",69),b.Tb(),b.Ub(4,"mat-form-field",63),b.Pb(5,"input",64),b.Tb(),b.Ub(6,"mat-form-field",65),b.Pb(7,"input",70),b.Tb(),b.Ub(8,"mat-form-field",65),b.Pb(9,"input",71),b.Tb(),b.Ub(10,"mat-form-field",63),b.Pb(11,"input",68),b.Tb(),b.Ub(12,"button",61),b.cc("click",(function(){b.uc(t);const n=e.index;return b.gc().removeTextSigil(n)})),b.Bc(13," \uc81c\uac70 "),b.Tb(),b.Tb(),b.Tb()}if(2&t){const t=e.index;b.Cb(1),b.mc("formGroupName",t)}}const U=[{path:"",component:(()=>{class t{constructor(t,e){this.soliProvider=t,this.fb=e,this.itemControl=new a.e,this.equipForm=this.fb.group({name:[""],recipe:[""],lvl:[""],tier:[""],atk:[""],atk_min:[""],atk_max:[""],def:[""],def_min:[""],def_max:[""],hp:[""],hp_min:[""],hp_max:[""],skill:[""],skill_min:[""],skill_max:[""],countRandomStat:[""],ChaAtkType_1:[""],ChaAtkType_2:[""],ChaAtkType_3:[""],ChaAtkType_4:[""],ChaAtkType_5:[""],ChaAtkType_6:[""],ChaAtkType_7:[""],mp:[""],speed:[""],criAtkMin:[""],criAtkMax:[""],criSkillMin:[""],criSkillMax:[""],ChaPosition_Short:!1,ChaPosition_Tank:!1,ChaPosition_Long:!1,ChaPosition_Support:!1,agent:[""],belonging:!1,textPlain:this.fb.array([]),textFormatted:this.fb.array([]),textSigil:this.fb.array([])}),this.INITIALFORM=this.equipForm.value,this.checkAll=!1}ngOnInit(){this.equipRecipe=this.getEquipFromRecipe(this.soliProvider.getdataRecipeEquip()),this.filteredOptions=this.itemControl.valueChanges.pipe(Object(m.a)(""),Object(l.a)(t=>"string"==typeof t?t:t.name),Object(l.a)(t=>t?this._filter(t):this.equipRecipe.slice()))}get textPlain(){return this.equipForm.get("textPlain")}get textFormatted(){return this.equipForm.get("textFormatted")}get textSigil(){return this.equipForm.get("textSigil")}getEquipFromRecipe(t){let e=[];for(let n of t){let t=n.results.split(",");for(let o of t)e.push({recipeId:n.ID,recipeName:n.Name,name:o.replace(/['"]+/g,"")})}return e}removeTextFormatted(t){this.textFormatted.removeAt(t)}removeTextSigil(t){this.textSigil.removeAt(t)}addTextPlain(){this.textPlain.push(this.fb.control(""))}removeTextPlain(t){this.textPlain.removeAt(t)}addTextFormatted(){this.textFormatted.push(this.fb.group({head:[""],min:[""],max:[""],tail:[""]}))}addTextSigil(){this.textSigil.push(this.fb.group({name:[""],head:[""],min:[""],max:[""],tail:[""]}))}displayFn(t){return t&&t.name?t.name:""}_filter(t){const e=t.toLowerCase();return this.equipRecipe.filter(t=>0===t.name.indexOf(e))}updatePosition(){this.checkAll=!this.checkAll,this.equipForm.get("ChaPosition_Short").setValue(this.checkAll),this.equipForm.get("ChaPosition_Tank").setValue(this.checkAll),this.equipForm.get("ChaPosition_Long").setValue(this.checkAll),this.equipForm.get("ChaPosition_Support").setValue(this.checkAll)}copyToClipboard(){return JSON.stringify(this.equipForm.value)}updateNameRecipe(){this.equipForm.get("name").setValue(this.itemControl.value.name),this.equipForm.get("recipe").setValue(this.itemControl.value.recipeId)}reset(){this.equipForm.reset(this.INITIALFORM),this.textPlain.clear(),this.textFormatted.clear(),this.textSigil.clear(),this.itemControl.reset("")}}return t.\u0275fac=function(e){return new(e||t)(b.Ob(r.a),b.Ob(a.d))},t.\u0275cmp=b.Ib({type:t,selectors:[["app-dev-equip"]],decls:188,vars:14,consts:[[1,"mat-elevation-z8","basecanvas"],[3,"formGroup"],[1,"section","group"],[1,"col","span_2_of_2",2,"text-align","center"],[2,"width","30%"],["type","text","matInput","",3,"formControl","matAutocomplete"],["autoActiveFirstOption","",3,"displayWith"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["mat-stroked-button","","color","accent",3,"click"],[2,"width","20%"],["type","text","matInput","","formControlName","name"],["type","text","matInput","","formControlName","recipe"],["formControlName","belonging"],[1,"col","span_1_of_2",2,"text-align","center"],[2,"width","33%"],["type","text","matInput","","formControlName","atk"],["type","text","matInput","","formControlName","atk_min"],["type","text","matInput","","formControlName","atk_max"],["type","text","matInput","","formControlName","def"],["type","text","matInput","","formControlName","def_min"],["type","text","matInput","","formControlName","def_max"],["type","text","matInput","","formControlName","hp"],["type","text","matInput","","formControlName","hp_min"],["type","text","matInput","","formControlName","hp_max"],["type","text","matInput","","formControlName","skill"],["type","text","matInput","","formControlName","skill_min"],["type","text","matInput","","formControlName","skill_max"],[2,"width","50%"],["type","text","matInput","","formControlName","countRandomStat"],[2,"width","14%"],["type","text","matInput","","formControlName","ChaAtkType_1"],["type","text","matInput","","formControlName","ChaAtkType_2"],["type","text","matInput","","formControlName","ChaAtkType_3"],["type","text","matInput","","formControlName","ChaAtkType_4"],["type","text","matInput","","formControlName","ChaAtkType_5"],["type","text","matInput","","formControlName","ChaAtkType_6"],["type","text","matInput","","formControlName","ChaAtkType_7"],[2,"width","25%"],["type","text","matInput","","formControlName","criAtkMin"],["type","text","matInput","","formControlName","criAtkMax"],["type","text","matInput","","formControlName","criSkillMin"],["type","text","matInput","","formControlName","criSkillMax"],["type","text","matInput","","formControlName","tier"],["type","text","matInput","","formControlName","lvl"],["type","text","matInput","","formControlName","speed"],["type","text","matInput","","formControlName","mp"],["type","text","matInput","","formControlName","agent"],["formControlName","ChaPosition_Short"],["formControlName","ChaPosition_Tank"],["formControlName","ChaPosition_Long"],["formControlName","ChaPosition_Support"],["formArrayName","textPlain"],["mat-stroked-button","","color","accent","type","button",3,"click"],[4,"ngFor","ngForOf"],["formArrayName","textFormatted"],["formArrayName","textSigil"],["mat-button","","color","warn","type","button",3,"cdkCopyToClipboard"],["mat-button","","color","primary","type","button",3,"click"],[3,"value"],["matInput","","placeholder","\uc124\uba85",3,"formControlName"],["mat-stroked-button","","color","primary","type","button",3,"click"],[3,"formGroupName"],[2,"width","35%"],["matInput","","placeholder","\uc124\uba85. ex)\ub370\ubbf8\uc9c0\ub97c","formControlName","head"],[2,"width","10%"],["matInput","","placeholder","\ucd5c\uc18c\uac12. ex)10","formControlName","min"],["matInput","","placeholder","\ucd5c\ub300\uac12. ex)20","formControlName","max"],["matInput","","placeholder","\uc124\uba85. ex)\uc90d\ub2c8\ub2e4","formControlName","tail"],["matInput","","placeholder","\uac01\uc778","formControlName","name"],["matInput","","placeholder","\ucd5c\uc18c","formControlName","min"],["matInput","","placeholder","\ucd5c\ub300","formControlName","max"]],template:function(t,e){if(1&t&&(b.Ub(0,"div",0),b.Ub(1,"form",1),b.Ub(2,"div",2),b.Ub(3,"div",3),b.Ub(4,"mat-form-field",4),b.Ub(5,"mat-label"),b.Bc(6,"\uc7a5\ube44 \uc774\ub984 \uac80\uc0c9"),b.Tb(),b.Pb(7,"input",5),b.Ub(8,"mat-autocomplete",6,7),b.Ac(10,g,2,2,"mat-option",8),b.hc(11,"async"),b.Tb(),b.Tb(),b.Ub(12,"button",9),b.cc("click",(function(){return e.updateNameRecipe()})),b.Bc(13," \uc120\ud0dd "),b.Tb(),b.Ub(14,"mat-form-field",10),b.Ub(15,"mat-label"),b.Bc(16,"\uc544\uc774\ud15c\uc774\ub984(\uc790\ub3d9)"),b.Tb(),b.Pb(17,"input",11),b.Tb(),b.Ub(18,"mat-form-field",10),b.Ub(19,"mat-label"),b.Bc(20,"\uc870\ud569\ubc95(\uc790\ub3d9)"),b.Tb(),b.Pb(21,"input",12),b.Tb(),b.Ub(22,"mat-checkbox",13),b.Bc(23,"\uadc0\uc18d"),b.Tb(),b.Tb(),b.Tb(),b.Ub(24,"div",2),b.Ub(25,"div",14),b.Ub(26,"h3"),b.Bc(27,"\uae30\ubcf8 \uc2a4\ud0ef"),b.Tb(),b.Ub(28,"mat-form-field",15),b.Ub(29,"mat-label"),b.Bc(30,"\uacf5\uaca9\ub825(\uace0\uc815)"),b.Tb(),b.Pb(31,"input",16),b.Tb(),b.Ub(32,"mat-form-field",15),b.Ub(33,"mat-label"),b.Bc(34,"\ucd94\uac00(\ucd5c\uc18c)"),b.Tb(),b.Pb(35,"input",17),b.Tb(),b.Ub(36,"mat-form-field",15),b.Ub(37,"mat-label"),b.Bc(38,"\ucd94\uac00(\ucd5c\ub300)"),b.Tb(),b.Pb(39,"input",18),b.Tb(),b.Ub(40,"mat-form-field",15),b.Ub(41,"mat-label"),b.Bc(42,"\ubc29\uc5b4\ub825(\uace0\uc815)"),b.Tb(),b.Pb(43,"input",19),b.Tb(),b.Ub(44,"mat-form-field",15),b.Ub(45,"mat-label"),b.Bc(46,"\ucd94\uac00(\ucd5c\uc18c)"),b.Tb(),b.Pb(47,"input",20),b.Tb(),b.Ub(48,"mat-form-field",15),b.Ub(49,"mat-label"),b.Bc(50,"\ucd94\uac00(\ucd5c\ub300)"),b.Tb(),b.Pb(51,"input",21),b.Tb(),b.Ub(52,"mat-form-field",15),b.Ub(53,"mat-label"),b.Bc(54,"\uccb4\ub825(\uace0\uc815)"),b.Tb(),b.Pb(55,"input",22),b.Tb(),b.Ub(56,"mat-form-field",15),b.Ub(57,"mat-label"),b.Bc(58,"\ucd94\uac00(\ucd5c\uc18c)"),b.Tb(),b.Pb(59,"input",23),b.Tb(),b.Ub(60,"mat-form-field",15),b.Ub(61,"mat-label"),b.Bc(62,"\ucd94\uac00(\ucd5c\ub300)"),b.Tb(),b.Pb(63,"input",24),b.Tb(),b.Ub(64,"mat-form-field",15),b.Ub(65,"mat-label"),b.Bc(66,"\uc2a4\ud0ac\uc704\ub825(\uace0\uc815)"),b.Tb(),b.Pb(67,"input",25),b.Tb(),b.Ub(68,"mat-form-field",15),b.Ub(69,"mat-label"),b.Bc(70,"\ucd94\uac00(\ucd5c\uc18c)"),b.Tb(),b.Pb(71,"input",26),b.Tb(),b.Ub(72,"mat-form-field",15),b.Ub(73,"mat-label"),b.Bc(74,"\ucd94\uac00(\ucd5c\ub300)"),b.Tb(),b.Pb(75,"input",27),b.Tb(),b.Ub(76,"mat-form-field",28),b.Ub(77,"mat-label"),b.Bc(78,"\ub79c\ub364\uc2a4\ud0ef \uac1c\uc218"),b.Tb(),b.Pb(79,"input",29),b.Tb(),b.Tb(),b.Ub(80,"div",14),b.Ub(81,"h3"),b.Bc(82,"\uc800\ud56d\ub825"),b.Tb(),b.Ub(83,"mat-form-field",30),b.Ub(84,"mat-label"),b.Bc(85,"\ucc38\uaca9"),b.Tb(),b.Pb(86,"input",31),b.Tb(),b.Ub(87,"mat-form-field",30),b.Ub(88,"mat-label"),b.Bc(89,"\ud0c0\uaca9"),b.Tb(),b.Pb(90,"input",32),b.Tb(),b.Ub(91,"mat-form-field",30),b.Ub(92,"mat-label"),b.Bc(93,"\ud654\uc5fc"),b.Tb(),b.Pb(94,"input",33),b.Tb(),b.Ub(95,"mat-form-field",30),b.Ub(96,"mat-label"),b.Bc(97,"\ub0c9\uae30"),b.Tb(),b.Pb(98,"input",34),b.Tb(),b.Ub(99,"mat-form-field",30),b.Ub(100,"mat-label"),b.Bc(101,"\uc804\uaca9"),b.Tb(),b.Pb(102,"input",35),b.Tb(),b.Ub(103,"mat-form-field",30),b.Ub(104,"mat-label"),b.Bc(105,"\uc2e0\uc131"),b.Tb(),b.Pb(106,"input",36),b.Tb(),b.Ub(107,"mat-form-field",30),b.Ub(108,"mat-label"),b.Bc(109,"\uc554\ud751"),b.Tb(),b.Pb(110,"input",37),b.Tb(),b.Ub(111,"h3"),b.Bc(112,"\ud06c\ub9ac\ud2f0\uceec"),b.Tb(),b.Ub(113,"mat-form-field",38),b.Ub(114,"mat-label"),b.Bc(115,"\uacf5\uaca9(\ucd5c\uc18c)"),b.Tb(),b.Pb(116,"input",39),b.Tb(),b.Ub(117,"mat-form-field",38),b.Ub(118,"mat-label"),b.Bc(119,"\uacf5\uaca9(\ucd5c\ub300)"),b.Tb(),b.Pb(120,"input",40),b.Tb(),b.Ub(121,"mat-form-field",38),b.Ub(122,"mat-label"),b.Bc(123,"\uc2a4\ud0ac(\ucd5c\uc18c)"),b.Tb(),b.Pb(124,"input",41),b.Tb(),b.Ub(125,"mat-form-field",38),b.Ub(126,"mat-label"),b.Bc(127,"\uc2a4\ud0ac(\ucd5c\ub300)"),b.Tb(),b.Pb(128,"input",42),b.Tb(),b.Ub(129,"h3"),b.Bc(130,"\uae30\ud0c0\uc2a4\ud0ef"),b.Tb(),b.Ub(131,"mat-form-field",10),b.Ub(132,"mat-label"),b.Bc(133,"\ud2f0\uc5b4"),b.Tb(),b.Pb(134,"input",43),b.Tb(),b.Ub(135,"mat-form-field",10),b.Ub(136,"mat-label"),b.Bc(137,"\uc694\uad6c\ub808\ubca8"),b.Tb(),b.Pb(138,"input",44),b.Tb(),b.Ub(139,"mat-form-field",10),b.Ub(140,"mat-label"),b.Bc(141,"\uc774\ub3d9\uc18d\ub3c4"),b.Tb(),b.Pb(142,"input",45),b.Tb(),b.Ub(143,"mat-form-field",10),b.Ub(144,"mat-label"),b.Bc(145,"mp"),b.Tb(),b.Pb(146,"input",46),b.Tb(),b.Ub(147,"mat-form-field",10),b.Ub(148,"mat-label"),b.Bc(149,"\ud55c\uc815\uc694\uc6d0"),b.Tb(),b.Pb(150,"input",47),b.Tb(),b.Ub(151,"h3"),b.Bc(152,"\ucc29\uc6a9 \uac00\ub2a5 \ud3ec\uc9c0\uc158"),b.Tb(),b.Ub(153,"button",9),b.cc("click",(function(){return e.updatePosition()})),b.Bc(154," \uc804\uccb4\uc120\ud0dd/\ud574\uc81c "),b.Tb(),b.Ub(155,"mat-checkbox",48),b.Bc(156,"\uadfc\uc811"),b.Tb(),b.Ub(157,"mat-checkbox",49),b.Bc(158,"\ud0f1\ucee4"),b.Tb(),b.Ub(159,"mat-checkbox",50),b.Bc(160,"\uc6d0\uac70\ub9ac"),b.Tb(),b.Ub(161,"mat-checkbox",51),b.Bc(162,"\uc9c0\uc6d0"),b.Tb(),b.Tb(),b.Tb(),b.Ub(163,"div",2),b.Ub(164,"div",3),b.Ub(165,"h3"),b.Bc(166,"\ub098\uba38\uc9c0 \uace0\uc720 \ud6a8\uacfc\ub4e4"),b.Tb(),b.Ub(167,"div",52),b.Ub(168,"button",53),b.cc("click",(function(){return e.addTextPlain()})),b.Bc(169," \uc77c\ubc18 \ud6a8\uacfc \ucd94\uac00 "),b.Tb(),b.Ac(170,T,5,1,"div",54),b.Tb(),b.Ub(171,"div",55),b.Ub(172,"button",53),b.cc("click",(function(){return e.addTextFormatted()})),b.Bc(173," \uac00\ubcc0 \uc218\uce58\ub97c \ud3ec\ud568\ud55c \ud6a8\uacfc \ucd94\uac00 "),b.Tb(),b.Ac(174,C,12,1,"div",54),b.Tb(),b.Ub(175,"div",56),b.Ub(176,"button",53),b.cc("click",(function(){return e.addTextSigil()})),b.Bc(177," \uac01\uc778 \ucd94\uac00 "),b.Tb(),b.Ac(178,P,14,1,"div",54),b.Tb(),b.Tb(),b.Tb(),b.Ub(179,"div",2),b.Ub(180,"div",3),b.Bc(181),b.hc(182,"json"),b.Tb(),b.Ub(183,"div",3),b.Ub(184,"button",57),b.Bc(185," \ubcf5\uc0ac "),b.Tb(),b.Ub(186,"button",58),b.cc("click",(function(){return e.reset()})),b.Bc(187," \ub9ac\uc14b "),b.Tb(),b.Tb(),b.Tb(),b.Tb(),b.Tb()),2&t){const t=b.tc(9);b.Cb(1),b.mc("formGroup",e.equipForm),b.Cb(6),b.mc("formControl",e.itemControl)("matAutocomplete",t),b.Cb(1),b.mc("displayWith",e.displayFn),b.Cb(2),b.mc("ngForOf",b.ic(11,10,e.filteredOptions)),b.Cb(160),b.mc("ngForOf",e.textPlain.controls),b.Cb(4),b.mc("ngForOf",e.textFormatted.controls),b.Cb(4),b.mc("ngForOf",e.textSigil.controls),b.Cb(3),b.Dc(" ",b.ic(182,12,e.equipForm.value)," "),b.Cb(3),b.mc("cdkCopyToClipboard",e.copyToClipboard())}},directives:[a.r,a.o,a.h,c.b,c.e,p.a,a.b,d.c,a.n,a.f,d.a,o.l,u.a,a.g,f.a,a.c,h.a,s.i,a.i],pipes:[o.b,o.g],styles:[".mat-form-field[_ngcontent-%COMP%]{text-align:center}h3[_ngcontent-%COMP%]{line-height:0}",'@media screen and (min-width:800px){.basecanvas[_ngcontent-%COMP%]{width:60%}}.basecanvas[_ngcontent-%COMP%], .section[_ngcontent-%COMP%]{clear:both;margin:auto}.basecanvas[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.section[_ngcontent-%COMP%]{width:100%}.group[_ngcontent-%COMP%]:after, .group[_ngcontent-%COMP%]:before{content:"";display:table}.group[_ngcontent-%COMP%]:after{clear:both}.group[_ngcontent-%COMP%]{zoom:1}.col[_ngcontent-%COMP%]{display:block;float:left;margin:1% 0 1% 1.6%}.col[_ngcontent-%COMP%]:first-child{margin-left:0}@media only screen and (max-width:800px){.col[_ngcontent-%COMP%]{margin:1% 0}}.span_2_of_2[_ngcontent-%COMP%]{width:100%}.span_1_of_2[_ngcontent-%COMP%]{width:49.2%}@media only screen and (max-width:800px){.span_1_of_2[_ngcontent-%COMP%], .span_2_of_2[_ngcontent-%COMP%]{width:100%}}.divTable[_ngcontent-%COMP%]{display:table;width:100%}.divTableRow[_ngcontent-%COMP%]{display:table-row}.divTableCell[_ngcontent-%COMP%]{display:table-cell;text-align:center;padding:3px 10px;word-break:keep-all}.cell-tc10[_ngcontent-%COMP%]{width:10%}.cell-tc20[_ngcontent-%COMP%]{width:20%}.cell-tc30[_ngcontent-%COMP%]{width:30%}.cell-tc40[_ngcontent-%COMP%]{width:40%}.cell-tc90[_ngcontent-%COMP%]{width:90%}.cell-tc80[_ngcontent-%COMP%]{width:80%}.cell-tc70[_ngcontent-%COMP%]{width:70%}.cell-tc60[_ngcontent-%COMP%]{width:60%}.cell-tc35[_ngcontent-%COMP%]{width:35%}.cell-tc15[_ngcontent-%COMP%]{width:15%}.cell-tc85[_ngcontent-%COMP%]{width:85%}.cell-tc65[_ngcontent-%COMP%]{width:65%}.cell-listpadding[_ngcontent-%COMP%]{padding-bottom:.4rem;padding-top:.4rem}.nohighlight[_ngcontent-%COMP%]{color:#000}.highlight[_ngcontent-%COMP%]{background:url(brush.a862d1f1185b3eabf0d5.png);background-repeat:no-repeat;background-size:100% 95%;padding:8px 0}.highlight[_ngcontent-%COMP%], .highlightReduced[_ngcontent-%COMP%]{text-decoration:none;color:#000}.highlightReduced[_ngcontent-%COMP%]{background:url(brush.a862d1f1185b3eabf0d5.png);background-repeat:repeat;background-size:100% 80%;padding:8px 2}img.inline10[_ngcontent-%COMP%]{width:1rem}img.inline10[_ngcontent-%COMP%], img.inline15[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}img.inline15[_ngcontent-%COMP%]{width:1.5rem}img.inline20[_ngcontent-%COMP%]{width:2rem}img.inline20[_ngcontent-%COMP%], img.inline25[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}img.inline25[_ngcontent-%COMP%]{width:2.5rem}img.inline30[_ngcontent-%COMP%]{width:3rem}img.inline30[_ngcontent-%COMP%], img.inline35[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}img.inline35[_ngcontent-%COMP%]{width:3.5rem}img.inline40[_ngcontent-%COMP%]{vertical-align:middle;width:4rem}.font-weight-bold[_ngcontent-%COMP%]{font-weight:700}']}),t})()}];let x=(()=>{class t{}return t.\u0275mod=b.Mb({type:t}),t.\u0275inj=b.Lb({factory:function(e){return new(e||t)},imports:[[i.f.forChild(U)],i.f]}),t})();var _=n("7EHt");let y=(()=>{class t{}return t.\u0275mod=b.Mb({type:t}),t.\u0275inj=b.Lb({factory:function(e){return new(e||t)},imports:[[o.c,x,a.q,c.d,d.b,h.b,_.b,p.b,u.b,f.b]]}),t})()}}]);