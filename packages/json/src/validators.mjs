"use strict";
export const AnnouncingJSON = validate10;
const schema11 = {"$id":"AnnouncingJSON","$schema":"http://json-schema.org/draft-07/schema#","type":"object","required":["updated","info"],"properties":{"updated":{"type":"string","format":"date-time","minLength":1,"maxLength":30,"nullable":false},"info":{"type":"object","required":["name"],"properties":{"name":{"type":"string","nullable":false,"minLength":1,"maxLength":50},"desc":{"type":"string","nullable":true,"maxLength":500},"link":{"type":"string","nullable":true,"maxLength":2000,"format":"uri-reference"},"icon":{"type":"string","nullable":true,"maxLength":2000,"format":"uri-reference"}}},"posts":{"type":"array","nullable":true,"items":{"type":"object","required":["published"],"properties":{"published":{"type":"string","format":"date-time","minLength":1,"maxLength":30,"nullable":false},"title":{"type":"string","nullable":true,"maxLength":100},"body":{"type":"string","nullable":true,"maxLength":1000},"img":{"type":"string","nullable":true,"maxLength":2000,"format":"uri-reference"},"imgs":{"type":"array","nullable":true,"maxItems":10,"uniqueItems":true,"items":{"type":"string","nullable":false,"minLength":1,"maxLength":2000,"format":"uri-reference"}},"link":{"type":"string","nullable":true,"maxLength":2000,"format":"uri-reference"}}}},"refs":{"type":"array","nullable":true,"items":{"type":"object","required":["href","count"],"properties":{"href":{"type":"string","nullable":false,"minLength":1,"maxLength":2000,"format":"uri-reference"},"count":{"type":"number","nullable":false}}}}}};
const formats0 = require("ajv-formats/dist/formats").fullFormats["date-time"];
const formats2 = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
const func2 = require("ajv/dist/runtime/ucs2length").default;

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="AnnouncingJSON" */;
let vErrors = null;
let errors = 0;
if(errors === 0){
if(data && typeof data == "object" && !Array.isArray(data)){
let missing0;
if(((data.updated === undefined) && (missing0 = "updated")) || ((data.info === undefined) && (missing0 = "info"))){
validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
return false;
}
else {
if(data.updated !== undefined){
let data0 = data.updated;
const _errs1 = errors;
if(errors === _errs1){
if(errors === _errs1){
if(typeof data0 === "string"){
if(func2(data0) > 30){
validate10.errors = [{instancePath:instancePath+"/updated",schemaPath:"#/properties/updated/maxLength",keyword:"maxLength",params:{limit: 30},message:"must NOT have more than 30 characters"}];
return false;
}
else {
if(func2(data0) < 1){
validate10.errors = [{instancePath:instancePath+"/updated",schemaPath:"#/properties/updated/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];
return false;
}
else {
if(!(formats0.validate(data0))){
validate10.errors = [{instancePath:instancePath+"/updated",schemaPath:"#/properties/updated/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""}];
return false;
}
}
}
}
else {
validate10.errors = [{instancePath:instancePath+"/updated",schemaPath:"#/properties/updated/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
}
var valid0 = _errs1 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.info !== undefined){
let data1 = data.info;
const _errs4 = errors;
if(errors === _errs4){
if(data1 && typeof data1 == "object" && !Array.isArray(data1)){
let missing1;
if((data1.name === undefined) && (missing1 = "name")){
validate10.errors = [{instancePath:instancePath+"/info",schemaPath:"#/properties/info/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];
return false;
}
else {
if(data1.name !== undefined){
let data2 = data1.name;
const _errs6 = errors;
if(errors === _errs6){
if(typeof data2 === "string"){
if(func2(data2) > 50){
validate10.errors = [{instancePath:instancePath+"/info/name",schemaPath:"#/properties/info/properties/name/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"}];
return false;
}
else {
if(func2(data2) < 1){
validate10.errors = [{instancePath:instancePath+"/info/name",schemaPath:"#/properties/info/properties/name/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];
return false;
}
}
}
else {
validate10.errors = [{instancePath:instancePath+"/info/name",schemaPath:"#/properties/info/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
var valid1 = _errs6 === errors;
}
else {
var valid1 = true;
}
if(valid1){
if(data1.desc !== undefined){
let data3 = data1.desc;
const _errs9 = errors;
if((typeof data3 !== "string") && (data3 !== null)){
validate10.errors = [{instancePath:instancePath+"/info/desc",schemaPath:"#/properties/info/properties/desc/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs9){
if(typeof data3 === "string"){
if(func2(data3) > 500){
validate10.errors = [{instancePath:instancePath+"/info/desc",schemaPath:"#/properties/info/properties/desc/maxLength",keyword:"maxLength",params:{limit: 500},message:"must NOT have more than 500 characters"}];
return false;
}
}
}
var valid1 = _errs9 === errors;
}
else {
var valid1 = true;
}
if(valid1){
if(data1.link !== undefined){
let data4 = data1.link;
const _errs12 = errors;
if((typeof data4 !== "string") && (data4 !== null)){
validate10.errors = [{instancePath:instancePath+"/info/link",schemaPath:"#/properties/info/properties/link/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs12){
if(errors === _errs12){
if(typeof data4 === "string"){
if(func2(data4) > 2000){
validate10.errors = [{instancePath:instancePath+"/info/link",schemaPath:"#/properties/info/properties/link/maxLength",keyword:"maxLength",params:{limit: 2000},message:"must NOT have more than 2000 characters"}];
return false;
}
else {
if(!(formats2.test(data4))){
validate10.errors = [{instancePath:instancePath+"/info/link",schemaPath:"#/properties/info/properties/link/format",keyword:"format",params:{format: "uri-reference"},message:"must match format \""+"uri-reference"+"\""}];
return false;
}
}
}
}
}
var valid1 = _errs12 === errors;
}
else {
var valid1 = true;
}
if(valid1){
if(data1.icon !== undefined){
let data5 = data1.icon;
const _errs15 = errors;
if((typeof data5 !== "string") && (data5 !== null)){
validate10.errors = [{instancePath:instancePath+"/info/icon",schemaPath:"#/properties/info/properties/icon/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs15){
if(errors === _errs15){
if(typeof data5 === "string"){
if(func2(data5) > 2000){
validate10.errors = [{instancePath:instancePath+"/info/icon",schemaPath:"#/properties/info/properties/icon/maxLength",keyword:"maxLength",params:{limit: 2000},message:"must NOT have more than 2000 characters"}];
return false;
}
else {
if(!(formats2.test(data5))){
validate10.errors = [{instancePath:instancePath+"/info/icon",schemaPath:"#/properties/info/properties/icon/format",keyword:"format",params:{format: "uri-reference"},message:"must match format \""+"uri-reference"+"\""}];
return false;
}
}
}
}
}
var valid1 = _errs15 === errors;
}
else {
var valid1 = true;
}
}
}
}
}
}
else {
validate10.errors = [{instancePath:instancePath+"/info",schemaPath:"#/properties/info/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
var valid0 = _errs4 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.posts !== undefined){
let data6 = data.posts;
const _errs18 = errors;
if((!(Array.isArray(data6))) && (data6 !== null)){
validate10.errors = [{instancePath:instancePath+"/posts",schemaPath:"#/properties/posts/type",keyword:"type",params:{type: "array"},message:"must be array"}];
return false;
}
if(errors === _errs18){
if(Array.isArray(data6)){
var valid2 = true;
const len0 = data6.length;
for(let i0=0; i0<len0; i0++){
let data7 = data6[i0];
const _errs21 = errors;
if(errors === _errs21){
if(data7 && typeof data7 == "object" && !Array.isArray(data7)){
let missing2;
if((data7.published === undefined) && (missing2 = "published")){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0,schemaPath:"#/properties/posts/items/required",keyword:"required",params:{missingProperty: missing2},message:"must have required property '"+missing2+"'"}];
return false;
}
else {
if(data7.published !== undefined){
let data8 = data7.published;
const _errs23 = errors;
if(errors === _errs23){
if(errors === _errs23){
if(typeof data8 === "string"){
if(func2(data8) > 30){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/published",schemaPath:"#/properties/posts/items/properties/published/maxLength",keyword:"maxLength",params:{limit: 30},message:"must NOT have more than 30 characters"}];
return false;
}
else {
if(func2(data8) < 1){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/published",schemaPath:"#/properties/posts/items/properties/published/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];
return false;
}
else {
if(!(formats0.validate(data8))){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/published",schemaPath:"#/properties/posts/items/properties/published/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""}];
return false;
}
}
}
}
else {
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/published",schemaPath:"#/properties/posts/items/properties/published/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
}
var valid3 = _errs23 === errors;
}
else {
var valid3 = true;
}
if(valid3){
if(data7.title !== undefined){
let data9 = data7.title;
const _errs26 = errors;
if((typeof data9 !== "string") && (data9 !== null)){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/title",schemaPath:"#/properties/posts/items/properties/title/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs26){
if(typeof data9 === "string"){
if(func2(data9) > 100){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/title",schemaPath:"#/properties/posts/items/properties/title/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"}];
return false;
}
}
}
var valid3 = _errs26 === errors;
}
else {
var valid3 = true;
}
if(valid3){
if(data7.body !== undefined){
let data10 = data7.body;
const _errs29 = errors;
if((typeof data10 !== "string") && (data10 !== null)){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/body",schemaPath:"#/properties/posts/items/properties/body/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs29){
if(typeof data10 === "string"){
if(func2(data10) > 1000){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/body",schemaPath:"#/properties/posts/items/properties/body/maxLength",keyword:"maxLength",params:{limit: 1000},message:"must NOT have more than 1000 characters"}];
return false;
}
}
}
var valid3 = _errs29 === errors;
}
else {
var valid3 = true;
}
if(valid3){
if(data7.img !== undefined){
let data11 = data7.img;
const _errs32 = errors;
if((typeof data11 !== "string") && (data11 !== null)){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/img",schemaPath:"#/properties/posts/items/properties/img/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs32){
if(errors === _errs32){
if(typeof data11 === "string"){
if(func2(data11) > 2000){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/img",schemaPath:"#/properties/posts/items/properties/img/maxLength",keyword:"maxLength",params:{limit: 2000},message:"must NOT have more than 2000 characters"}];
return false;
}
else {
if(!(formats2.test(data11))){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/img",schemaPath:"#/properties/posts/items/properties/img/format",keyword:"format",params:{format: "uri-reference"},message:"must match format \""+"uri-reference"+"\""}];
return false;
}
}
}
}
}
var valid3 = _errs32 === errors;
}
else {
var valid3 = true;
}
if(valid3){
if(data7.imgs !== undefined){
let data12 = data7.imgs;
const _errs35 = errors;
if((!(Array.isArray(data12))) && (data12 !== null)){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/imgs",schemaPath:"#/properties/posts/items/properties/imgs/type",keyword:"type",params:{type: "array"},message:"must be array"}];
return false;
}
if(errors === _errs35){
if(Array.isArray(data12)){
if(data12.length > 10){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/imgs",schemaPath:"#/properties/posts/items/properties/imgs/maxItems",keyword:"maxItems",params:{limit: 10},message:"must NOT have more than 10 items"}];
return false;
}
else {
var valid4 = true;
const len1 = data12.length;
for(let i1=0; i1<len1; i1++){
let data13 = data12[i1];
const _errs38 = errors;
if(errors === _errs38){
if(errors === _errs38){
if(typeof data13 === "string"){
if(func2(data13) > 2000){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/imgs/" + i1,schemaPath:"#/properties/posts/items/properties/imgs/items/maxLength",keyword:"maxLength",params:{limit: 2000},message:"must NOT have more than 2000 characters"}];
return false;
}
else {
if(func2(data13) < 1){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/imgs/" + i1,schemaPath:"#/properties/posts/items/properties/imgs/items/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];
return false;
}
else {
if(!(formats2.test(data13))){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/imgs/" + i1,schemaPath:"#/properties/posts/items/properties/imgs/items/format",keyword:"format",params:{format: "uri-reference"},message:"must match format \""+"uri-reference"+"\""}];
return false;
}
}
}
}
else {
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/imgs/" + i1,schemaPath:"#/properties/posts/items/properties/imgs/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
}
var valid4 = _errs38 === errors;
if(!valid4){
break;
}
}
if(valid4){
let i2 = data12.length;
let j0;
if(i2 > 1){
const indices0 = {};
for(;i2--;){
let item0 = data12[i2];
if(typeof item0 !== "string"){
continue;
}
if(typeof indices0[item0] == "number"){
j0 = indices0[item0];
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/imgs",schemaPath:"#/properties/posts/items/properties/imgs/uniqueItems",keyword:"uniqueItems",params:{i: i2, j: j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i2+" are identical)"}];
return false;
break;
}
indices0[item0] = i2;
}
}
}
}
}
}
var valid3 = _errs35 === errors;
}
else {
var valid3 = true;
}
if(valid3){
if(data7.link !== undefined){
let data14 = data7.link;
const _errs41 = errors;
if((typeof data14 !== "string") && (data14 !== null)){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/link",schemaPath:"#/properties/posts/items/properties/link/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs41){
if(errors === _errs41){
if(typeof data14 === "string"){
if(func2(data14) > 2000){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/link",schemaPath:"#/properties/posts/items/properties/link/maxLength",keyword:"maxLength",params:{limit: 2000},message:"must NOT have more than 2000 characters"}];
return false;
}
else {
if(!(formats2.test(data14))){
validate10.errors = [{instancePath:instancePath+"/posts/" + i0+"/link",schemaPath:"#/properties/posts/items/properties/link/format",keyword:"format",params:{format: "uri-reference"},message:"must match format \""+"uri-reference"+"\""}];
return false;
}
}
}
}
}
var valid3 = _errs41 === errors;
}
else {
var valid3 = true;
}
}
}
}
}
}
}
}
else {
validate10.errors = [{instancePath:instancePath+"/posts/" + i0,schemaPath:"#/properties/posts/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
var valid2 = _errs21 === errors;
if(!valid2){
break;
}
}
}
}
var valid0 = _errs18 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.refs !== undefined){
let data15 = data.refs;
const _errs44 = errors;
if((!(Array.isArray(data15))) && (data15 !== null)){
validate10.errors = [{instancePath:instancePath+"/refs",schemaPath:"#/properties/refs/type",keyword:"type",params:{type: "array"},message:"must be array"}];
return false;
}
if(errors === _errs44){
if(Array.isArray(data15)){
var valid6 = true;
const len2 = data15.length;
for(let i3=0; i3<len2; i3++){
let data16 = data15[i3];
const _errs47 = errors;
if(errors === _errs47){
if(data16 && typeof data16 == "object" && !Array.isArray(data16)){
let missing3;
if(((data16.href === undefined) && (missing3 = "href")) || ((data16.count === undefined) && (missing3 = "count"))){
validate10.errors = [{instancePath:instancePath+"/refs/" + i3,schemaPath:"#/properties/refs/items/required",keyword:"required",params:{missingProperty: missing3},message:"must have required property '"+missing3+"'"}];
return false;
}
else {
if(data16.href !== undefined){
let data17 = data16.href;
const _errs49 = errors;
if(errors === _errs49){
if(errors === _errs49){
if(typeof data17 === "string"){
if(func2(data17) > 2000){
validate10.errors = [{instancePath:instancePath+"/refs/" + i3+"/href",schemaPath:"#/properties/refs/items/properties/href/maxLength",keyword:"maxLength",params:{limit: 2000},message:"must NOT have more than 2000 characters"}];
return false;
}
else {
if(func2(data17) < 1){
validate10.errors = [{instancePath:instancePath+"/refs/" + i3+"/href",schemaPath:"#/properties/refs/items/properties/href/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];
return false;
}
else {
if(!(formats2.test(data17))){
validate10.errors = [{instancePath:instancePath+"/refs/" + i3+"/href",schemaPath:"#/properties/refs/items/properties/href/format",keyword:"format",params:{format: "uri-reference"},message:"must match format \""+"uri-reference"+"\""}];
return false;
}
}
}
}
else {
validate10.errors = [{instancePath:instancePath+"/refs/" + i3+"/href",schemaPath:"#/properties/refs/items/properties/href/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
}
var valid7 = _errs49 === errors;
}
else {
var valid7 = true;
}
if(valid7){
if(data16.count !== undefined){
let data18 = data16.count;
const _errs52 = errors;
if(!((typeof data18 == "number") && (isFinite(data18)))){
validate10.errors = [{instancePath:instancePath+"/refs/" + i3+"/count",schemaPath:"#/properties/refs/items/properties/count/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
var valid7 = _errs52 === errors;
}
else {
var valid7 = true;
}
}
}
}
else {
validate10.errors = [{instancePath:instancePath+"/refs/" + i3,schemaPath:"#/properties/refs/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
var valid6 = _errs47 === errors;
if(!valid6){
break;
}
}
}
}
var valid0 = _errs44 === errors;
}
else {
var valid0 = true;
}
}
}
}
}
}
else {
validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
validate10.errors = vErrors;
return errors === 0;
}

export const AnnouncingPostsJSON = validate11;
const schema12 = {"$id":"AnnouncingPostsJSON","$schema":"http://json-schema.org/draft-07/schema#","type":"array","items":{"type":"object","required":["published"],"properties":{"published":{"type":"string","format":"date-time","minLength":1,"maxLength":30,"nullable":false},"title":{"type":"string","nullable":true,"maxLength":100},"body":{"type":"string","nullable":true,"maxLength":1000},"img":{"type":"string","nullable":true,"maxLength":2000,"format":"uri-reference"},"imgs":{"type":"array","nullable":true,"maxItems":10,"uniqueItems":true,"items":{"type":"string","nullable":false,"minLength":1,"maxLength":2000,"format":"uri-reference"}},"link":{"type":"string","nullable":true,"maxLength":2000,"format":"uri-reference"}}}};

function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="AnnouncingPostsJSON" */;
let vErrors = null;
let errors = 0;
if(errors === 0){
if(Array.isArray(data)){
var valid0 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
if(errors === _errs1){
if(data0 && typeof data0 == "object" && !Array.isArray(data0)){
let missing0;
if((data0.published === undefined) && (missing0 = "published")){
validate11.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/items/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
return false;
}
else {
if(data0.published !== undefined){
let data1 = data0.published;
const _errs3 = errors;
if(errors === _errs3){
if(errors === _errs3){
if(typeof data1 === "string"){
if(func2(data1) > 30){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/published",schemaPath:"#/items/properties/published/maxLength",keyword:"maxLength",params:{limit: 30},message:"must NOT have more than 30 characters"}];
return false;
}
else {
if(func2(data1) < 1){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/published",schemaPath:"#/items/properties/published/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];
return false;
}
else {
if(!(formats0.validate(data1))){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/published",schemaPath:"#/items/properties/published/format",keyword:"format",params:{format: "date-time"},message:"must match format \""+"date-time"+"\""}];
return false;
}
}
}
}
else {
validate11.errors = [{instancePath:instancePath+"/" + i0+"/published",schemaPath:"#/items/properties/published/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
}
var valid1 = _errs3 === errors;
}
else {
var valid1 = true;
}
if(valid1){
if(data0.title !== undefined){
let data2 = data0.title;
const _errs6 = errors;
if((typeof data2 !== "string") && (data2 !== null)){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/title",schemaPath:"#/items/properties/title/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs6){
if(typeof data2 === "string"){
if(func2(data2) > 100){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/title",schemaPath:"#/items/properties/title/maxLength",keyword:"maxLength",params:{limit: 100},message:"must NOT have more than 100 characters"}];
return false;
}
}
}
var valid1 = _errs6 === errors;
}
else {
var valid1 = true;
}
if(valid1){
if(data0.body !== undefined){
let data3 = data0.body;
const _errs9 = errors;
if((typeof data3 !== "string") && (data3 !== null)){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/body",schemaPath:"#/items/properties/body/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs9){
if(typeof data3 === "string"){
if(func2(data3) > 1000){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/body",schemaPath:"#/items/properties/body/maxLength",keyword:"maxLength",params:{limit: 1000},message:"must NOT have more than 1000 characters"}];
return false;
}
}
}
var valid1 = _errs9 === errors;
}
else {
var valid1 = true;
}
if(valid1){
if(data0.img !== undefined){
let data4 = data0.img;
const _errs12 = errors;
if((typeof data4 !== "string") && (data4 !== null)){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/img",schemaPath:"#/items/properties/img/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs12){
if(errors === _errs12){
if(typeof data4 === "string"){
if(func2(data4) > 2000){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/img",schemaPath:"#/items/properties/img/maxLength",keyword:"maxLength",params:{limit: 2000},message:"must NOT have more than 2000 characters"}];
return false;
}
else {
if(!(formats2.test(data4))){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/img",schemaPath:"#/items/properties/img/format",keyword:"format",params:{format: "uri-reference"},message:"must match format \""+"uri-reference"+"\""}];
return false;
}
}
}
}
}
var valid1 = _errs12 === errors;
}
else {
var valid1 = true;
}
if(valid1){
if(data0.imgs !== undefined){
let data5 = data0.imgs;
const _errs15 = errors;
if((!(Array.isArray(data5))) && (data5 !== null)){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/imgs",schemaPath:"#/items/properties/imgs/type",keyword:"type",params:{type: "array"},message:"must be array"}];
return false;
}
if(errors === _errs15){
if(Array.isArray(data5)){
if(data5.length > 10){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/imgs",schemaPath:"#/items/properties/imgs/maxItems",keyword:"maxItems",params:{limit: 10},message:"must NOT have more than 10 items"}];
return false;
}
else {
var valid2 = true;
const len1 = data5.length;
for(let i1=0; i1<len1; i1++){
let data6 = data5[i1];
const _errs18 = errors;
if(errors === _errs18){
if(errors === _errs18){
if(typeof data6 === "string"){
if(func2(data6) > 2000){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/imgs/" + i1,schemaPath:"#/items/properties/imgs/items/maxLength",keyword:"maxLength",params:{limit: 2000},message:"must NOT have more than 2000 characters"}];
return false;
}
else {
if(func2(data6) < 1){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/imgs/" + i1,schemaPath:"#/items/properties/imgs/items/minLength",keyword:"minLength",params:{limit: 1},message:"must NOT have fewer than 1 characters"}];
return false;
}
else {
if(!(formats2.test(data6))){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/imgs/" + i1,schemaPath:"#/items/properties/imgs/items/format",keyword:"format",params:{format: "uri-reference"},message:"must match format \""+"uri-reference"+"\""}];
return false;
}
}
}
}
else {
validate11.errors = [{instancePath:instancePath+"/" + i0+"/imgs/" + i1,schemaPath:"#/items/properties/imgs/items/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
}
var valid2 = _errs18 === errors;
if(!valid2){
break;
}
}
if(valid2){
let i2 = data5.length;
let j0;
if(i2 > 1){
const indices0 = {};
for(;i2--;){
let item0 = data5[i2];
if(typeof item0 !== "string"){
continue;
}
if(typeof indices0[item0] == "number"){
j0 = indices0[item0];
validate11.errors = [{instancePath:instancePath+"/" + i0+"/imgs",schemaPath:"#/items/properties/imgs/uniqueItems",keyword:"uniqueItems",params:{i: i2, j: j0},message:"must NOT have duplicate items (items ## "+j0+" and "+i2+" are identical)"}];
return false;
break;
}
indices0[item0] = i2;
}
}
}
}
}
}
var valid1 = _errs15 === errors;
}
else {
var valid1 = true;
}
if(valid1){
if(data0.link !== undefined){
let data7 = data0.link;
const _errs21 = errors;
if((typeof data7 !== "string") && (data7 !== null)){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/link",schemaPath:"#/items/properties/link/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
if(errors === _errs21){
if(errors === _errs21){
if(typeof data7 === "string"){
if(func2(data7) > 2000){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/link",schemaPath:"#/items/properties/link/maxLength",keyword:"maxLength",params:{limit: 2000},message:"must NOT have more than 2000 characters"}];
return false;
}
else {
if(!(formats2.test(data7))){
validate11.errors = [{instancePath:instancePath+"/" + i0+"/link",schemaPath:"#/items/properties/link/format",keyword:"format",params:{format: "uri-reference"},message:"must match format \""+"uri-reference"+"\""}];
return false;
}
}
}
}
}
var valid1 = _errs21 === errors;
}
else {
var valid1 = true;
}
}
}
}
}
}
}
}
else {
validate11.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"#/items/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
var valid0 = _errs1 === errors;
if(!valid0){
break;
}
}
}
else {
validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];
return false;
}
}
validate11.errors = vErrors;
return errors === 0;
}
