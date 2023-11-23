<template>
  <el-button
    :class="{ parallelogram: isParallelogram }"
    v-bind="bindValue"
    size="default"
  >
    <template v-for="(_, key) in $slots" :key="key" #[key]="scoped">
      <div class="content">
        <slot :name="key" v-bind="scoped" v-if="key"></slot>
      </div>
    </template>
  </el-button>
</template>

<script lang="ts" setup>
import { ElButton, buttonEmits } from "element-plus";
import { sLButtonProps, sLButtonEmits } from "./SLButton";
import { useExtendBindValue } from "@/hook/useExtendBindValue";
import { useAttrs } from "vue";

const attrs = useAttrs();
const props = defineProps(sLButtonProps);
const emits = defineEmits(sLButtonEmits);
const bindValue = useExtendBindValue(props, [buttonEmits, emits], attrs);
</script>
<style lang="scss" scoped>
.parallelogram {
  transform: skewX(-30deg);
  .content {
    transform: skewX(30deg);
  }
}
</style>
