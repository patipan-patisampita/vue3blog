<template>
  <div class="bg-white flex flex-col w-80 p-2 m-2 shadow space-y-2">
    <div>
      <label class="block" for="title">เรื่อง</label>
      <input v-model="post.title" class="border w-full" type="text" />
    </div>
    <div>
      <label class="block" for="">ลิงค์ url</label>
      <input v-model="post.img" class="border w-full" type="text" />
    </div>
    <div>
      <label class="block" for="">รายละเอียด</label>
      <textarea v-model="post.body" class="border w-full" rows="5"></textarea>
    </div>
    <button @click="savePost" class="bg-green-400 text-white py-2">ตกลง</button>
  </div>
  {{ post }}
</template>

<script>
import { ref } from "vue";
import axios from 'axios';
import { useRoute,useRouter } from "vue-router";
export default {
  name: "AddPost",
  setup() {
    const route = useRoute()
    const router = useRouter()
    const post = ref({
      title: "",
      img: "",
      body: "",
    });

    const savePost = () => {
      axios.post("http://localhost:3000/posts", post.value).then((res) => {
        // console.log(res.data)
        router.push("/")
      })
    }

    return { post,savePost };
  },
};
</script>
<style></style>
