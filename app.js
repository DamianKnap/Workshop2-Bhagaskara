/**
 * Created by Damian on 2015-10-22.
 */
$(function(){
   var Application= function(){
       function init(){
           console.log("init");
       }
       function scrollPage(){
           console.log("scrolling")
       }
       return {init:init, scrollPage:scrollPage}
   }
});