<template>
  <v-dialog max-width="600px" v-model="dialog" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="ma-2 mb-2 mx-auto success" text v-bind="attrs" v-on="on">Add New Person</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add New Person</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Name" v-model="newPerson.Name"></v-text-field>
          <v-text-field label="Image Link" v-model="newPerson.img"></v-text-field>
          <v-btn text class="success mx-0 mt-3" @click="submit">Add Person</v-btn>
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
      newPerson: {
        id: this.newId,
        Name: "",
        img: "",
        Gifts: []
      }
    }
  },
  methods: {
    submit() {
      this.dialog = false
      var subPerson = this.newPerson
      this.newPerson = {
        id: this.newId,
        Name: "",
        img: "",
        Gifts: []
      }
      this.$emit("clicked-item", subPerson)
    }
  }
}
</script>
