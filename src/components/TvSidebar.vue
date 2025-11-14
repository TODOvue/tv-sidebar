<script setup>
import { TvLabel } from '@todovue/tv-label';
import useSidebar from '../composable/useSidebar.js';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
  isImage: {
    type: Boolean,
    default: false,
  },
  isLabel: {
    type: Boolean,
    default: false,
  },
  limit: {
    type: Number,
    default: 0,
  },
  clickable: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['clickLabel', 'click']);

const {
  limitedList,
  clickLabel,
  clickItem,
  clickImage,
} = useSidebar(props, emit);
</script>

<template>
  <div class="tv-sidebar-body">
    <div class="tv-sidebar">
      <template v-if="isImage">
        <div class="tv-sidebar-title">
          <h1>{{ data.title }}</h1>
          <div class="tv-sidebar-title-separator"></div>
        </div>
        <div class="tv-sidebar-image-container">
          <img
            :src="data.image.src"
            :alt="data.image.alt"
            :class="{ 'pointer': clickable }"
            @click="clickable && clickImage(data.image)"
          />
        </div>
      </template>
      <template v-else-if="isLabel">
        <div class="tv-sidebar-title">
          <h1>{{ data.title }}</h1>
          <div class="tv-sidebar-title-separator"></div>
        </div>
        <div class="tv-sidebar-content-label">
          <tv-label
            v-for="label in limitedList('labels')"
            :key="label.id"
            :color="label.color"
            @click="clickLabel(label)"
          >
            {{ label.name }}
          </tv-label>
        </div>
      </template>
      <template v-else>
        <div class="tv-sidebar-title">
          <h1>{{ data.title }}</h1>
          <div class="tv-sidebar-title-separator"></div>
        </div>
        <div class="tv-sidebar-content">
          <ol
            class="tv-sidebar-content-ol"
            v-for="(item, index) in limitedList('list')"
            :key="item.id"
          >
            <li class="tv-sidebar-content-li">
              <span class="tv-sidebar-number">{{ index + 1 }}.</span>
              <span class="tv-sidebar-link pointer" @click="clickItem(item)">
                {{ item.title }}
              </span>
            </li>
          </ol>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss" src="../assets/scss/style.scss"></style>
