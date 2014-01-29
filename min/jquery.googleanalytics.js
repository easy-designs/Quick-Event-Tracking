/*
 Google Analytics Event Tracking jQuery Plugin

 Copyright (C) 2011 by Building Blocks UK

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 Author: Robert Stevenson-Leggett
 Version: 0.92

 Handles event tracking through the use of data attributes

 Version history:

 0.1 - Initial version
 0.2 - Support for direct calling
 0.3 - Bug fixes
 0.4 - Added comments and push to github
 0.5 - Add gaTrackEvent
 0.6 - Bug fixes
 0.7 - Added non interactive option
 0.8 - Bug fix
 0.9 - Added more tests
 0.91 - Bug fix
 0.92 - Bug fix for useLabel

*/
(function(b){b.extend({ga:{trackEvent:function(c){var d={category:"Unspecified",action:"Unspecified",nonInteractive:false};c=b.extend(d,c);_gaq.push(["_trackEvent",c.category,c.action,c.label,c.value,c.nonInteractive])}}});var a={categoryAttribute:"data-ga-category",actionAttribute:"data-ga-action",labelAttribute:"data-ga-label",valueAttribute:"data-ga-value",noninteractiveAttribute:"data-ga-noninteractive",useLabel:false,useValue:false,useEvent:false,event:"click",valid:function(c,d){return true},complete:function(c,d){},category:"Unspecified",action:"Unspecified",label:"",value:"",nonInteractive:false};b.fn.gaTrackEvent=function(c){c=b.extend(a,c);return this.each(function(){var d=b(this);d.attr(c.categoryAttribute,c.category);d.attr(c.actionAttribute,c.action);if(c.useLabel===true&&c.label!==""){d.attr(c.labelAttribute,c.label)}if(c.useValue===true&&c.value!==""){d.attr(c.valueAttribute,c.value)}if(c.nonInteractive===true){d.attr(c.noninteractiveAttribute,"true")}d.gaTrackEventUnobtrusive(c)})};b.fn.gaTrackEventUnobtrusive=function(c){c=b.extend(a,c);return this.each(function(){var f=b(this);var d=function(){var j=f.attr(c.categoryAttribute);var l=f.attr(c.actionAttribute);var i=f.attr(c.labelAttribute);var k=f.attr(c.valueAttribute);var g=(f.attr(c.noninteractiveAttribute)==="true");var h={category:j,action:l,nonInteractive:g};if(c.useLabel&&c.useValue){h.label=i;h.value=k}else{if(c.useLabel){h.label=i}}b.ga.trackEvent(h)};if(c.useEvent==true){var e=function(g){if(c.valid(f,g)===true){d();c.complete(f,g)}};f.bind(c.event,e)}else{d()}})}})(jQuery);