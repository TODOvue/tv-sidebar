import { computed } from 'vue';

const useSidebar = (props, emit, searchQuery) => {
  const limitedLists = computed(() => {
    if (!props.data) {
      return {};
    }

    const result = {};
    Object.keys(props.data).forEach(key => {
      if (Array.isArray(props.data[key])) {
        const limit = props.limit > 0 ? props.limit : props.data[key].length;
        result[key] = props.data[key].slice(0, limit);
      }
    });

    return result;
  });

  const filteredLists = computed(() => {
    if (!props.data || !searchQuery || !searchQuery.value) {
      return limitedLists.value;
    }

    const query = searchQuery.value.toLowerCase().trim();
    if (!query) {
      return limitedLists.value;
    }

    const result = {};
    Object.keys(props.data).forEach(key => {
      if (Array.isArray(props.data[key])) {
        let filtered = [];
        if (key === 'list') {
          filtered = props.data[key].filter(item =>
            item.title && item.title.toLowerCase().includes(query)
          );
        } else if (key === 'labels') {
          filtered = props.data[key].filter(label =>
            label.name && label.name.toLowerCase().includes(query)
          );
        } else {
          filtered = props.data[key];
        }
        const limit = props.limit > 0 ? props.limit : filtered.length;
        result[key] = filtered.slice(0, limit);
      }
    });

    return result;
  });

  const limitedList = (property) => {
    return limitedLists.value[property] || [];
  };

  const filteredList = (property) => {
    return filteredLists.value[property] || [];
  };

  const highlightText = (text, query) => {
    if (!query || !query.value || !text) {
      return text;
    }

    const searchTerm = query.value.trim();
    if (!searchTerm) {
      return text;
    }
    const escapedQuery = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');

    return text.replace(regex, '<mark>$1</mark>');
  };

  const clickLabel = (label) => {
    emit('click', label);
  };

  const clickItem = (item) => {
    emit('click', item);
  };

  const clickImage = (image) => {
    emit('click', image);
  };

  return {
    limitedList,
    filteredList,
    highlightText,
    clickLabel,
    clickItem,
    clickImage
  };
};

export default useSidebar;
