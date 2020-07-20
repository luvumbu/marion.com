var head = new Vue({
  el: '#head',
  data: {    
    title:"Marion Delval"
  }
})

var header = new Vue({
  el: '#header',
  data: {
      div_geader:"div_geader",
      logo1:'src/img/header/logo1.png',
      header1:'header1',
      header2:'header2',
      header3:'header3',
      header4:'header4',
      logo2:'src/img/header/logo2.png',
      logo2_class:"logo2_class",

  }
})

var section = new Vue({
  el: '#section',
  data: {
    section_source:"src/img/section/photoDefile1.png",
    img_section:"img_section",
    img_section_class:"img_section_class_1",
    img_section_text:"Colorez vos souvenirs de voyage",
    img_section_vide:"img_section_vide",
    cercl_section1_parrent:"cercl_section1_parrent",
    cercl_section1:"cercl_section1",
    cercl_section2:"cercl_section2",
    cercl_section3:"cercl_section3"  ,
    message:""  
  } , 
  methods:{
    ok:function() {
       this.img_section="img_section2";
    } ,
    callFunction: function () {
      var v = this;
      setInterval(function () {
          
         console.log(v.img_section);
         if(v.img_section=="img_section"){
          v.img_section = "img_section2";
         }
         else {
          v.img_section = "img_section";
         }
      }, 2000);
      
  }
  },
  
    mounted () {
      this.callFunction();
    }
  
})

var footer = new Vue({
  el: '#footer',
  data: {
    
  }
})



 
