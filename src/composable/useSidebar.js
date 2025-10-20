import { computed } from 'vue';

const useSidebar = (props, emit) => {
  const linkComponent = computed(() =>
    props.linkTag === 'nuxt-link' ? 'nuxt-link' : 'router-link'
  );
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
  
  return {
    linkComponent,
    limitedList,
    clickLabel
  };
};

export default useSidebar;
