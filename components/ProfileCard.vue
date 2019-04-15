<template>
  <v-layout align-start justify-start column fill-height>
    <v-flex>
      <v-card class="mx-2">
        <v-img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        ></v-img>
        <v-divider />
        <div>
          <h3 class="headline mb-0">@Kangaroo</h3>
        </div>
        <v-card-text
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.</v-card-text
        >
        <v-divider />
        <v-btn nuxt href="/setting/profile" block flat>Change Profile</v-btn>
        <v-divider />
      </v-card>
    </v-flex>
  </v-layout>
</template>
