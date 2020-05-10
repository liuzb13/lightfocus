// import { Component, Vue } from 'vue-property-decorator';
// import '../service/scrawlCore'


// @Component({
//   methods: {

//   }
// })
// export default class App extends Vue {
//   public canvas;
//   public ctx; w; h; m_w; m2_w; m_x; m_y; num;
//   public dif; diy; a; b;
//   public videoShowTag = false;
//   public canvasTag = true;
//   mounted() {
//     this.canvas = this.$refs.canvas;
//     // console.log(this.canvas);
//     this.ctx = this.canvas.getContext("2d");

//     this.w = this.canvas.width = document.body.clientWidth;
//     this.h = this.canvas.height = document.body.clientHeight;
//     this.m_w = 0,
//       this.m2_w = 0;
//     this.m_x = 0,
//       this.m_y = 0;
//     this.num = 0;
//     this.renderf();


//     window.onresize = ()=> {
//       this.w = this.canvas.width = document.body.clientWidth;
//       this.h = this.canvas.height = document.body.clientHeight;
//     }
//   }

//   renderf() {
//     this.ctx.clearRect(0, 0, this.w, this.h);
//     this.dif = this.m_x
//     this.diy = this.m_y
//     this.a =255;
//     this.b = 255;
//     this.ctx.fillStyle = "rgba(" + this.a + "," + this.a + "," + this.a + ",0.1)";
//     this.ctx.beginPath();
//     this.ctx.shadowColor = "rgb(" + this.b + "," + this.b + "," + this.b + ")";
//     this.ctx.shadowBlur = (1 / 2);
//     this.ctx.shadowOffsetX = 1;
//     this.ctx.shadowOffsetY = 1;
//     this.ctx.arc(this.w / 2 + this.dif, this.h / 2 + this.diy, 180, 0, Math.PI * 2);
//     this.ctx.fill();
//     requestAnimationFrame(this.renderf);
//   }



//   mouseEvent(e) {
//     this.m_x = e.clientX - (this.w / 2);
//     this.m_y = e.clientY - (this.h / 2);
//   }

//   suspend() {
//     let vide = <HTMLVideoElement>this.$refs.videos;
//     // vide.play();
//     this.videoShowTag = true;
//     if (vide.paused) {
//       vide.play();
//       console.log(this.ctx.arc)
//       requestAnimationFrame(this.renderf);
//       this.canvasTag = false;
//     } else if (vide.play()) {
//       vide.pause();
//     }




// }
// }





import { Component, Vue } from 'vue-property-decorator';
import '../service/scrawlCore'


@Component({
  methods: {

  }
})
export default class App extends Vue {
  public canvas;
  public ctx; w; h; m_w; m2_w; m_x; m_y; num;
  public dif; diy; a; b;
  public videoShowTag = false;
  public canvasTag = true;
  public circleTag = 180;
  public timer;
  public backTag = false;
  public playTag = true;
  mounted() {
    this.canvas = this.$refs.canvas;
    // console.log(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.w = this.canvas.width = document.body.clientWidth;
    this.h = this.canvas.height = document.body.clientHeight;
    this.m_w = 0,
      this.m2_w = 0;
    this.m_x = 0.4*this.w*0.5,
      this.m_y = -0.5*this.h*0.5;
    this.num = 0;
    this.renderf();


    window.onresize = () => {
      this.w = this.canvas.width = document.body.clientWidth;
      this.h = this.canvas.height = document.body.clientHeight;
    }


    window.addEventListener('click', () => {
      this.openURL();
    })


    // this.changeVideoSite();
  }

  // 初始化视频位置
  changeVideoSite(){
    let w = document.body.clientWidth;
    let h = document.body.clientHeight;
    // let dom = <HTMLElement>this.$refs.videos;
    // dom.style.top = -200+'px';
    // dom.style.left = -w/2 +'px';
    // window.getComputedStyle(this.$refs.element).height

    this.$nextTick(()=>{
      // dom = <HTMLElement>this.$refs.videos;
      console.log(window.getComputedStyle(<HTMLElement>this.$refs.videos).width);
    })
  }

//   this.$nextTick(() => {
//     // 获取元素样式值 （存在单位）
//     let height = window.getComputedStyle(this.$refs.preview_div).height;
//     let height1 = window.getComputedStyle(this.$refs.preview_img).height;
//     console.log('height',height,height1)
//  })
 


  public openURL() {
    this.$CowTransferWallpaper.sendCommand('open', 'https://cowsupport.cowtransfer.com/article/bdce3f8d-7300-48de-9bc8-7f8989697978');
  }
  renderf() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.dif = this.m_x
    this.diy = this.m_y
    this.a = 255;
    this.b = 255;
    this.ctx.fillStyle = "rgba(" + this.a + "," + this.a + "," + this.a + ")";



    // 圆形区域
    this.ctx.beginPath();
    this.ctx.shadowColor = "rgb(" + this.b + "," + this.b + "," + this.b + ")";
    // this.ctx.shadowBlur = (1 / 2);
    // this.ctx.shadowOffsetX = 1;
    // this.ctx.shadowOffsetY = 1;
    this.ctx.arc(this.w / 2 + this.dif, this.h / 2 + this.diy, this.circleTag, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.globalCompositeOperation = 'source-out';

    // 背景灰色区域

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.w, this.h);


    requestAnimationFrame(this.renderf);
  }



  mouseEvent(e) {
    this.m_x = e.clientX - (this.w / 2);
    this.m_y = e.clientY - (this.h / 2);
  }

  suspend() {
    let vide = <HTMLVideoElement>this.$refs.videos;
    this.videoShowTag = true;
    this.$CowTransferWallpaper.sendCommand('uploaderHidden' as any,true);
    this.timer = setInterval(() => {
      this.circleTag = this.circleTag + 60;
      if (this.circleTag > 1000) {
        // this.canvasTag = false;
        this.circleTag = 2000;
        clearInterval(this.timer);
      }
    }, 30)
    vide.load();
    if (vide.paused) {
      vide.play();
      requestAnimationFrame(this.renderf);
      this.backTag = true;
      this.playTag = false;
    } else if (vide.play()) {
      vide.pause();
    }
  }


  replay() {
    // this.canvasTag = true;
    this.backTag = false;
    this.playTag = true;
    this.videoShowTag = false;
    let vide = <HTMLVideoElement>this.$refs.videos;
    vide.pause();
    this.circleTag = 180
    this.$CowTransferWallpaper.sendCommand('uploaderHidden' as any,false);
   
  }
}
