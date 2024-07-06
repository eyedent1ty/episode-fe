import events from './events';

const categories = ['All Categories'];

events.forEach((event) => {
  if (!categories.includes(event.category)) {
    categories.push(event.category);
  }
});

export default categories;
