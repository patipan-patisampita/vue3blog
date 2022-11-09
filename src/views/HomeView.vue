<template>
  <div v-for="text in 3"
  :key="text.id" 
   class="flex bg-white w-[650px] shadow mx-auto mt-2">
    <div class="p-2 flex-shrink-0">
      <img height="250" width="250" class="shadow" src="https://picsum.photos/536/354" alt="img1" />
    </div>

    <div class="ml-2 p-2">
      <div class="font-bold text-lg text-gray-800">กรุงเทพมหานคร</div>
      <div class="text-sm">
        เมืองหลวงของประเทศไทย กรุงเทพมหานคร
        เป็นเมืองหลวงและนครที่มีประชากรมากที่สุดของประเทศไทย
        เป็นศูนย์กลางการปกครอง การศึกษา การคมนาคมขนส่ง การเงินการธนาคาร
        การพาณิชย์ การสื่อสาร และความเจริญของประเทศ
        ตั้งอยู่บนสามเหลี่ยมปากแม่น้ำเจ้าพระยา มีแม่น้ำเจ้าพระยาไหลผ่าน
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style></style>
