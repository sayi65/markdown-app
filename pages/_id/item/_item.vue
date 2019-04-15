<template>
  <v-container grid-list-lg>
    <v-layout justify-center row>
      <v-flex md2 lg1 xl1 hidden-sm-and-down>
        <v-card dark color="secondary">
          one
        </v-card>
      </v-flex>
      <v-flex xs12 sm8 md7 lg8 xl5 color="white">
        <v-layout justify-start column class="pa-3 white">
          <v-flex>
            <v-avatar>
              <v-img
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-avatar>
            <nuxt-link to="/_id" class="title black--text">@Kangaroo</nuxt-link>
            <span class="grey--text ml-3">2019年04月12日に投稿</span>
          </v-flex>
          <v-flex class="display-2 font-weight-bold mt-2">
            C++標準化委員会は踏み抜きやすいUndefined Behavior
            TOP100のようなものを公式に出すべきではないか
          </v-flex>
          <v-flex class="mt-5">
            <h2>そもそも Undefined Behaviorとは</h2>
            <p>
              以前に「オレ的vimプラグイン10選」という記事を書いたのですが、この記事では完全に主観で紹介するvimのプラグインを決めていました。
              「世の中のエンジニアのalias設定」を書く際に利用したスクリプトを用いて、客観的なデータからおすすめのプラグインを紹介するのも面白そうだなと思い、調査してみました。
              ランキングとプラグインの一言説明を紹介していきます。
            </p>
          </v-flex>
          <v-divider />
          <v-flex>
            <v-layout align-center justify-space-between row class="pa-3">
              <v-flex>
                <v-avatar size="100">
                  <v-img
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-avatar>
                <nuxt-link to="/_id" class="title grey--text"
                  >@Kangaroo</nuxt-link
                >
              </v-flex>
              <v-flex xs2 sm1 class="mr-4">
                <v-btn flat right>Follow</v-btn>
              </v-flex>
            </v-layout>
            <v-flex>
              <p>
                2019年の目標 記事300いいね1000フォロワー100 1/4/2019
                記事187いいね544フォロワー59 6/2/2019
                記事157いいね471フォロワー50 2018年の目標
                記事200いいね500フォロワー50 2018の実績
                記事140いいね423フォロワー48 7/8/2018
                記事90いいね227フォロワー25
              </p>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm4 md3 lg3 xl3 hidden-xs-only>
        <v-card dark color="secondary">
          three
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  layout: 'default',
  data() {
    return {
      pwdShow: false
    }
  },
  methods: {
    submit() {}
  }
}
</script>
<style>
.v-content {
  padding-top: 5px !important;
}
.container {
  padding-top: 10px !important;
}
</style>
