<template>
  <div v-for="post in postData"
  :key="post.id" 
   class="flex bg-white w-[650px] shadow mx-auto mt-2">
    <div class="p-2 flex-shrink-0">
      <img height="250" width="250" class="shadow" :src="post.img" alt="img1" />
    </div>

    <div class="ml-2 p-2">
      <div class="font-bold text-lg text-gray-800">{{ post.title }}</div>
      <div class="text-sm">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from '@vue/runtime-core';

export default {
  name: "HomePage",
  setup() {
    const postData = ref(null);

    onMounted(() => {
      axios
        .get("http://localhost:3000/posts")
        .then((res) => (postData.value = res.data));

      console.log(postData)
    })
    return {postData}
  }
};
</script>

<style></style>
