<template>
  <v-dialog max-width="600px" v-model="dialog" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="ma-2 mb-2 mx-auto success" text v-bind="attrs" v-on="on">Add New Gift</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add New Person</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Gift Name" v-model="newGift.GiftName"></v-text-field>
          <v-text-field label="Gift Cost" v-model.number="newGift.Cost"></v-text-field>
          <v-text-field label="Gift Link" v-model="newGift.GiftURL"></v-text-field>
          <v-text-field label="Image Link" v-model="newGift.img"></v-text-field>
          <v-btn text class="success mx-0 mt-3" @click="submit">Add Gift</v-btn>
          <v-btn text class="error mx-0 mt-3 float-right" @click="() => (dialog = false)">Cancel</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["newId"],
  data() {
    return {
      dialog: false,
      newGift: {
        id: this.newId,
        GiftName: "",
        GiftURL: "",
        bought: false,
        Cost: 0.0,
        img: ""
      }
    }
  },
  methods: {
    submit() {
      this.dialog = false
      var gift = this.newGift
      this.newGift = {
        id: this.newId,
        GiftName: "",
        GiftURL: "",
        bought: false,
        Cost: 0.0,
        img: ""
      }
      this.$emit("clicked-item", gift)
    }
  }
}
</script>
