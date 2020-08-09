var head = new Vue({
  el: '#head',
  data: {
    title: "Marion Delval"
  }
})

var header = new Vue({
  el: '#header',
  data: {
    div_geader: "div_geader",
    logo1: 'src/img/header/logo1.png',
    header1: 'header1',
    header2: 'header2',
    header3: 'header3',
    header4: 'header4',
    logo2: 'src/img/header/logo2.png',
    logo2_class: "logo2_class",

  }
})

var section = new Vue({
  el: '#section',
  data: {
    section_source: "src/img/section/photoDefile1.png",
    img_section: "img_section",
    img_section_value: false,
    img_section_class: "img_section_class_1",
    img_section_text: "Colorez vos souvenirs de voyage",
    img_section_vide: "img_section_vide",
    cercl_section1_parrent: "cercl_section1_parrent",
    cercl_section1: "cercl_section_color1",
    cercl_section2: "cercl_section_color2",
    cercl_section3: "cercl_section_color2",
    message: ""
  },
  methods: {

    cercl_section_all: function () {

      this.cercl_section1 = "cercl_section_color2";
      this.cercl_section2 = "cercl_section_color2";
      this.cercl_section3 = "cercl_section_color2";

    },
    cercl_section1_1: function () {
      this.img_section = "img_section";
      this.img_section_value = true;
      this.cercl_section_all();
      this.cercl_section1 = "cercl_section_color1";

    },
    cercl_section2_2: function () {
      this.img_section = "img_section2";
      this.img_section_value = true;
      this.cercl_section_all();
      this.cercl_section2 = "cercl_section_color1";
    },
    cercl_section3_3: function () {
      this.img_section = "img_section3";
      this.img_section_value = true;
      this.cercl_section_all();
      this.cercl_section3 = "cercl_section_color1";
    },
    callFunction: function () {
      var v = this;
      setInterval(function () {
        console.log(v.img_section);
        switch (v.img_section) {
          case "img_section":

            if (v.img_section_value == false) {
              v.img_section = "img_section2";
              v.cercl_section_all();
              v.cercl_section2 = "cercl_section_color1";
            }
            break;
          case "img_section2":
            if (v.img_section_value == false) {
              v.img_section = "img_section3";
              v.cercl_section_all();

              v.cercl_section3 = "cercl_section_color1";
            }
            break;
          case "img_section3":
            if (v.img_section_value == false) {
              v.img_section = "img_section";
              v.cercl_section_all();

              v.cercl_section1 = "cercl_section_color1";
            }
            break;
          default:

        }

        v.img_section_value = false;
      }, 4000);

    }
  },

  mounted() {
    this.callFunction();
  }

})

var footer = new Vue({
  el: '#footer',
  data: {

  }
})