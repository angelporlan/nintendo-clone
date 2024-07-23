<template>
    <div class="card">
      <div class="card-image">
        <img :src="require(`@/assets/cards/${latestNews.image_path}`)" alt="imagen">
      </div>
      <div class="card-content">
        <h2>{{ latestNews.title }}</h2>
        <span v-if="latestNews.date">{{ latestNews.date }} | {{ latestNews.platform }}</span>
        <p v-if="latestNews.date">{{ latestNews.summary }}</p>
        <span v-if="latestNews.release_date">{{ latestNews.release_date }}</span>
        <span v-if="latestNews.format">{{ latestNews.format }} {{ latestNews.platform }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InformationCard',
    props: {
      latestNews: {
        type: Object, 
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    background-color: white;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    margin: 4px;
    width: 100%;
    max-width: 100%; 
    overflow: hidden; 
    cursor: pointer;
  }
  
  .card-image {
    flex: 0 0 23%;
    display: flex;
    align-items: baseline; 
    justify-content: center; 
    margin: 4px 0 4px 4px;
  }
  
  .card-image img {
    width: 100%;
    height: auto;
    object-fit: cover; 
    border-radius: 4px;
  }
  
  .card-content {
    flex: 1;
    padding: 16px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start; 
  }
  
  .card-content h2 {
    color: #333;
    font-size: 1.286rem;
    font-weight: 700;
    line-height: 1.15;
    margin: 0 0 4px 0;
  }

  .card:hover h2 {
    text-decoration: underline;
  }
  
  .card-content span {
    color: #999;
    font-size: 0.8rem;
    font-weight: 300;
    margin: 0 0 8px 0;
  }
  
  .card-content p {
    margin: 0;
    color: #666;
    line-height: 1.5;
    flex-grow: 1;
    display: flex;
    align-items: baseline;
  }

  @media (min-width: 960px) {

    h2 {
      font-size: 1.143rem;
    } 

    p {
      font-size: .9286rem;
    }
  }

  @media (min-width: 678px) and (max-width: 1240px) {

    .card {
      height: 100%;
    }
  }
  </style>
  