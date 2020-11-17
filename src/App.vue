<template>
  <v-app>
    <h1 class="mx-auto">Gift Tracker</h1>
    <section v-if="!isPersonSelected" class="person-list mx-auto">
      <div v-if="appState === 'person_list'">
        <v-row><Popup @clicked-item="addNewPerson" :new-id="newId" /> </v-row>
        <ul>
          <li v-for="(person, index) in Persons" :key="person.id">
            <v-card max-width="400" class="mx-auto">
              <v-img class="mx-auto" :src="person.img === '' ? defaultPersonImg : person.img" contain height="200" width="200"></v-img>

              <v-card-title class="mx-auto">
                {{ person.Name }}
              </v-card-title>

              <v-card-subtitle class="mx-auto">
                <div class="grid-container">
                  <div class="grid-child-cost">Total Cost £{{ getTotalCost(person.Gifts, "Cost") }}</div>
                  <div class="grid-child-amount">{{ person !== undefined && person !== null ? person.Gifts.length : 0 }} Gifts</div>
                </div>
              </v-card-subtitle>

              <v-card-actions>
                <div class="text-center">
                  <v-btn class="ma-2" info text @click="openGiftList(person)">More Info</v-btn>
                  <v-btn class="ma-2" color="error" @click="removePerson(index)">Remove</v-btn>
                </div>
              </v-card-actions>
            </v-card>
          </li>
        </ul>
      </div>
      <div v-else-if="appState === 'person_create'" class="mx-auto" max-width="300">
        <v-form ref="form" v-model="valid">
          <v-text-field v-model="newPersonName" :rules="formNameRules" label="Name" required />
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="addNewPerson">Add</v-btn>
          <v-btn color="error" class="mr-4" @click="appState = 'person_list'">Cancel</v-btn>
        </v-form>
      </div>
    </section>

    <section v-else-if="isPersonSelected" class="person-details">
      <h2>Gift List</h2>
      <PopupAddGift @clicked-item="addNewGift" :new-id="maxGiftId(selectedPerson)" />
      <v-btn class="ma-2" color="error" @click="() => closeGiftList()">Back</v-btn>
      <ul>
        <li v-for="(gift, index) in selectedPerson.Gifts" :key="gift.id">
          <v-card max-width="400" class="mx-auto">
            <v-img class="mx-auto" :src="gift.img === '' ? defaultGiftImg : gift.img" contain height="200" width="200">
              <v-btn class="mx-2" fab dark small :color="gift.bought ? 'success' : 'grey'" @click="gift.bought = !gift.bought">
                <v-icon dark :color="gift.bought ? '' : 'blue-grey'"> mdi-check </v-icon>
              </v-btn>
            </v-img>

            <v-card-title class="mx-auto">
              {{ gift.GiftName }}
            </v-card-title>

            <v-card-subtitle class="mx-auto">
              <div class="grid-container">
                <div class="grid-child-cost">Cost £{{ gift.Cost }}</div>
              </div>
            </v-card-subtitle>
            <v-card-actions>
              <div style="float:left;">
                <div class="text-center">
                  <v-btn class="ma-1" color="primary">Edit</v-btn>
                  <v-btn class="ma-1" color="error" @click="removeGift(index)">Remove</v-btn>
                </div>
                <div class="text-center">
                  <v-btn block v-if="gift.GiftURL !== ''" class="ma-1" color="success" @click="openLink(gift.GiftURL)">Goto Link</v-btn>
                </div>
              </div>
            </v-card-actions>
          </v-card>
        </li>
      </ul>
    </section>
  </v-app>
</template>

<script>
const STORAGE_KEY = "gift-list-storage"

import Popup from "./components/Popup"
import PopupAddGift from "./components/Popup_AddGift"
export default {
  components: { Popup, PopupAddGift },
  name: "App",

  data() {
    return {
      defaultPersonImg: require("../src/assets/images/default-person.png"),
      defaultGiftImg: require("../src/assets/images/default-gift.png"),
      isPersonSelected: false,
      appState: "person_list",
      // Form Logic
      valid: false,
      newPersonName: "",
      newPerson: {
        id: "",
        Name: "",
        img: "",
        Gifts: []
      },
      formNameRules: [value => !!value || "Name is required"],
      Persons: [],
      selectedPerson: {}
    }
  },
  created() {
    this.Persons = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  },
  computed: {
    newId() {
      if (this.Persons !== undefined && this.Persons !== null && this.Persons.length !== 0) {
        return (
          Math.max.apply(
            Math,
            this.Persons.map(function(o) {
              return o.id
            })
          ) + 1
        )
      } else {
        return 1
      }
    }
  },
  methods: {
    getTotalCost(items, prop) {
      if (items !== null && items !== undefined) {
        return items.reduce((a, b) => {
          return a + b[prop]
        }, 0)
      } else {
        return 0
      }
    },
    /* Person Methods */
    addNewPerson(value) {
      this.Persons.push(value)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.Persons))
    },
    removePerson(index) {
      this.Persons.splice(index, 1)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.Persons))
    },
    /* Gift Methods */
    addNewGift(value) {
      this.selectedPerson.Gifts.push(value)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.Persons))
    },
    removeGift(index) {
      this.selectedPerson.Gifts.splice(index, 1)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.Persons))
    },
    openGiftList(person) {
      this.selectedPerson = person
      this.isPersonSelected = true
    },
    closeGiftList() {
      this.isPersonSelected = false
      this.selectedPerson = {}
    },
    maxGiftId(person) {
      return (
        Math.max.apply(
          Math,
          person.Gifts.map(function(o) {
            return o.id
          })
        ) + 1
      )
    },
    openLink(url) {
      window.open(url, "_blank")
    }
  }
}
</script>

<style>
/* persons item list section */
.person-list {
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
}

.person-list ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
}

.person-list ul li {
  max-width: 400px;
  padding: 1rem;
}

.person-details {
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
}

.person-details ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
}

.person-details ul li {
  max-width: 400px;
  padding: 1rem;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  font-size: 1.2em;
}
</style>
