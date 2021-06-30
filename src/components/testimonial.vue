<template>
  <div class="testimonial">
    <div class="author-container">
      <h2 class="author">{{ test.author }}</h2>
      <i class="description">{{ test.description }}</i>
    </div>
    <div class="test-text-container">
      <div v-if="!readMore" class="short-text">
        "{{ test.text.slice(0, 200) }}..."
        <br />
        <a class="read-btn" v-on:click="readMore = true"> Read more</a>
      </div>
      <div v-else>
        "{{ test.text }}"
        <br />
        <a class="read-btn" v-on:click="readMore = false">See less</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonial",
  props: ["test"],
  data() {
    return {
      readMore: false,
    };
  },
};
</script>

<style scoped>
.testimonial {
  background: rgb(116, 116, 116);
  box-shadow: 0px 0px 5px 2px black;
  display: flex;
  justify-content: left;
  padding: 20px;
  margin: 40px;
}

.author-container {
  border-right: solid white;
  border-width: 1px;
  padding: 0 20px 0 0;
  margin: 0 20px 0 0;
}

.test-text-container {
  width: 500px;
  padding: 0 10px 0 0;
  text-align: center;
}
.read-btn {
  color: white;
}
.read-btn:hover {
  color: lightskyblue;
}
</style>
