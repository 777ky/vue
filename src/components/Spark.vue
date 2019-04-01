<template>
  <div id="spark" ref="spark">
    <canvas id="canvas" :width="width" :height="height"></canvas>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Stats from 'stats-js/build/stats.js'
export default {
  name: 'Spark',
  data() {
    return {
      confetti:null,
      width:"1000px",
      height:"1000px",
      images:null,
      stage:null,
      stats:null,
    }
  },
  props: {
    time: String,
  },
  created(){
  },
  beforeDestroy(){

    if(this.confetti){
      this.confetti.stop();
    }

    window.removeEventListener('load', this.handleResize)
    window.removeEventListener('resize', this.handleResize)
  },
  mounted(){

    if (this.timer) {
      clearInterval(this.timer);
    }
    window.addEventListener('load', this.handleResize)
    window.addEventListener('resize', this.handleResize)

    this.Paper = class Paper extends createjs.Container{
      constructor(sprite, scale) {
        super()

        this.container;
        this.content;

        this.init(sprite, scale)
      }
      init(sprite, scale){

        this.container = new createjs.Container();
        this.addChild(this.container);
        this.container.scaleX = this.container.scaleY = scale;
        this.content = sprite;
        this.content.currentAnimationFrame = Math.random()*18 >> 0;
        this.container.addChild(this.content);
        this.mouseChildren = false;
      }
    }


    this.Confetti = class Confetti extends createjs.Container{
      constructor(w, h, o, s, u, self) {
        super()
        this.self = self
        this.bw = 800;
        this.bh = 600;
        this.offset = 60;
        this.scales = [1];
        this.unit;
        this.sprites;
        this.ids;

        this.timer;
        this.interval = 50;
        this.time = 300;
        this.duration = 2400;

        this.init(w, h, o, s, u)

      }

      init(w, h, o, s, u){
        this.bw = w;
        this.bh = h;
        this.offset = o;
        if (s) this.scales = s;
        this.unit = u;

        const data = {
          "images": ["papers.png"],
          "frames": [
            [98, 354, 30, 30], [194, 322, 30, 30], [162, 322, 30, 30], [130, 322, 30, 30], [98, 322, 30, 30], [66, 450, 30, 30], [66, 418, 30, 30], [66, 386, 30, 30], [66, 354, 30, 30], [66, 322, 30, 30], [66, 354, 30, 30], [66, 386, 30, 30], [66, 418, 30, 30], [66, 450, 30, 30], [98, 322, 30, 30], [130, 322, 30, 30], [162, 322, 30, 30], [194, 322, 30, 30],
            [194, 290, 30, 30], [162, 290, 30, 30], [130, 290, 30, 30], [98, 290, 30, 30], [66, 290, 30, 30], [34, 450, 30, 30], [34, 418, 30, 30], [34, 386, 30, 30], [34, 354, 30, 30], [34, 322, 30, 30], [34, 354, 30, 30], [34, 386, 30, 30], [34, 418, 30, 30], [34, 450, 30, 30], [66, 290, 30, 30], [98, 290, 30, 30], [130, 290, 30, 30], [162, 290, 30, 30],
            [34, 290, 30, 30], [194, 258, 30, 30], [162, 258, 30, 30], [130, 258, 30, 30], [98, 258, 30, 30], [66, 258, 30, 30], [34, 258, 30, 30], [2, 450, 30, 30], [2, 418, 30, 30], [2, 386, 30, 30], [2, 418, 30, 30], [2, 450, 30, 30], [34, 258, 30, 30], [66, 258, 30, 30], [98, 258, 30, 30], [130, 258, 30, 30], [162, 258, 30, 30], [194, 258, 30, 30],
            [2, 354, 30, 30], [2, 322, 30, 30], [2, 290, 30, 30], [2, 258, 30, 30], [194, 226, 30, 30], [162, 226, 30, 30], [130, 226, 30, 30], [98, 226, 30, 30], [66, 226, 30, 30], [34, 226, 30, 30], [66, 226, 30, 30], [98, 226, 30, 30], [130, 226, 30, 30], [162, 226, 30, 30], [194, 226, 30, 30], [2, 258, 30, 30], [2, 290, 30, 30], [2, 322, 30, 30],
            [2, 226, 30, 30], [194, 194, 30, 30], [162, 194, 30, 30], [130, 194, 30, 30], [98, 194, 30, 30], [66, 194, 30, 30], [34, 194, 30, 30], [2, 194, 30, 30], [194, 162, 30, 30], [162, 162, 30, 30], [194, 162, 30, 30], [2, 194, 30, 30], [34, 194, 30, 30], [66, 194, 30, 30], [98, 194, 30, 30], [130, 194, 30, 30], [162, 194, 30, 30], [194, 194, 30, 30],
            [130, 162, 30, 30], [98, 162, 30, 30], [66, 162, 30, 30], [34, 162, 30, 30], [2, 162, 30, 30], [194, 130, 30, 30], [162, 130, 30, 30], [130, 130, 30, 30], [98, 130, 30, 30], [66, 130, 30, 30], [98, 130, 30, 30], [130, 130, 30, 30], [162, 130, 30, 30], [194, 130, 30, 30], [2, 162, 30, 30], [34, 162, 30, 30], [66, 162, 30, 30], [98, 162, 30, 30],
            [34, 130, 30, 30], [2, 130, 30, 30], [194, 98, 30, 30], [162, 98, 30, 30], [130, 98, 30, 30], [98, 98, 30, 30], [66, 98, 30, 30], [34, 98, 30, 30], [2, 98, 30, 30], [194, 66, 30, 30], [2, 98, 30, 30], [34, 98, 30, 30], [66, 98, 30, 30], [98, 98, 30, 30], [130, 98, 30, 30], [162, 98, 30, 30], [194, 98, 30, 30], [2, 130, 30, 30],
            [162, 66, 30, 30], [130, 66, 30, 30], [98, 66, 30, 30], [66, 66, 30, 30], [34, 66, 30, 30], [2, 66, 30, 30], [194, 34, 30, 30], [162, 34, 30, 30], [130, 34, 30, 30], [98, 34, 30, 30], [130, 34, 30, 30], [162, 34, 30, 30], [194, 34, 30, 30], [2, 66, 30, 30], [34, 66, 30, 30], [66, 66, 30, 30], [98, 66, 30, 30], [130, 66, 30, 30],
            [66, 34, 30, 30], [34, 34, 30, 30], [2, 34, 30, 30], [194, 2, 30, 30], [162, 2, 30, 30], [130, 2, 30, 30], [98, 2, 30, 30], [66, 2, 30, 30], [34, 2, 30, 30], [2, 2, 30, 30], [34, 2, 30, 30], [66, 2, 30, 30], [98, 2, 30, 30], [130, 2, 30, 30], [162, 2, 30, 30], [194, 2, 30, 30], [2, 34, 30, 30], [34, 34, 30, 30]
          ],
          "animations": {
            "paper0":[0, 17], "paper1":[18, 35], "paper2":[36, 53], "paper3":[54, 71], "paper4":[72, 89],
            "paper5":[90, 107], "paper6":[108, 125], "paper7":[126, 143], "paper8":[144, 161]
          }
        };
        const spritesheet = new createjs.SpriteSheet(data);

        this.sprites = [];
        for (let n = 0; n < 9; n++) {
          const sprite = new createjs.Sprite(spritesheet, "paper" + n);
          sprite.regX = 10;
          sprite.regY = 10;
          this.sprites.push(sprite);
        }
        this.ids = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8];
        this.mouseChildren = false;

      }

      start(){
        this.timer = setInterval(createjs.proxy(this.create, this), this.interval);
      }

      stop(){
        console.log('STOP')
        if (this.timer) {
          clearInterval(this.timer);
        }
      }

      create(){
        for (let n = 0; n < this.unit; n++) {
          const id = this.ids[Math.random()*this.ids.length >> 0];
          const sprite = this.sprites[id].clone();
          const scale = this.scales[Math.random()*this.scales.length >> 0];
          const paper = new this.self.Paper(sprite, scale);

          // ここでshapeを入れることもできる
          // let shape = new createjs.Shape();
          // shape.graphics.beginFill("DarkRed").drawCircle(0, 0, 3);
          // this.fall(shape);
          this.fall(paper);
        }

      }

      fall(paper){
        let ta;
        const px = (Math.random() - 0.5)*this.bw;
        const a = Math.random()*360;
        if (Math.random() < 0.5) {
          ta = a - 360;
        } else {
          ta = a + 360;
        }

        paper.x = px;
        paper.y = - 25;
        paper.rotation = a;
        this.addChild(paper);

        createjs.Tween.get(paper, {override: false})
          .to({y: this.bh - 25}, this.duration, createjs.Ease.sineIn)
          .call(createjs.proxy(this.remove, this), [paper]);

        createjs.Tween.get(paper, {override: false})
          .wait(this.time*7)
          .to({alpha: 0}, this.time, createjs.Ease.linear);

        createjs.Tween.get(paper, {override: false})
          .to({rotation: ta}, this.duration, createjs.Ease.quadOut);

      }

      remove(paper){
        this.removeChild(paper);
        paper = null;
      }

    }

    this.init()

  },
  methods:{
    handleResize: function() {
      this.width = window.innerWidth + "px";
      this.height = window.innerHeight + "px";
    },

    init(){

      this.stats = new Stats()
      this.stats.setMode(0);
      this.stats.domElement.style.position = 'fixed';
      this.stats.domElement.style.right = '0px';
      this.stats.domElement.style.top = '0px';
      // document.body.appendChild(this.stats.domElement);

      const canvas = document.getElementById('canvas');
      // うまく値が取れないので保留
      // canvas.style.width ='100%';
      // canvas.style.height='100%';
      // canvas.width  = canvas.offsetWidth;
      // canvas.height = canvas.offsetHeight;
      // canvas.width  = window.innerWidth;
      // canvas.height = window.innerHeight;
      this.stage = new createjs.Stage(canvas);
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
    complete(event){
      event.target.removeEventListener("fileload", this.fileload);
      event.target.removeEventListener("complete", this.complete);
      this.initialize();
    },
    initialize(){
      this.confetti = new this.Confetti(800, 600, 60, [0.1, 0.2, 0.3], 3, this)
      this.stage.addChild(this.confetti);
      this.confetti.x = 400;
      this.confetti.start();

      // const confetti = new this.Confetti(800, 600, 60, [0.1, 0.2, 0.3], 3, this)
      // this.stage.addChild(confetti);
      // confetti.x = 400;
      // confetti.start();

    },
    update(event){
      this.stage.update();
      this.stats.update();
    },
    background(){
      const sky = new createjs.Shape();
      this.stage.addChild(sky);
      // sky.graphics.beginLinearGradientFill(["#ffffff", "#cccccc"], [0, 1], 0, 0, 0, 540);
      // sky.graphics.drawRect(0, 0, 800, 540);
    },
  },
  computed:{
  },
}




</script>

<style scoped>
#spark{
  position:fixed;
  top:0;
  left:0;
  display:block;
  width:100%;
  height:100%;
}
#canvas{
}
</style>
