(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-498ce078"],{3984:function(t,e,a){"use strict";a("f75e")},"9f47":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("el-card",{staticClass:"attrMt"},[a("CategorySelect",{attrs:{show:t.arrtShow},on:{getCategoryId:t.getCategoryId}})],1),a("el-card",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.arrtShow,expression:"arrtShow"}]},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",disabled:!t.categoryId.category3Id},on:{click:t.arrtAddyTo}},[t._v("添加属性")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.labelData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),a("el-table-column",{attrs:{prop:"attrName",label:"属性名称",width:"150"}}),a("el-table-column",{attrs:{prop:"porp",label:"属性值列表",width:"width"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return t._l(r.attrValueList,(function(e){return a("el-tag",{key:e.id,staticStyle:{margin:"0px 20px"},attrs:{type:"success"}},[t._v(t._s(e.valueName))])}))}}])}),a("el-table-column",{attrs:{prop:"prop",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("el-button",{attrs:{type:"warning",icon:"el-icon-edit",size:"mini"},on:{click:function(e){return t.attrRevise(r)}}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(e){return t.deleteArrt(r)}}})]}}])})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.arrtShow,expression:"!arrtShow"}]},[a("el-form",{ref:"AddAndModify",attrs:{inline:!0,model:t.AddAndModify,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"属性名"}},[a("el-input",{model:{value:t.AddAndModify.attrName,callback:function(e){t.$set(t.AddAndModify,"attrName",e)},expression:"AddAndModify.attrName"}})],1)],1),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",placeholder:"请输入属性名",disabled:!t.AddAndModify.attrName},on:{click:t.addArrtValue}},[t._v("添加属性值")]),a("el-button",{on:{click:function(e){t.arrtShow=!0}}},[t._v("取消")]),a("el-table",{staticClass:"attrMt",staticStyle:{width:"100%"},attrs:{data:t.AddAndModify.attrValueList,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center"}}),a("el-table-column",{attrs:{prop:"prop",label:"属性值名称",width:"width"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row,n=e.$index;return[r.flag?a("el-input",{ref:n,attrs:{placeholder:"请输入属性值名称",size:"mini"},on:{blur:function(e){return t.tolook(r)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.tolook(r)}},model:{value:r.valueName,callback:function(e){t.$set(r,"valueName",e)},expression:"row.valueName"}}):a("div",{on:{click:function(e){return t.toEtit(r,n)}}},[t._v(t._s(r.valueName))])]}}])}),a("el-table-column",{attrs:{prop:"prop",label:"操作",width:"width"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row,n=e.$index;return[a("el-popconfirm",{attrs:{title:"确认删除"+r.valueName},on:{onConfirm:function(e){return t.deleteValue(n)}}},[a("el-button",{attrs:{slot:"reference",type:"danger",size:"mini",icon:"el-icon-delete"},slot:"reference"})],1)]}}])})],1),a("el-button",{attrs:{type:"primary",disabled:t.AddAndModify.attrValueList.length<1},on:{click:t.attrUpDataAttr}},[t._v("保存")]),a("el-button",{on:{click:function(e){t.arrtShow=!0}}},[t._v("取消")])],1)])],1)},n=[],o=a("c7eb"),i=a("1da1"),d=(a("d3b7"),a("159b"),a("498a"),a("a434"),a("4de4"),a("0644")),l=a.n(d),c={components:{},data:function(){return{categoryId:{category1Id:"",category2Id:"",category3Id:""},labelData:[],arrtShow:!0,AddAndModify:{attrName:"",attrValueList:[],categoryId:0,categoryLevel:3}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{getCategoryId:function(t){1===t.level?(this.categoryId.category1Id=t.categoryId,this.categoryId.category2Id="",this.categoryId.category3Id=""):2===t.level?(this.categoryId.category2Id=t.categoryId,this.categoryId.category3Id=""):(this.categoryId.category3Id=t.categoryId,this.getAttrList())},getAttrList:function(){var t=this;return Object(i["a"])(Object(o["a"])().mark((function e(){var a,r,n,i,d;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.categoryId,r=a.category1Id,n=a.category2Id,i=a.category3Id,e.next=3,t.$API.Attr.reqAttrList(r,n,i);case 3:d=e.sent,200===d.code&&(t.labelData=d.data);case 5:case"end":return e.stop()}}),e)})))()},arrtAddyTo:function(){this.arrtShow=!1,this.AddAndModify={attrName:"",attrValueList:[],categoryId:this.categoryId.category3Id,categoryLevel:3}},attrRevise:function(t){var e=this;this.arrtShow=!1,this.AddAndModify=l()(t),this.AddAndModify.attrValueList.forEach((function(t){e.$set(t,"flag",!1)}))},addArrtValue:function(){var t=this;this.AddAndModify.attrValueList.push({attrId:this.AddAndModify.id,valueName:"",flag:!0}),this.$nextTick((function(){t.$refs[t.AddAndModify.attrValueList.length-1].focus()}))},tolook:function(t){if(""!==t.valueName.trim()){var e=this.AddAndModify.attrValueList.some((function(e){if(t!==e)return t.valueName===e.valueName}));e||(t.flag=!1)}else this.$message("请输入一个正常的属性值")},toEtit:function(t,e){var a=this;t.flag=!0,this.$nextTick((function(){a.$refs[e].focus()}))},deleteValue:function(t){this.AddAndModify.attrValueList.splice(t,1)},attrUpDataAttr:function(){var t=this;return Object(i["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.AddAndModify.attrValueList=t.AddAndModify.attrValueList.filter((function(t){if(""!==t.valueName)return delete t.flag,!0})),e.prev=1,e.next=4,t.$API.Attr.reqAttrInfo(t.AddAndModify);case 4:t.$message({message:"保存成功",type:"success"}),t.getAttrList(),t.arrtShow=!0,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},deleteArrt:function(t){var e=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var r;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$API.Attr.deleteArrt(t.id);case 2:r=a.sent,200===r.code&&(e.$message({type:"success",message:r.message}),e.getAttrList());case 4:case"end":return a.stop()}}),a)})))()}}},s=c,u=(a("3984"),a("2877")),f=Object(u["a"])(s,r,n,!1,null,"0cbd4d28",null);e["default"]=f.exports},f75e:function(t,e,a){}}]);