<template>
    <ion-app>
        <ion-header>
            <ion-toolbar>
                <div>
                    <ion-icon style="display: flex;margin-top: 4px;font-size: 25px;" name="arrow-back" @click="go('/chicster1')"></ion-icon>
                </div>
                <div style="margin-top: -30px;margin-left: 364px;">
                    <img src="./../assets/clogo.png">
                </div>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid>
                <div v-if="product">
                    <div>
                        <img style="margin-top: -11px;width: 150px;height: 208px;" v-if="product.img" :src="'/static/'+product.img[0]">
                    </div>

                    <div class="a1">
                        <div class="a2">
                            <ion-row>
                                <ion-col>

                                    <h1 style="font-size: 18px;margin-top: 10px;">
                                        {{product.name}}
                                    </h1>
                                </ion-col>
                                <ion-col style="margin-top: 12px;">
                                    <h3 style="margin-right: -36px;">{{product.price }}
                                    </h3>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <div class="a3">
                                    <span>
                                        Served with waffle fries and cola.
                                    </span>
                                </div>

                            </ion-row>
                        </div>
                    </div>
                </div>
            </ion-grid>
            <ion-grid style="margin-top: 43px;background-color: #f4f4f4;">

            </ion-grid>
            <ion-grid>
                <ion-row>
                    <ion-item style="margin-top: 20px;width: 129px;margin-left: 3px;">
                        <ion-label>Qty</ion-label>
                        <ion-select value="1" ok-text="Okay" cancel-text="Dismiss">
                            <ion-select-option value="1">1</ion-select-option>
                            <ion-select-option value="2">2</ion-select-option>
                            <ion-select-option value="3">3</ion-select-option>
                            <ion-select-option value="4">4</ion-select-option>
                        </ion-select>
                    </ion-item>
                </ion-row>
            </ion-grid>
            <ion-grid style="margin-top: 20px;background-color: #f4f4f4;">

            </ion-grid>
            <ion-grid>
                <div style="margin-top: 11px;margin-right: 108px;">
                    <span class="a3">
                        Choice of Drink (required, select only 1)
                    </span>
                </div>
            </ion-grid>
            <ion-grid style="margin-left: 10px;">
                <ion-list radio-group>
                    <ion-row>

                        <ion-radio class="a4" value="fanta"></ion-radio>
                        <ion-label class="a5">fanta</ion-label>
                    </ion-row>

                    <ion-row>

                        <ion-radio class="a4" value="water"></ion-radio>
                        <ion-label class="a5">water</ion-label>
                    </ion-row>

                    <ion-row>

                        <ion-radio class="a4" value="cola zero"></ion-radio>
                        <ion-label class="a6">cola zero</ion-label>
                    </ion-row>
                    <ion-row>

                        <ion-radio class="a4" value="coca cola"></ion-radio>
                        <ion-label class="a6">coca cola</ion-label>
                    </ion-row>
                    <ion-row>

                        <ion-radio class="a4" value="fanta red"></ion-radio>
                        <ion-label class="a6">fanta red</ion-label>
                    </ion-row>
                    <ion-row>

                        <ion-radio class="a4" value="Sprite"></ion-radio>
                        <ion-label class="a5">Sprite</ion-label>
                    </ion-row>
                </ion-list>
            </ion-grid>
            <ion-grid style="margin-top: -8px;background-color: #f4f4f4;">

            </ion-grid>
            <ion-grid>
                <span class="a9">Special notes
                </span>
                <textarea class="a7 a8" id="notes" type="text" rows="4"></textarea>
            </ion-grid>
            <ion-grid>
            </ion-grid>

        </ion-content>
        <ion-footer>
            <button class="m7 button button-md" style="background-color: #0944ae;" @click="go('/delivery')">
                <span class="button-inner">
                    <b style="color: white;">Select you delivery area</b>
                </span>
                <div class="button-effect"></div>
            </button>

        </ion-footer>
    </ion-app>

</template>

<script>
import axios from "axios";
const http = axios.create({
  baseURL: "http://localhost:3010/api/"
});
export default {
  data() {
    return {
      product: null
    };
  },

  async created() {
    console.log(this.$route.params.id);
    let res = await http.get("products/" + this.$route.params.id);
    console.log(res);
    this.product = res.data;
  },
  methods: {
    go(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style>
.a1 {
  margin-top: -44px;
  margin-left: 15px;
}
.a2 {
  font-size: 17px;
  line-height: 1.2em;
  height: 1.2em;
}
.a3 {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.54);
  height: 1.2em;
  margin-top: -13px;
}
.a4 {
  margin-top: 10px;
}
.a5 {
  margin-left: -319px;
  margin-top: 10px;
}
.a6 {
  margin-left: -296px;
  margin-top: 10px;
}
.a7 {
  height: unset;
  padding: unset;
  resize: none;
}
.a8 {
  font: inherit;
  width: 100%;
  color: currentColor;
  border: 1;
  padding: 6px 0 7px;
  display: block;
  min-width: 0;
  box-sizing: content-box;
  background: none;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.a9 {
  padding-bottom: 10px;
  margin-left: -295px;
  color: gray;
}
.m7 {
  width: 408px;
  height: 50px;
  color: #0944ae;
}
.rounded {
  width: 100%;
  height: 100px;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 10px;
  margin-bottom: 10px;
}

.container {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>

