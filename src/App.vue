<template>
  <el-config-provider namespace="shilim">
    <s-l-button
      :is-parallelogram="isParallelogram"
      :type="type"
      :style="style"
      @click="visible = true"
    >
      打开弹窗
    </s-l-button>
    <s-dialog title="弹窗" v-model="visible" @closed="handleClosed">
      我是内容
    </s-dialog>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import SLButton from "@/components/SLButton.vue";
import SDialog from "@/components/SLDialog.vue";
import { nextTick, reactive, ref } from "vue";

const type = ref<"primary" | "">("");
const isParallelogram = ref(true);
const visible = ref(false);
const style = reactive({ width: "200px" });

setTimeout(() => {
  isParallelogram.value = false;
}, 1000);

setTimeout(() => {
  type.value = "primary";
}, 2000);

setTimeout(() => {
  style.width = "300px";
}, 3000);

const handleClosed = () => {
  nextTick(() => {
    console.log(visible.value);
  });
};
</script>
<style scoped></style>
