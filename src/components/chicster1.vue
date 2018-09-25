<template>
    <ion-app>
        <ion-content class="content" no-padding>

            <ion-header>

                <ion-toolbar style="min-height: 280px;">
                    <ion-grid>

                        <div class="m1">
                            <ion-icon style=" font-size:23px; " color="black" name="menu"></ion-icon>
                        </div>
                        <div class="m2">
                            <img src="./../assets/clogo.png">
                        </div>
                        <div class="m3">
                            <img src="./../assets/c1logo.jpg">
                        </div>
                        <div class="m5">
                            <h1 style=color:white>
                                Chicster
                            </h1>
                        </div>
                    </ion-grid>

                </ion-toolbar>
            </ion-header>

            <ion-grid style="border-bottom: 1px solid #ccc;margin-top: 275px;background-color: #f4f4f4;">
                <ion-row class="m6">
                    <h2 style="font-size: 22px;">
                        Menu
                    </h2>
                </ion-row>
            </ion-grid>

            <ion-grid style="MARGIN-TOP: -5PX;background-color: #f4f4f4;">

                <ion-row>
                    <h1 style="font-size: 14px;margin-left: 10px; margin-top: 10px;color: gray;">KIDS MEAL</h1>

                </ion-row>

                <ion-item style="margin-top: 21px;border-top: 1px solid #ccc;" v-for="p in products" :key="p._id">

                    <ion-row style="padding-bottom: 10px;">
                        <ion-col>
                            <img class="m10" v-if="p.img" :src="'/static/'+p.img[0]" alt="" @click="go('/product/'+p._id)">
                        </ion-col>
                        <ion-col class="m9">

                            <span style="margin-left:-55px;" @click="go('/product/'+p._id)">
                                {{p.name}}
                            </span>
                            <div style="padding-top: 5px;">
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);padding-top: 3px;">
                                    Served with waffle fries and
                                </span>
                            </div>
                            <div>
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);"> cola.
                                </span>
                            </div>

                        </ion-col>
                        <ion-col class="col text-center" v-if="p">
                            <h1 class="m11" v-if="p.products.variants">{{p.products[0].variants[0].price}}
                            </h1>
                            <div class="m11">
                                <ion-icon style="font-size: 33px;" class="col text-center" name="add-circle"></ion-icon>

                            </div>
                        </ion-col>

                    </ion-row>

                </ion-item>

            </ion-grid>
            <ion-grid style="MARGIN-TOP: -5PX;background-color: #f4f4f4;">

                <ion-row>
                    <h1 style="font-size: 14px;margin-left: 10px; margin-top: 10px;color: gray;">SANDWICHES</h1>

                </ion-row>

                <ion-item style="margin-top: 21px;border-top: 1px solid #ccc;" v-for="p in products" :key="p._id">

                    <ion-row style="padding-bottom: 10px;">
                        <ion-col>
                            <img class="m10" v-if="p.img" :src="'/static/'+p.img[0]" alt="" @click="go('/product/'+p._id)">
                        </ion-col>
                        <ion-col class="m9">

                            <span style="margin-left:-55px;" @click="go('/product/'+p._id)">
                                {{p.name}}
                            </span>
                            <div style="padding-top: 5px;">
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);padding-top: 3px;">
                                    Served with waffle fries and
                                </span>
                            </div>
                            <div>
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);"> cola.
                                </span>
                            </div>

                        </ion-col>
                        <ion-col class="col text-center" v-if="p">
                            <h1 class="m11" v-if="p.variants">{{p.variants[0].price}}
                            </h1>
                            <div class="m11">
                                <ion-icon style="font-size: 33px;" class="col text-center" name="add-circle"></ion-icon>

                            </div>
                        </ion-col>

                    </ion-row>

                </ion-item>

            </ion-grid>
            <ion-grid style="MARGIN-TOP: -5PX;background-color: #f4f4f4;">

                <ion-row>
                    <h1 style="font-size: 14px;margin-left: 10px; margin-top: 10px;color: gray;">CHICSTER BUCKET</h1>

                </ion-row>

                <ion-item style="margin-top: 21px;border-top: 1px solid #ccc;" v-for="p in products" :key="p._id">

                    <ion-row style="padding-bottom: 10px;">
                        <ion-col>
                            <img class="m10" v-if="p.img" :src="'/static/'+p.img[0]" alt="" @click="go('/product/'+p._id)">
                        </ion-col>
                        <ion-col class="m9">

                            <span style="margin-left:-55px;" @click="go('/product/'+p._id)">
                                {{p.name}}
                            </span>
                            <div style="padding-top: 5px;">
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);padding-top: 3px;">
                                    Served with waffle fries and
                                </span>
                            </div>
                            <div>
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);"> cola.
                                </span>
                            </div>

                        </ion-col>
                        <ion-col class="col text-center" v-if="p">
                            <h1 class="m11" v-if="p.variants">{{p.variants[0].price}}
                            </h1>
                            <div class="m11">
                                <ion-icon style="font-size: 33px;" class="col text-center" name="add-circle"></ion-icon>

                            </div>
                        </ion-col>

                    </ion-row>

                </ion-item>

            </ion-grid>
            <ion-grid style="MARGIN-TOP: -5PX;background-color: #f4f4f4;">

                <ion-row>
                    <h1 style="font-size: 14px;margin-left: 10px; margin-top: 10px;color: gray;">EXTRAS</h1>

                </ion-row>

                <ion-item style="margin-top: 21px;border-top: 1px solid #ccc;" v-for="p in products" :key="p._id">

                    <ion-row style="padding-bottom: 10px;">
                        <ion-col>
                            <img class="m10" v-if="p.img" :src="'/static/'+p.img[0]" alt="" @click="go('/product/'+p._id)">
                        </ion-col>
                        <ion-col class="m9">

                            <span style="margin-left:-55px;" @click="go('/product/'+p._id)">
                                {{p.name}}
                            </span>
                            <div style="padding-top: 5px;">
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);padding-top: 3px;">
                                    Served with waffle fries and
                                </span>
                            </div>
                            <div>
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);"> cola.
                                </span>
                            </div>

                        </ion-col>
                        <ion-col class="col text-center" v-if="p">
                            <h1 class="m11" v-if="p.variants">{{p.variants[0].price}}
                            </h1>
                            <div class="m11">
                                <ion-icon style="font-size: 33px;" class="col text-center" name="add-circle"></ion-icon>

                            </div>
                        </ion-col>

                    </ion-row>

                </ion-item>

            </ion-grid>
            <ion-grid style="MARGIN-TOP: -5PX;background-color: #f4f4f4;">

                <ion-row>
                    <h1 style="font-size: 14px;margin-left: 10px; margin-top: 10px;color: gray;">SALADS</h1>

                </ion-row>

                <ion-item style="margin-top: 21px;border-top: 1px solid #ccc;" v-for="p in products" :key="p._id">

                    <ion-row style="padding-bottom: 10px;">
                        <ion-col>
                            <img class="m10" v-if="p.img" :src="'/static/'+p.img[0]" alt="" @click="go('/product/'+p._id)">
                        </ion-col>
                        <ion-col class="m9">

                            <span style="margin-left:-55px;" @click="go('/product/'+p._id)">
                                {{p.name}}
                            </span>
                            <div style="padding-top: 5px;">
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);padding-top: 3px;">
                                    Served with waffle fries and
                                </span>
                            </div>
                            <div>
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);"> cola.
                                </span>
                            </div>

                        </ion-col>
                        <ion-col class="col text-center" v-if="p">
                            <h1 class="m11" v-if="p.variants">{{p.variants[0].price}}
                            </h1>
                            <div class="m11">
                                <ion-icon style="font-size: 33px;" class="col text-center" name="add-circle"></ion-icon>

                            </div>
                        </ion-col>

                    </ion-row>

                </ion-item>

            </ion-grid>
            <ion-grid style="MARGIN-TOP: -5PX;background-color: #f4f4f4;">

                <ion-row>
                    <h1 style="font-size: 14px;margin-left: 10px; margin-top: 10px;color: gray;">SOUCES</h1>

                </ion-row>

                <ion-item style="margin-top: 21px;border-top: 1px solid #ccc;" v-for="p in products" :key="p._id">

                    <ion-row style="padding-bottom: 10px;">
                        <ion-col>
                            <img class="m10" v-if="p.img" :src="'/static/'+p.img[0]" alt="" @click="go('/product/'+p._id)">
                        </ion-col>
                        <ion-col class="m9">

                            <span style="margin-left:-55px;" @click="go('/product/'+p._id)">
                                {{p.name}}
                            </span>
                            <div style="padding-top: 5px;">
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);padding-top: 3px;">
                                    Served with waffle fries and
                                </span>
                            </div>
                            <div>
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);"> cola.
                                </span>
                            </div>

                        </ion-col>
                        <ion-col class="col text-center" v-if="p">
                            <h1 class="m11" v-if="p.variants">{{p.variants[0].price}}
                            </h1>
                            <div class="m11">
                                <ion-icon style="font-size: 33px;" class="col text-center" name="add-circle"></ion-icon>

                            </div>
                        </ion-col>

                    </ion-row>

                </ion-item>

            </ion-grid>
            <ion-grid style="MARGIN-TOP: -5PX;background-color: #f4f4f4;">

                <ion-row>
                    <h1 style="font-size: 14px;margin-left: 10px; margin-top: 10px;color: gray;">SALADS</h1>

                </ion-row>

                <ion-item style="margin-top: 21px;border-top: 1px solid #ccc;" v-for="p in products" :key="p._id">

                    <ion-row style="padding-bottom: 10px;">
                        <ion-col>
                            <img class="m10" v-if="p.img" :src="'/static/'+p.img[0]" alt="" @click="go('/product/'+p._id)">
                        </ion-col>
                        <ion-col class="m9">

                            <span style="margin-left:-55px;" @click="go('/product/'+p._id)">
                                {{p.name}}
                            </span>
                            <div style="padding-top: 5px;">
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);padding-top: 3px;">
                                    Served with waffle fries and
                                </span>
                            </div>
                            <div>
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);"> cola.
                                </span>
                            </div>

                        </ion-col>
                        <ion-col class="col text-center" v-if="p">
                            <h1 class="m11" v-if="p.variants">{{p.variants[0].price}}
                            </h1>
                            <div class="m11">
                                <ion-icon style="font-size: 33px;" class="col text-center" name="add-circle"></ion-icon>

                            </div>
                        </ion-col>

                    </ion-row>

                </ion-item>

            </ion-grid>
            <ion-grid style="MARGIN-TOP: -5PX;background-color: #f4f4f4;">

                <ion-row>
                    <h1 style="font-size: 14px;margin-left: 10px; margin-top: 10px;color: gray;">DRINKS</h1>

                </ion-row>

                <ion-item style="margin-top: 21px;border-top: 1px solid #ccc;" v-for="p in products" :key="p._id">

                    <ion-row style="padding-bottom: 10px;">
                        <ion-col>
                            <img class="m10" v-if="p.img" :src="'/static/'+p.img[0]" alt="" @click="go('/products/'+p._id)">
                        </ion-col>
                        <ion-col class="m9">

                            <span style="margin-left:-55px;" @click="go('/products/'+p._id)">
                                {{p.name}}
                            </span>
                            <div style="padding-top: 5px;">
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);padding-top: 3px;">
                                    Served with waffle fries and
                                </span>
                            </div>
                            <div>
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);"> cola.
                                </span>
                            </div>

                        </ion-col>
                        <ion-col class="col text-center" v-if="p">
                            <h1 class="m11" v-if="p.variants">{{p.variants[0].price}}
                            </h1>
                            <div class="m11">
                                <ion-icon style="font-size: 33px;" class="col text-center" name="add-circle"></ion-icon>

                            </div>
                        </ion-col>

                    </ion-row>

                </ion-item>

            </ion-grid>
            <ion-grid style="MARGIN-TOP: -5PX;background-color: #f4f4f4;">

                <ion-row>
                    <h1 style="font-size: 14px;margin-left: 10px; margin-top: 10px;color: gray;">STARTERS</h1>

                </ion-row>

                <ion-item style="margin-top: 21px;border-top: 1px solid #ccc;" v-for="p in products" :key="p._id">

                    <ion-row style="padding-bottom: 10px;">
                        <ion-col>
                            <img class="m10" v-if="p.img" :src="'/static/'+p.img[0]" alt="" @click="go('/product/'+p._id)">
                        </ion-col>
                        <ion-col class="m9">

                            <span style="margin-left:-55px;" @click="go('/product/'+p._id)">
                                {{p.name}}
                            </span>
                            <div style="padding-top: 5px;">
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);padding-top: 3px;">
                                    Served with waffle fries and
                                </span>
                            </div>
                            <div>
                                <span style="font-size: 13px;margin-left: -55px;color: rgba(0, 0, 0, 0.54);"> cola.
                                </span>
                            </div>

                        </ion-col>
                        <ion-col class="col text-center" v-if="p">
                            <h1 class="m11" v-if="p.variants">{{p.variants[0].price}}
                            </h1>
                            <div class="m11">
                                <ion-icon style="font-size: 33px;" class="col text-center" name="add-circle"></ion-icon>

                            </div>
                        </ion-col>

                    </ion-row>

                </ion-item>

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
      products: []
    };
  },

  async created() {
    let res = await http.get("products/categories", {
      params: { sort: "name" }
    });
    // console.log(res);
    this.products = res.data;
  },
  methods: {
    go(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style>
.toolbar-background {
  background-image: url("https://zyda-photos-prod.s3.amazonaws.com/restaurants/photo_urls/115/default/cbca88e7-4941-41f7-aedb-91ad616dbf21.jpeg?1537099141");
  background-size: cover;
}
.m1 {
  margin-left: -353px;
}
.m2 {
  margin-top: -32px;
  margin-left: 351px;
}
.m3 {
  width: 50px;
  height: 50px;
  border-radius: 2px;
  margin-top: 154px;
  margin-left: 10px;
}
.m5 {
  margin-top: -72px;
  margin-left: -146px;
}
.m6 {
  color: gray;
  margin-left: 10px;
  margin-top: -6px;
}
.m7 {
  width: 408px;
  height: 50px;
  color: #0944ae;
}
.m8 {
  font-size: 13px;
  margin-right: -81px;
  margin-top: 25px;
}
.m9 {
  margin-top: 14px;
  margin-left: 33px;
}
.m10 {
  margin-left: -16px;
}

.m11 {
  text-align: center;
  padding-top: 10px;
}

.line {
  border-bottom: 1px solid #ccc;
  margin-top: 218px;
}
</style>


