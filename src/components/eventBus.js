import { reactive } from 'vue';

// Create a reactive object to hold the shared data
const eventBus = reactive({
  favoriteItems: []
});

export default eventBus;