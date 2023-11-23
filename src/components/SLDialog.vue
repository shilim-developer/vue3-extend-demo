<template>
  <el-dialog v-bind="bindValue">
    <template v-for="(_, key) in $slots" :key="key" #[key]="scoped">
      <slot :name="key" v-bind="scoped" v-if="key"></slot>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ElDialog, dialogEmits, dialogProps } from "element-plus";
import { useExtendBindValue } from "@/hook/useExtendBindValue";

const props = defineProps(dialogProps);
const emits = defineEmits(dialogEmits);
const bindValue = useExtendBindValue(props, [dialogEmits, emits]);
</script>
<style lang="scss" scoped></style>
