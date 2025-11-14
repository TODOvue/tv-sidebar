import { computed } from 'vue';

const useSidebar = (props, emit) => {
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

  const limitedList = (property) => {
    return limitedLists.value[property] || [];
  };
  
  const clickLabel = (label) => {
    emit('clickLabel', label);
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
    clickLabel,
    clickItem,
    clickImage
  };
};

export default useSidebar;
