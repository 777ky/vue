<template>
  <canvas id="canvas"></canvas>
</template>

<script>
import { mapGetters } from 'vuex'
import Stats from 'stats-js/build/stats.js'

export default {
  name: 'Spark',
  data() {
    return {
      images:null,
      stage:null,
      stats:null,
    }
  },
  props: {
    time: String,
  },
  mounted(){

    require('static/Confetti.js')

    this.init()

    // let stage = new createjs.Stage("canvas")
    // let shape = new createjs.Shape();
    // shape.graphics.beginFill("DarkRed").drawCircle(0, 0, 10);
    // shape.y = 10;
    // stage.addChild(shape);
    // this.$tweenjs.Tween.get(shape).to({x: 100}, 2000);
    // this.$tweenjs.Ticker.addEventListener("tick", handleTick);
    // function handleTick() {
    //   stage.update();
    // }

  },
  methods:{

    init(){
      this.stats = new Stats()
      this.stats.setMode(0);
      this.stats.domElement.style.position = "fixed";
      this.stats.domElement.style.right = "0px";
      this.stats.domElement.style.top = "0px";
      document.body.appendChild(this.stats.domElement);
      const canvas = document.getElementById("canvas");
      this.stage = new createjs.Stage("canvas");
      this.background();

      this.images = this.images||{};
      const loader = new createjs.LoadQueue(false);
      loader.addEventListener("fileload", this.fileload);
      loader.addEventListener("complete", this.complete);
      loader.loadFile({src: "papers.png", id: "papers"});


      createjs.Ticker.framerate = 30;
      createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
      if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(this.stage);
      }
      this.stage.enableMouseOver(10);
      this.stage.update();
      createjs.Ticker.addEventListener("tick", this.update);

    },
    fileload(event){
      if (event.item.type == "image") {
        this.images[event.item.id] = event.result;
      }
    },
    complete(event) {
      event.target.removeEventListener("fileload", this.fileload);
      event.target.removeEventListener("complete", this.complete);

      this.initialize();
    },
    initialize() {
      const confetti = new Confetti(800, 600, 60, [0.8, 0.6, 0.4], 3);
      this.stage.addChild(confetti);
      confetti.x = 400;
      confetti.start();
    },
    update(event) {
      this.stage.update();
      this.stats.update();
    },

    background() {

      // サンプル
      // let stage = new this.cjs.Stage("canvas")
      // let shape = new this.cjs.Shape();
      // shape.graphics.beginFill("DarkRed").drawCircle(0, 0, 10);
      // shape.y = 10;
      // stage.addChild(shape);
      // stage.update();
      // サンプル


      const sky = new createjs.Shape();
      this.stage.addChild(sky);
      sky.graphics.beginLinearGradientFill(["#ffffff", "#cccccc"], [0, 1], 0, 0, 0, 540);
      sky.graphics.drawRect(0, 0, 800, 540);

      const ground = new createjs.Shape();
      this.stage.addChild(ground);
      ground.graphics.beginLinearGradientFill(["#99CC33", "#7EB133"], [0, 1], 0, 540, 0, 60);
      ground.graphics.drawRect(0, 540, 800, 60);

      // const basic = new createjs.Text("HTML5 / CreateJS [1.0.0]", "14px Myriad Pro", "#000000");
      // this.stage.addChild(basic);
      // basic.textAlign = "left";
      // basic.textBaseline = "bottom";
      // basic.x = 10;
      // basic.y = canvas.width - 3;
      // basic.alpha = 0.6;

      // const title = new createjs.Text("confetti", "24px Myriad Pro", "#000000");
      // this.stage.addChild(title);
      // title.textAlign = "center";
      // title.textBaseline = "top";
      // title.x = canvas.width/2;
      // title.y = 65;
      // title.alpha = 0.6;

      // const subtitle = new createjs.Text("CreateJS [1.0.0]", "20px Myriad Pro", "#000000");
      // this.stage.addChild(subtitle);
      // subtitle.textAlign = "center";
      // subtitle.textBaseline = "top";
      // subtitle.x = canvas.width/2;
      // subtitle.y = 110;
      // subtitle.alpha = 0.6;

      // const publish = new createjs.Text("authoring: Sublime Text 2 + Flash CC", "14px Myriad Pro", "#000000");
      // this.stage.addChild(publish);
      // publish.textAlign = "right";
      // publish.textBaseline = "bottom";
      // publish.x = canvas.width - 10;
      // publish.y = canvas.width - 3;
      // publish.alpha = 0.6;

    }

  },
  computed:{
  }
}
</script>

<style scoped>
#spark{
  display:block;
  width:100%;
  border:1px solid #ccc;
}
#canvas{
  display:block;
  width:800px;
  margin-top:50px;
  margin-left:auto;
  margin-right:auto;
  padding-left:0;
  padding-right:0;
}
</style>
