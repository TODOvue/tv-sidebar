<script setup>
import { ref, watch } from 'vue';
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
  isOutline: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  searchPlaceholder: {
    type: String,
    default: 'Search...',
  },
  grouped: {
    type: Boolean,
    default: false,
  },
  newLabelText: {
    type: String,
    default: 'New',
  },
  newLabelColor: {
    type: String,
    default: '#EF233C',
  },
})

const emit = defineEmits(['click', 'search']);

const searchQuery = ref('');

watch(searchQuery, (newValue) => {
  emit('search', newValue);
});

const {
  filteredList,
  highlightText,
  clickLabel,
  clickItem,
  clickImage,
  getGroupedList,
} = useSidebar(props, emit, searchQuery);

const collapsedGroups = ref(new Map());

watch(() => props.data?.groups, (groups) => {
  if (groups && props.grouped) {
    groups.forEach(group => {
      if (!collapsedGroups.value.has(group.id)) {
        collapsedGroups.value.set(group.id, group.collapsed || false);
      }
    });
  }
}, { immediate: true });

const toggleGroup = (groupId) => {
  const currentState = collapsedGroups.value.get(groupId) || false;
  collapsedGroups.value.set(groupId, !currentState);
};

const isGroupCollapsed = (groupId) => {
  return collapsedGroups.value.get(groupId) || false;
};
</script>

<template>
  <div class="tv-sidebar-body">
    <div class="tv-sidebar">
      <template v-if="isImage">
        <div class="tv-sidebar-title">
          <h1>{{ data.title }}</h1>
          <div class="tv-sidebar-title-separator"></div>
        </div>
        <div v-if="searchable" class="tv-sidebar-search">
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="searchPlaceholder"
            class="tv-sidebar-search-input"
          />
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
        <div v-if="searchable" class="tv-sidebar-search">
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="searchPlaceholder"
            class="tv-sidebar-search-input"
          />
        </div>
        <div class="tv-sidebar-content-label">
          <tv-label
            v-for="label in filteredList('labels')"
            :key="label.id"
            :color="label.color"
            :is-outline="isOutline"
            :size="size"
            @click="clickLabel(label)"
          >
            <span v-html="highlightText(label.name, searchQuery)"></span>
          </tv-label>
        </div>
      </template>
      <template v-else-if="grouped">
        <div class="tv-sidebar-title">
          <h1>{{ data.title }}</h1>
          <div class="tv-sidebar-title-separator"></div>
        </div>
        <div v-if="searchable" class="tv-sidebar-search">
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="searchPlaceholder"
            class="tv-sidebar-search-input"
          />
        </div>
        <div class="tv-sidebar-grouped-content">
          <div
            v-for="group in getGroupedList()"
            :key="group.id"
            class="tv-sidebar-group"
          >
            <div class="tv-sidebar-group-header" @click="toggleGroup(group.id)">
              <div class="tv-sidebar-group-header-content">
                <span class="tv-sidebar-group-icon">{{ isGroupCollapsed(group.id) ? '▶' : '▼' }}</span>
                <span class="tv-sidebar-group-title">{{ group.name }}</span>
                <span class="tv-sidebar-group-counter">{{ group.items.length }}</span>
              </div>
            </div>
            <div v-if="!isGroupCollapsed(group.id)" class="tv-sidebar-group-content">
              <div
                v-for="(item, index) in group.items"
                :key="item.id"
                class="tv-sidebar-group-item"
              >
                <span class="tv-sidebar-item-number">{{ index + 1 }}.</span>
                <span class="tv-sidebar-item-link pointer" @click="clickItem(item)">
                  <tv-label
                    v-if="item.isNew"
                    size="sm"
                    class="tv-sidebar-new-label"
                    is-outline
                    :color="newLabelColor"
                  >
                    {{ newLabelText }}
                  </tv-label>
                  <span v-html="highlightText(item.title, searchQuery)"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="tv-sidebar-title">
          <h1>{{ data.title }}</h1>
          <div class="tv-sidebar-title-separator"></div>
        </div>
        <div v-if="searchable" class="tv-sidebar-search">
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="searchPlaceholder"
            class="tv-sidebar-search-input"
          />
        </div>
        <div class="tv-sidebar-content">
          <ol
            class="tv-sidebar-content-ol"
            v-for="(item, index) in filteredList('list')"
            :key="item.id"
          >
            <li class="tv-sidebar-content-li">
              <span class="tv-sidebar-number">{{ index + 1 }}.</span>
              <span class="tv-sidebar-link pointer" @click="clickItem(item)">
                <tv-label
                  v-if="item.isNew"
                  size="sm"
                  class="tv-sidebar-new-label"
                  is-outline
                  :color="newLabelColor"
                >
                  {{ newLabelText }}
                </tv-label>
                <span v-html="highlightText(item.title, searchQuery)"></span>
              </span>
            </li>
          </ol>
        </div>
      </template>
    </div>
  </div>
</template>

<style></style>
