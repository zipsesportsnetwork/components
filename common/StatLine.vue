<template>
  <div class="stats">
    <span>
      <img :src="ScoreIcon" /><span class="stat">{{ player.score }}</span>
    </span>
    <span>
      <img :src="GoalIcon" /><span class="stat">{{ player.goals }}</span>
    </span>
    <span>
      <img :src="AssistIcon" /><span class="stat">{{ player.assists }}</span>
    </span>
    <span>
      <img :src="SaveIcon" /><span class="stat">{{ player.saves }}</span>
    </span>
    <span>
      <img :src="ShotIcon" /><span class="stat">{{ player.shots }}</span>
    </span>
  </div>
</template>

<script>
import ShotIcon from "../static/shot.svg";
import ScoreIcon from "../static/scorev2.svg";
import SaveIcon from "../static/save.svg";
import GoalIcon from "../static/goal.svg";
import AssistIcon from "../static/assist.svg";

export default {
  props: ["player"],
  data: () => ({
    ShotIcon,
    ScoreIcon,
    SaveIcon,
    GoalIcon,
    AssistIcon,
  }),
};
</script>

<style lang="scss">
.stats {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 40px;
  /*font-size: 36px;*/

  & > span {
    padding-left: 16px;
    padding-right: 16px;
  }

  * {
    height: inherit;
    object-fit: contain;
    text-align: center;
    left: 0;
  }

  img {
    margin-bottom: -4px;
    padding-right: 8px;
  }
}
</style>
