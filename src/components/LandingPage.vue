<template>
  <div class="landing-page">
    <div class="grid">
      <div class="image-container">
        <img src="@/assets/grid/2x1_NSwitch_NintendoWorldChampionshipsNESEdition_Teaser_ESes_image800w.jpg"
          alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/1x1_NSwitch_NintendoWorldChampionshipsNESEdition_OutNow_ESes_image600w.jpg"
          alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/1x1_NSwitch_EmioTSMFamDetClub_BASE_ES_es_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/2x1_NSwitch_LuigisMansion2HD_OutnOw_ES_es_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/1x2_NSwitch_NintendoSwitchSports_BasketballUpdate2024_ESes_image600w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/2x1_NSwitch_NintendoSwitchSports_BasketballUpdate2024_ESes_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/1x1_NSwitchDS_NSO_GBA_Densetsu_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/1x2_NSwitchDS_NSO_GBA_Densetsu_image368w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/1x1_NSwitch_Splatoon3_SizzleSeason2024_OutNow_ESes_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/1x1_NSwitch_PaperMarioTheThousandYearDoor_OutNow_ESes_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/2x1_NSwitch_SuperMonkeyBallBananaRumble_Logo_bannerXS.png" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/SQ_Papper_Mario_Accoladeds_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/V1x2_Papper_Mario_Accoladesd_image368w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/00001_mothership_mns_amiibo_replen_big_CTA_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/SQ_Creatividades_NSO_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/H2x1_LM2HD_accolades_bannerXS.jpg" alt="imagen">
      </div>
    </div>

    <div class="last-news none">
      <h2 class="last-news-h2">Últimas noticias</h2>
      <div class="last-news-div">
        <div v-for="(news, index) in latestNews" :key="index">
          <InformationCard :latestNews="news" />
        </div>
      </div>

      <h2 class="more-news">Más noticias <img src="@/assets/svg/direction-righ.svg" class="direction-righ"></h2>
    </div>

    <div class="grid2">
      <div class="image-container">
        <img src="@/assets/grid/1x1_NSwitch_SuperMarioPartyJamboree_BASE_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/1x1_NSwitch_MarioLuigiBrothership_overlay_Eses_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/2x1_NSwitch_TLoZEchosOfWisdom_overlay_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/1x2_NSwitch_EndlessOceanLuminous_OutNow_ESes_image368w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/1x1_NSwitch_EndlessOceanLuminous_OutNow_ESes_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/2x1_NSwitch_PikminGarden_WithContent_ESes_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/2x1_SuperMarioHub_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/1x2_SmartDevice_FireEmblemHeroes_image368w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/1x1_SmartDevice_FireEmblemHeroes_image800w.png" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/1x1_SmartDevice_SuperMarioRun_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/1x1_SmartDevice_PikminBloom_image800w.jpg" alt="imagen">
      </div>
      <div class="image-container">
        <img src="@/assets/grid/H2x1_SmartDevice_AnimalCrossingPocketCamp_bannerXS.jpg" alt="imagen">
      </div>
    </div>
    <div class="next-games none">
      <h2 class="last-news-h2">Próximos juegos</h2>
      <div v-for="(news, index) in upcomingGames" :key="index">
        <InformationCard :latestNews="news" />
      </div>
      <h2 class="more-news red">Ver todos los próximos juegos<img src="@/assets/svg/direction-righ-red.svg"
          class="direction-righ"></h2>
    </div>
    <div class="recent-releases none">
      <h2 class="last-news-h2">Lanzamientos recientes</h2>
      <div v-for="(realeases, index) in recentReleases" :key="index">
        <InformationCard :latestNews="realeases" />
      </div>
      <h2 class="more-news red">Ver todos los lanzamientos recientes<img src="@/assets/svg/direction-righ-red.svg"
          class="direction-righ"></h2>
    </div>
    <div class="news-section">
      <div class="last-news">
        <h2 class="last-news-h2">Últimas noticias</h2>
        <div v-for="(news, index) in latestNews" :key="index">
          <InformationCard :latestNews="news" />
        </div>
        <h2 class="more-news">Más noticias <img src="@/assets/svg/direction-righ.svg" class="direction-righ"></h2>
      </div>

      <div class="next-games">
        <h2 class="last-news-h2">Próximos juegos</h2>
        <div v-for="(news, index) in upcomingGames" :key="index">
          <InformationCard :latestNews="news" />
        </div>
        <h2 class="more-news red">Ver todos los próximos juegos<img src="@/assets/svg/direction-righ-red.svg"
            class="direction-righ"></h2>
      </div>

      <div class="recent-releases">
        <h2 class="last-news-h2">Lanzamientos recientes</h2>
        <div v-for="(realeases, index) in recentReleases" :key="index">
          <InformationCard :latestNews="realeases" />
        </div>
        <h2 class="more-news red">Ver todos los lanzamientos recientes<img src="@/assets/svg/direction-righ-red.svg"
            class="direction-righ"></h2>
      </div>
    </div>
  </div>
</template>

<script>
import InformationCard from './cards/InformationCard.vue';
import data from '../data/cards_info.json';

export default {
  name: 'LandingPage',
  components: {
    InformationCard
  },
  data() {
    return {
      latestNewsData: data.latest_news,
      upcoming_games: data.upcoming_games,
      recent_releases: data.recent_releases
    };
  },
  computed: {
    latestNews() {
      return this.latestNewsData;
    },
    upcomingGames() {
      return this.upcoming_games;
    },
    recentReleases() {
      return this.recent_releases;
    }
  }
};
</script>

<style scoped>
.news-section {
  display: none;
}

.landing-page {
  background-color: #f4f4f4;
  padding-top: 70px;
  overflow-x: hidden;
}


.grid,
.grid2 {
  display: grid;
  grid-template-columns: 1fr;
  margin: 4px;
  overflow-x: hidden;
}

.grid> :nth-child(5),
.grid> :nth-child(2),
.grid> :nth-child(8),
.grid> :nth-child(13),
.grid2> :nth-child(4),
.grid2> :nth-child(8) {
  display: none;
}

.image-container {
  width: 100%;
  max-width: 100%;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.image-container:hover {
  transform: translateY(-4px);
}

.image-container img {
  width: 100%;
  height: auto;
  max-width: 100%;
  box-sizing: border-box;
}

.last-news-h2 {
  background-color: white;
  font-size: 1.571rem;
  font-weight: 700;
  color: #333;
  padding: 12px;
  padding-left: 24px;
  margin: 0 4px;
  position: relative;
}

.last-news-h2::after {
  content: '';
  display: block;
  width: 4px;
  height: 38px;
  background-color: #f4f4f4;
  margin-top: 8px;
  position: absolute;
  top: 0;
  left: 12px;
  border-radius: 4px;

}

.more-news {
  color: #333;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  padding: 8px 24px 8px 8px;
  padding-right: 24px;
  cursor: pointer;
  font-size: 1rem;
  align-items: center;
  margin: 8px 0;
  background-color: white;
}

.more-news:hover .direction-righ {
  transform: translateX(4px);
}

.direction-righ {
  width: 20px;
  height: auto;
  margin-left: 6px;
  transition: transform 0.2s ease;
}

.red {
  color: #e60012;
  font-size: .9rem;
  font-weight: 600;
}

@media (min-width: 678px) {
  .landing-page {
    padding-left: 88px;
  }

  .grid,
  .grid2 {
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
    gap: 4px;
    margin: 4px;
    overflow-y: hidden;
  }

  .grid>*>img,
  .grid2>*>img {
    height: 100%;
  }

  .grid> :nth-child(2) {
    grid-column-start: 1;
    grid-row-start: 1;
    display: block;
  }

  .grid> :nth-child(4) {
    grid-column-start: 1;
    grid-row-start: 2;
    grid-column: span 2;
  }

  .grid> :nth-child(5) {
    grid-column-start: 3;
    grid-row-start: 1;
    grid-row: span 2;
    display: block;
  }

  .grid> :nth-child(1),
  .grid> :nth-child(6),
  .grid> :nth-child(7),
  .grid> :nth-child(12),
  .grid2> :nth-child(5),
  .grid2> :nth-child(9) {
    display: none;
  }

  .grid> :nth-child(7) {
    grid-column-start: 1;
    grid-row-start: 3;
    grid-row: span 3;
  }

  .grid> :nth-child(8) {
    display: block;
    grid-row: span 2;
  }


  .grid> :nth-child(11) {
    grid-column: span 2;
  }

  .grid> :nth-child(13) {
    display: block;
    grid-row: span 2;
  }

  .grid> :last-child {
    grid-column: span 2;
  }

  .grid2> :nth-child(3) {
    grid-column-start: 1;
    grid-row-start: 2;
    grid-column: span 2;
  }

  .grid2> :nth-child(4) {
    grid-column-start: 3;
    grid-row-start: 1;
    grid-row: span 2;
    display: block;
  }

  .grid2> :nth-child(6),
  .grid2> :nth-child(7) {
    grid-row: span 3;
    grid-column: span 3;
  }

  .grid2> :nth-child(8) {
    grid-row: span 2;
    display: block;
  }

  .grid2> :last-child {
    grid-column: span 2;
  }

  .last-news-div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
  }

}

@media (min-width: 1240px) {
  .landing-page {
    display: grid;
    grid-template-columns: 1fr .45fr;
  }

  .last-news-h2 {
    margin-top: 4px;
    font-size: 1.143rem;
    padding: 16px;
    padding-left: 24px;
  }

  .last-news-h2::after {
    height: 32px;
    margin-top: 12px;
  }

  .none {
    display: none;
  }

  .grid2> :nth-child(6) {
    grid-row: span 1;
    grid-column: span 1;
  }

  .grid2> :nth-child(7) {
    grid-column: span 2;
    grid-row: span 1;
  }

  .news-section {
    display: block;
    grid-column-start: 2;
    grid-row-start: 1;
    /* Ensures the news-section starts from the first row */
    grid-row: span 2;
  }

  .grid {
    grid-row-start: 1;
  }

  .grid2 {
    grid-column-start: 1;
    grid-row-start: 2;
    /* Ensures the grid2 starts from the second row */
  }

  .grid>*>img,
  .grid2>*>img {
    border-radius: 4px;
  }

  .last-news>div {
    display: block;
  }
}
</style>
