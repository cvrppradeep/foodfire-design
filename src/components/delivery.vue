<template>
    <ion-app>
        <ion-header>
            <ion-toolbar class="toolbar-background-md" style="height: 132px;">

                <div>
                    <h1 style="margin-left: -172px;">
                        Delivery Location
                    </h1>
                </div>
                <div style="margin-top: -42px;">
                    <ion-icon style="margin-left: 344px;font-size: 32px;" color="black" name="close" @click="go('/chicster1')"></ion-icon>

                </div>
                <div style="margin-left: -9px;">
                    <ion-item>
                        <ion-input required type="text" placeholder="Search for area"></ion-input>
                    </ion-item>
                </div>

            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-grid style="margin-top: 78px;background-color: #f4f4f4;">

            </ion-grid>

            <ion-grid>
                <ion-row>
                    <ion-item style="width: 100%;">
                        <ion-label>kuwait city</ion-label>
                        <ion-select ok-text="Okay" cancel-text="Dismiss">
                            <ion-select-option value="">1</ion-select-option>
                            <ion-select-option value="">2</ion-select-option>
                        </ion-select>

                    </ion-item>

                </ion-row>
            </ion-grid>
            <ion-grid>
                <ion-row>
                    <ion-item style="width: 100%;">
                        <ion-label>Hawally</ion-label>
                        <ion-select ok-text="Okay" cancel-text="Dismiss">
                            <ion-select-option value="">1</ion-select-option>
                            <ion-select-option value="">2</ion-select-option>
                        </ion-select>

                    </ion-item>

                </ion-row>
            </ion-grid>
            <ion-grid>
                <ion-row>
                    <ion-item style="width: 100%;">
                        <ion-label>Farwaniya</ion-label>
                        <ion-select ok-text="Okay" cancel-text="Dismiss">
                            <ion-select-option value="">1</ion-select-option>
                            <ion-select-option value="">2</ion-select-option>
                        </ion-select>

                    </ion-item>

                </ion-row>
            </ion-grid>
            <ion-grid>
                <ion-row>
                    <ion-item style="width: 100%;">
                        <ion-label>Ahmadi</ion-label>
                        <ion-select ok-text="Okay" cancel-text="Dismiss">
                            <ion-select-option value="">1</ion-select-option>
                            <ion-select-option value="">2</ion-select-option>
                        </ion-select>

                    </ion-item>

                </ion-row>
            </ion-grid>
            <ion-grid>
                <ion-row>
                    <ion-item style="width: 100%;">
                        <ion-label>Jahra</ion-label>
                        <ion-select ok-text="Okay" cancel-text="Dismiss">
                            <ion-select-option value="">1</ion-select-option>
                            <ion-select-option value="">2</ion-select-option>
                        </ion-select>

                    </ion-item>

                </ion-row>
            </ion-grid>
            <ion-grid>
                <ion-row>
                    <ion-item style="width: 100%;">
                        <ion-label>Mubarak Al Kabir</ion-label>
                        <ion-select ok-text="Okay" cancel-text="Dismiss">
                            <ion-select-option value="">1</ion-select-option>
                            <ion-select-option value="">2</ion-select-option>
                        </ion-select>

                    </ion-item>

                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-app>
</template>
<script>
export default {
  methods: {
    go(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style>
.flx {
  display: flex;
}
.toolbar-background-md {
  background-color: white;
}
</style>

